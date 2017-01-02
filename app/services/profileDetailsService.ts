import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProfileDetailsService {

  constructor(private http: Http) { this.http = http; }

  getProfile() {
      return this.http.get("http://localhost/json/profiledetails.php")
                      .map((res:Response) => res)
                      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

}
