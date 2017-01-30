"use strict";
var http_1 = require('@angular/http');
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
                //return "http://localhost/json/profiledetails.php";
                return basePath + "userprofiles/";
            case "profile":
                return "http://localhost/json/profile.php";
            case "register":
                return basePath + "users";
            case "search":
                return basePath + "search/";
            case "logout":
                return basePath + "logout";
            case "connection":
                return basePath + "connected";
            default:
                return basePath + route;
        }
    };
    MAService.prototype.extractData = function (res) {
        if (res) {
            if (res.status === 200) {
                return res.json();
            }
            else {
                console.log("HTTP Error " + res.status + " ");
                switch (res.status) {
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
    };
    MAService.prototype.get = function (path, data) {
        if (data === void 0) { data = ""; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.get(this.getPath(path) + data, options)
            .map(this.extractData)
            .catch(this.extractData);
    };
    MAService.prototype.post = function (path, data) {
        if (data === void 0) { data = ""; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.post(this.getPath(path), data, options)
            .map(this.extractData)
            .catch(this.extractData);
    };
    MAService.prototype.del = function (path, data) {
        if (data === void 0) { data = ""; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.delete(this.getPath(path) + data, options)
            .map(this.extractData)
            .catch(this.extractData);
    };
    MAService.prototype.put = function (path, data) {
        if (data === void 0) { data = ""; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.put(this.getPath(path), data, options)
            .map(this.extractData)
            .catch(this.extractData);
    };
    MAService.prototype.patch = function (path, data) {
        if (data === void 0) { data = ""; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.patch(this.getPath(path), data, options)
            .map(this.extractData)
            .catch(this.extractData);
    };
    return MAService;
}());
exports.MAService = MAService;
//# sourceMappingURL=maService.js.map