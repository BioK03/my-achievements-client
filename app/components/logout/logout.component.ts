import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, HttpModule } from '@angular/http';

import { LoginService } from '../../services/loginService/loginService';


@Component({
  moduleId: module.id,
  selector: 'logout',
  templateUrl: "logout.component.html"
})

export class LogoutComponent { 

  constructor(private loginService: LoginService,  private router: Router) {
    this.loginService.logout().subscribe(
      res => {
        localStorage.removeItem("user");
        this.router.navigateByUrl("/");
      }
    );
  }
    
}

