import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MAService } from '../maService';

@Injectable()
export class LoginService extends MAService {
  

  constructor(http: Http) { super(http); }

  logUser(email: String, password: String) {
    return this.post("login", JSON.parse('{"login" :"'+email+'", "password": "'+password+'"}'));
  }

  register(email: String, password: String, firstname: String, lastname: String) {
    return this.post("register", JSON.parse(
      '{"email" :"'+email+'", "plainPassword": "'+password+'", "firstname": "'+firstname+'", "lastname" : "'+lastname+'"}'));
  }

  logout() {
    return this.del("logout");
  }

  

}
