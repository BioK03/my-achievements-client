import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from '../../services/loginService/loginService';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl : "login.component.html"
})

export class LoginComponent {
  error: String = "";
  login: String = "";
  password: String = "";

  constructor (private loginService: LoginService, private router: Router, private route: ActivatedRoute){
    this.route.queryParams.subscribe((params)=> {
      if(params['id']){
        let profile = {};
        profile['id'] = params['id'];
        profile['email'] = params['email'];
        profile['profilePicture'] = params['profilePicture'];
        profile['lastname'] = params['lastname'];
        profile['firstname'] = params['firstname'];
        profile['nbAchievements'] = params['nbAchievements'];

        localStorage.setItem("user", JSON.stringify(profile));
        this.router.navigateByUrl("/profile");
      }
    });
  }

  loginAttempt(){
    this.loginService.logUser(this.login, this.password).subscribe(
      res => this.parseRes(res)
    )
  }

  parseRes(res) {
    
    if(res.length == 1){
      // ERROR
      switch(res){
        case "A":
          this.error = "Invalid Credentials";
          break;
        case "B":
          this.error = "Internal error, server unavailable";
          break;
      }
    }
    else {
      this.saveUser(res);
    }
  }

  saveUser(profile) {
    localStorage.setItem("user", JSON.stringify(profile));
    this.router.navigateByUrl("/profile");
  }

  logoutUser() {
    localStorage.removeItem("user");
  }

  googleOAuth(){
    this.loginService.googleOAuth().subscribe(
      res => {
        //console.log(res);
        
        window.location.href = res["message"];
      }
    )
  }
  

 }
