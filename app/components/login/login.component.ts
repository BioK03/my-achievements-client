import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/loginService';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl : "login.component.html"
})

export class LoginComponent {
  error: String = "";
  login: String = "";
  password: String = "";

  constructor (private loginService: LoginService, private router: Router){
    
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
    console.log("User saved !");
    console.log(profile);
    this.router.navigateByUrl("/profile?id="+profile.id);
  }

  logoutUser() {
    localStorage.removeItem("user");
  }
  

 }
