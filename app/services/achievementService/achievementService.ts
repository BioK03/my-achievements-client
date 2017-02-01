import { Injectable }     from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MAService } from '../maService';

@Injectable()
export class AchievementService extends MAService {

  constructor(http: Http) { super(http); }

  getAchievement(idUser, idTab, id){
    return this.get("users/"+idUser+"/tabs/"+idTab+"/achievements/"+id);
  }

  createAchievement(idUser, idTab, name, shortDesc, longDesc, icon, favorite){
    return this.post("users/"+idUser+"/tabs/"+idTab+"/achievements",
      JSON.parse('{"name" :"'+name+'", "icon": "'+icon+'", "favorite": '+favorite+', "shortdesc" : "'+shortDesc+'", "longdesc": "'+longDesc+'"}')
    );
  }

  editAchievement(idUser, idTab, idAchievement, name, shortDesc, longDesc, icon, favorite){
    return this.patch(
      "users/"+idUser+"/tabs/"+idTab+"/achievements/"+idAchievement,
      JSON.parse('{"name" :"'+name+'", "icon": "'+icon+'", "favorite": '+favorite+', "shortdesc" : "'+shortDesc+'", "longdesc": "'+longDesc+'"}')
    )
  }

  deleteAchievement(idUser, idTab, idAchievement){
    return this.del("users/"+idUser+"/tabs/"+idTab+"/achievements/"+idAchievement);
  }

}
