import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

export class MAService {
    localHttp: Http;

    constructor(localhttp: Http) { this.localHttp = localhttp; }

    getPath(route) {
        var basePath = "http://localhost:8100/"
        switch(route){
            case "login":
                return basePath+"login";
            case "profileDetails":
                //return "http://localhost/json/profiledetails.php";
                return basePath+"userprofiles/"
            case "profile":
                return "http://localhost/json/profile.php";
            case "register":
                return basePath+"users";
            case "search":
                return basePath+"search/";
            case "logout":
                return basePath+"logout";
            case "connection":
                return basePath+"connected";
            default:
                return basePath+route;
        }
    }

    extractData(res: Response | any) {
        if (res){
            if(res.status === 200){
                return res.json()
            }else{
                console.log("HTTP Error "+res.status+" ");
                switch(res.status){

                    case 401:
                        return "A";
                    case 500:
                        return "B";
                    case 0:
                        return "B";
                    case 400:
                        return "C";
                }
            }
        }
    }

    get(path, data = "") {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.get(this.getPath(path)+data, options)
                      .map(this.extractData)
                      .catch(this.extractData);
    }

    post(path, data = "") {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.post(this.getPath(path), data, options)
                    .map(this.extractData)
                    .catch(this.extractData);
    }

    del(path, data = "") {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.delete(this.getPath(path)+data, options)
            .map(this.extractData)
            .catch(this.extractData);
    }

    put(path, data = "") {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.put(this.getPath(path), data, options)
            .map(this.extractData)
            .catch(this.extractData);
    }

    patch(path, data = "") {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.patch(this.getPath(path), data, options)
            .map(this.extractData)
            .catch(this.extractData);
    }


}
