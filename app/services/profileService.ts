import { Injectable }     from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MAService } from './maService';

@Injectable()
export class ProfileService extends MAService {

  constructor(http: Http) { super(http); }

  getProfile() {
    
      return this.get("profile", "");
  }

}
