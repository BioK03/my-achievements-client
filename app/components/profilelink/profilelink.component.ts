import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ProfileService } from '../../services/ProfileService';
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
    profileService.getProfile()
      .subscribe(
        (value: Response) => {
          this.profile = <Profile>value.json();
        }
      );
  }
}



