import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MAService } from '../maService';

@Injectable()
export class ProfileDetailsService extends MAService {

  constructor(http: Http) { super(http); }

  getProfile(id) {
    return this.get("profileDetails", id);
      
  }

  setEdit(id, firstname, lastname, picture) {
    
    return this.patch("users/"+id, JSON.parse(
      '{"firstname": "'+firstname+'", "lastname" : "'+lastname+'", "profilePicture": "'+picture+'"}'));
  }

}

