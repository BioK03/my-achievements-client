import { Component } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';

import { LoginService } from '../../services/loginService';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl : "login.component.html"
})

export class LoginComponent {

  constructor (private loginService: LoginService){
    
  }

  loginAttempt(email: String, password: String){
    this.loginService.logUser(email, password);
  }

 }
