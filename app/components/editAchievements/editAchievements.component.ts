import { Component } from '@angular/core';

import { ProfileDetailsService } from '../../services/profileDetailsService/profileDetailsService';
import { ProfileDetails } from '../../classes/ProfileDetailsClass';

@Component({
  moduleId: module.id,
  selector: 'editachievements',
  templateUrl : "editAchievements.component.html"
})

export class EditAchievementsComponent { 
  error: String = "";
  profileDetails: ProfileDetails;

  constructor (private profileDetailsService: ProfileDetailsService){
    
    
    
  }

  ngOnInit() {
    this.profileDetailsService.getProfile(JSON.parse(localStorage.getItem("user")).id)
      .subscribe(
        profileDetails => {
          this.parseRes(profileDetails);
        }
      );
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

  saveProfileDetails(profileDetails) {
    this.profileDetails = profileDetails;
  }
}
