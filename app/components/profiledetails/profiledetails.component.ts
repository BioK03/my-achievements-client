import { Component, Pipe } from '@angular/core';
import { Response } from '@angular/http';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { ProfileDetailsService } from '../../services/profileDetailsService';
import { ProfileDetails } from '../../classes/ProfileDetailsClass';



@Component({
  moduleId: module.id,
  selector: 'profileDetails',
  templateUrl: "profileDetails.component.html",
})

export class ProfileDetailsComponent {
  error: String = "";

  profileDetails: ProfileDetails;
  personalProfile: Boolean = false;

  constructor (private profileDetailsService: ProfileDetailsService, private sanitizer: DomSanitizer, private route: ActivatedRoute){
    
    
    
  }

  parseRes(res) {
    
    if(res.length == 1){
      // ERROR
      switch(res) {
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
    }
    else {
      this.saveProfileDetails(res);
    }
  }

  ngOnInit() {
    this.route.queryParams
      .map(params => params['id'])
      .subscribe((id)=>{
        console.log(id);
        this.profileDetailsService.getProfile(id)
          .subscribe(
            profileDetails => {
              this.parseRes(profileDetails);
            }
          );
      });
  }

  saveProfileDetails(profileDetails) {
    this.profileDetails = profileDetails;
    if(localStorage.getItem("user") && this.profileDetails.id == JSON.parse(localStorage.getItem("user")).id) {
      this.personalProfile = true;
    }
  }

  
}
