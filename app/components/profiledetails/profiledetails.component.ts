import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ProfileDetailsService } from '../../services/profiledetails/profiledetails-service';
import { ProfileDetails } from '../../services/profiledetails/profiledetails';

@Component({
  selector: 'profiledetails',
  template: `
    <div *ngIf="profiledetails">
      <div *ngFor="let profiledetailsitem of profiledetails.list">
        <span>{{profiledetailsitem.name}}</span>
      </div>
    </div>
    `
})

export class ProfiledetailsComponent {

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
