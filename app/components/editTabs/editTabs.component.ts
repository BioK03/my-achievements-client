import { Component } from '@angular/core';

import { ProfileDetailsService } from '../../services/profileDetailsService';
import { ProfileDetails } from '../../classes/ProfileDetailsClass';

@Component({
  moduleId: module.id,
  selector: 'edittabs',
  templateUrl : "editTabs.component.html"
})

export class EditTabsComponent {
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