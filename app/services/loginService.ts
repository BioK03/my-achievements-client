import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MAService } from './maService';

@Injectable()
export class LoginService extends MAService {

  constructor(http: Http) { super(http); }

  logUser(email: String, password: String) {
    this.post("login", JSON.parse('{"login" :"'+email+'", "password": "'+password+'"}')).subscribe();
  }
  

}
