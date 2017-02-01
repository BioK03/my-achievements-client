import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { FileService } from '../../services/fileService/fileService';
import { ProfileDetailsService } from '../../services/profileDetailsService/profileDetailsService';
import { ProfileDetails } from '../../classes/ProfileDetailsClass';

@Component({
  moduleId: module.id,
  selector: 'profileform',
  templateUrl: "profileForm.component.html"
})

export class ProfileFormComponent { 
  error: String = "";
  id: Number = 0;
  firstname: String = "";
  lastname: String = "";
  picture: String = "";

  constructor (private profileDetailsService: ProfileDetailsService, private router: Router, private fileService: FileService){
    
    
    
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
      this.id = res["id"];
      this.firstname = res["firstname"];
      this.lastname = res["lastname"];
      this.picture = res["picture"];
    }
  }

  updateFiles(event) {
    let files = event.srcElement.files;
    this.fileService.makeFileRequest('http://localhost:8100/upload', [], files).subscribe(
      res => {
        console.log('sent');
        console.log(res);
      }
    );
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

  editAttempt(){
    this.profileDetailsService.setEdit(
      this.id,
      this.firstname,
      this.lastname
    ).subscribe(
      res => {
        this.router.navigateByUrl("/profile");
      }
    );
  }
}
