import { Injectable }     from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MAService } from '../maService';

@Injectable()
export class TabService extends MAService {

  constructor(http: Http) { super(http); }

  getAllTabs(idUser) {
    return this.get("users/"+idUser+"/tabs");
  }

  getTab(idUser, id) {
    return this.get("users/"+idUser+"/tabs/"+id);
  }

  createTab(order, name, color, icon, idUser) {
    return this.post("users/"+idUser+"/tabs",
      JSON.parse('{"orderNumber": "'+order+'", "name": "'+name+'", "color" : "'+color+'", "icon" : "'+icon+'"}')
    );
  }

  editTab(id, order, name, color, icon, idUser) {
    return this.patch("users/"+idUser+"/tabs/"+id,
      JSON.parse('{"orderNumber": "'+order+'", "name": "'+name+'", "color" : "'+color+'", "icon" : "'+icon+'"}')
    );
  }

  deleteTab(idUser, id) {
    return this.del("users/"+idUser+"/tabs/"+id);
  }

}

