import { Component,  Pipe } from '@angular/core';
import { Response } from '@angular/http';
import { DomSanitizer,  SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { ProfileDetailsService } from '../../services/profileDetailsService/profileDetailsService';

import { ProfileDetails } from '../../classes/ProfileDetailsClass';
import { AchievementList } from '../../classes/AchievementListClass';
import { Achievement } from '../../classes/AchievementClass';

@Component({
  moduleId: module.id,
  selector: 'profileDetails',
  templateUrl: "profileDetails.component.html",
})

export class ProfileDetailsComponent {
  error: String = "";

  profileDetails: ProfileDetails;
  personalProfile: Boolean = false;
  connected: Boolean = false;

  showList: Number = 0;
  paddingLeft = 0;
  showAchievement: Number = 0;
  nbAchievementShown = 0;

  longDescWithLinks = "";

  constructor(private profileDetailsService: ProfileDetailsService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.connected = (localStorage.getItem("user")) != null;


  }

  changeShowList(number) {
    this.showList = number;
  }

  changeShowAchievement(number) {
    this.showAchievement = number;
  }

  changeNbAchievementShown(number) {
    let nbTabs = this.profileDetails.tabs.length;
    if ((localStorage.getItem("user")) == null) {
      nbTabs = 0;
    }
    this.nbAchievementShown = number;
    let widthAchievement = 100 / (nbTabs + 1);
    this.paddingLeft = (number * widthAchievement) + (widthAchievement / 2) - 0.5;
  }

  parseRes(res) {

    if (res.length == 1) {
      // ERROR
      switch (res) {
        case "A":
          this.error = "User not connected";
          break;
        case "B":
          this.error = "Internal error, server unavailable";
          break;
        case "C":
          this.error = "This user doesn't exist or you don't have the right to access it";
          break;
      }
      console.error(this.error);
    } else {
      this.saveProfileDetails(res);
      console.log(res);
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['id']) {
        this.profileDetailsService.getProfile(params['id'])
          .subscribe(
            profileDetails => {
              this.parseRes(profileDetails);
            }
          );
      } else {
        let id = JSON.parse(localStorage.getItem("user")).id;
        this.profileDetailsService.getProfile(id)
          .subscribe(
            profileDetails => {
              this.parseRes(profileDetails);
            }
          );
      }
    });
    
    
  }

  saveProfileDetails(profileDetails) {
    this.profileDetails = profileDetails;
    let nbTabs = this.profileDetails.tabs.length;
    if ((localStorage.getItem("user")) == null) {
      nbTabs = 0;
    }
    this.paddingLeft = ((100 / (nbTabs + 1)) / 2) - 0.5;
    if (localStorage.getItem("user") && this.profileDetails.id == JSON.parse(localStorage.getItem("user")).id) {
      this.personalProfile = true;
    }
    this.parseLinks();
  }

  parseLinks() {
    if(! this.profileDetails){return;}
    
    let pattern = /^http[s]?:/ //g;

    
    let tabs: AchievementList[] = this.profileDetails.tabs;
    let achievements: Achievement[] = [];
    for (let i = 0; i < tabs.length; i++) {
      if(tabs[i].achievements){
        achievements = achievements.concat(tabs[i].achievements);
      }      
    }

    for (let i = 0; i < achievements.length; i++) {
      
      let res = "";
      let parts: string[] = achievements[i].longdesc.split(" ");
      for (let j = 0; j < parts.length; j++) {
        let partEqualsLink = pattern.exec(parts[j]);
        if(partEqualsLink){
          res += "<a href='"+parts[j]+"' target='_blank'>"+parts[j]+"</a> ";
        }
        else{
          res += parts[j]+" ";
        }
        
      }
      achievements[i].longDescWithLinks = res;
    }

  }


}