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
                return "http://localhost/json/profiledetails.php";
            case "profile":
                return "http://localhost/json/profile.php";
        }
    }

    extractData(res: Response) {
        if (res){
            if(res.status === 200){
                return res.json()
            }else{
                console.log("HTTP Error "+res.status);
                return null;
            }
        }
    }

    handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    get(path, data) {
        return this.localHttp.get(this.getPath(path)+data)
                      .map(res => this.extractData(res))
                      .catch(this.handleError);
    }

    post(path, data) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.localHttp.post(this.getPath(path), { name }, options)
                    .map(res => this.extractData(res))
                    .catch(this.handleError);
    }


}
