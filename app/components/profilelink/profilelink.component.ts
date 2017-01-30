import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ProfileService } from '../../services/ProfileService/ProfileService';
import { Profile } from '../../classes/ProfileClass';

@Component({
  moduleId: module.id,
  selector: 'profileLink',
  templateUrl: "profileLink.component.html",
  providers: [ ProfileService ]
})

export class ProfileLinkComponent {
  profile: Profile;

  constructor (private profileService: ProfileService){
    this.profile = JSON.parse(localStorage.getItem("user"));
    profileService.isConnected().subscribe(
      res => {
        if(res["message"] == true){
          this.profile = JSON.parse(localStorage.getItem("user"));
        } else {
          localStorage.removeItem("user");
          this.profile = null;
        }
        
      }
    );
     
  }
}
