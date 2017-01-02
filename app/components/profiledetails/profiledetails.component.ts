import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ProfileDetailsService } from '../../services/profileDetailsService';
import { ProfileDetails } from '../../classes/ProfileDetailsClass';

@Component({
  moduleId: module.id,
  selector: 'profileDetails',
  templateUrl: "profileDetails.component.html"
})

export class ProfileDetailsComponent {

  profiledetails: ProfileDetails;

  constructor (private profileService: ProfileDetailsService){
    
    profileService.getProfile()
      .subscribe(
        (value: Response) => {
          this.profiledetails = <ProfileDetails>value.json();
          console.log(this.profiledetails);
        }
      );
  }
 }
