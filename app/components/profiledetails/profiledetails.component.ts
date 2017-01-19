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

  profileDetails: ProfileDetails;

  constructor (private profileService: ProfileDetailsService, private sanitizer: DomSanitizer, private route: ActivatedRoute){
    
    
    
  }

  ngOnInit() {
    this.route.params
      .map(params => params['userId'])
      .subscribe((id)=>{
        console.log(id);
        this.profileService.getProfile()
          .subscribe(
            profileDetails => {
              this.profileDetails = profileDetails;
              
              console.log(profileDetails);
            }
          );
      });
  }

  
}
