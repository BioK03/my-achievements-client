import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ProfileService } from '../../services/profile/profile-service';
import { Profile } from '../../services/profile/profile';

@Component({
  selector: 'profilelink',
  template: `
    <div *ngIf="profile">
      Bonjour {{ profile.firstname }} !
      <span>
        <img src="{{profile.picture}}"/>
      </span>
    </div>
    <div *ngIf="!profile">
      <a href="">Se connecter</a>
    </div>
    `
})

export class ProfilelinkComponent {
  profile: Profile;

  constructor (private profileService: ProfileService){
    
    
    profileService.getProfile()
        .subscribe(
            (value: Response) => {
              this.profile = <Profile>value.json();
            }
          );
  }
}



