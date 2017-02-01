import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { LoginService } from '../../services/loginService/loginService';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: "register.component.html"
})

export class RegisterComponent { 
  error: String = "";
  login: String = "";
  password: String = "";
  firstname: String = "";
  lastname: String = "";

  constructor (private loginService: LoginService, private router: Router){
    
  }

  registerAttempt(){
    this.loginService.register(this.login, this.password, this.firstname, this.lastname).subscribe(
      res => {
        this.parseRes(res);
        this.router.navigateByUrl("/login");
      }
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
  }
}