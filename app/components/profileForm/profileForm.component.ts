import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProfileDetailsService } from '../../services/profileDetailsService/profileDetailsService';
import { ProfileDetails } from '../../classes/ProfileDetailsClass';

@Component({
  moduleId: module.id,
  selector: 'profileform',
  templateUrl: "profileForm.component.html"
})

export class ProfileFormComponent { 
  error: String = "";
  profileDetails: ProfileDetails;
  firstname: String = "";
  lastname: String = "";
  picture: String = "";

  constructor (private profileDetailsService: ProfileDetailsService, private router: Router){
    
    
    
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
    let id = JSON.parse(localStorage.getItem("user")).id;
    this.profileDetailsService.getProfile(id)
      .subscribe(
        profileDetails => {
          this.parseRes(profileDetails);
        }
      );
  }

  saveProfileDetails(profileDetails) {
    this.profileDetails = profileDetails;
    this.firstname = profileDetails.firstname;
    this.lastname = profileDetails.lastname;
  }

  editAttempt(){
    this.profileDetailsService.setEdit(
      this.profileDetails.id,
      this.firstname,
      this.lastname
    ).subscribe(
      res => {
        this.router.navigateByUrl("/profile");
      }
    );
  }
}
