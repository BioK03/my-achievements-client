import { Component } from '@angular/core';
import { Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { ProfileService } from '../../services/ProfileService/ProfileService';
import { Profile } from '../../classes/ProfileClass';

@Component({
  moduleId: module.id,
  selector: 'profileLink',
  templateUrl: "profileLink.component.html",
  providers: [ ProfileService ]
})

export class ProfileLinkComponent {
  profile;
  visibleList: Boolean = false;

  constructor (private profileService: ProfileService){
    this.profile = JSON.parse(localStorage.getItem("user"));

    Observable.interval(5000).subscribe(x => {
      this.checkConnection();
    });
     
  }

  changeVisibleList(){
    this.visibleList = !this.visibleList;
    if(this.visibleList) {
      setTimeout(() => {
        this.visibleList = false;
      }, 3000);
    }
  }

  checkConnection(){
    this.profileService.isConnected().subscribe(
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

