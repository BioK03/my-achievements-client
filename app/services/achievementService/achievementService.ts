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

  getAchievementsOfTab(idUser, idTab){
    return this.get("users/"+idUser+"/tabs/"+idTab+"/achievements");
  }

  createAchievement(idUser, idTab, name, order, shortDesc, longDesc, icon, favorite){
    return this.post("users/"+idUser+"/tabs/"+idTab+"/achievements",
      JSON.parse('{"orderNumber": "'+order+'", "name" :"'+name+'", "icon": "'+icon+'", "favorite": '+favorite+', "shortdesc" : "'+shortDesc+'", "longdesc": "'+longDesc+'"}')
    );
  }

  editAchievement(idUser, idTab, idAchievement, name, order, shortDesc, longDesc, icon, favorite, pictures){
    let picturesArray = '[ ';
    for(let picture of pictures){
      picturesArray += '"'+picture+'",';
    }
    picturesArray = picturesArray.substring(0, picturesArray.length - 1);
    picturesArray += "]";
    return this.patch(
      "users/"+idUser+"/tabs/"+idTab+"/achievements/"+idAchievement,
      JSON.parse('{"orderNumber": "'+order+'", "name" :"'+name+'", "icon": "'+icon+'", "favorite": '+favorite+', "shortdesc" : "'+shortDesc+'", "longdesc": "'+longDesc+'", "images": '+picturesArray+'}')
    )
  }

  deleteAchievement(idUser, idTab, idAchievement){
    return this.del("users/"+idUser+"/tabs/"+idTab+"/achievements/"+idAchievement);
  }

}

