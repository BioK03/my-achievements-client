"use strict";
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var MAService = (function () {
    function MAService(localhttp) {
        this.localHttp = localhttp;
    }
    MAService.prototype.getPath = function (route) {
        var basePath = "http://localhost:8100/";
        switch (route) {
            case "login":
                return basePath + "login";
            case "profileDetails":
                return "http://localhost/json/profiledetails.php";
            case "profile":
                return "http://localhost/json/profile.php";
        }
    };
    MAService.prototype.extractData = function (res) {
        if (res) {
            if (res.status === 200) {
                return res.json();
            }
            else {
                console.log("HTTP Error " + res.status);
                return null;
            }
        }
    };
    MAService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    MAService.prototype.get = function (path, data) {
        var _this = this;
        return this.localHttp.get(this.getPath(path) + data)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    MAService.prototype.post = function (path, data) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.localHttp.post(this.getPath(path), { name: name }, options)
            .map(function (res) { return _this.extractData(res); })
            .catch(this.handleError);
    };
    return MAService;
}());
exports.MAService = MAService;
//# sourceMappingURL=maService.js.map