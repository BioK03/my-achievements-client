"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var loginService_1 = require('../../services/loginService/loginService');
var LoginComponent = (function () {
    function LoginComponent(loginService, router, route) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.error = "";
        this.login = "";
        this.password = "";
        this.route.queryParams.subscribe(function (params) {
            if (params['id']) {
                var profile = {};
                profile['id'] = params['id'];
                profile['email'] = params['email'];
                profile['profilePicture'] = params['profilePicture'];
                profile['lastname'] = params['lastname'];
                profile['firstname'] = params['firstname'];
                profile['nbAchievements'] = params['nbAchievements'];
                localStorage.setItem("user", JSON.stringify(profile));
                _this.router.navigateByUrl("/profile");
            }
        });
    }
    LoginComponent.prototype.loginAttempt = function () {
        var _this = this;
        this.loginService.logUser(this.login, this.password).subscribe(function (res) { return _this.parseRes(res); });
    };
    LoginComponent.prototype.parseRes = function (res) {
        if (res.length == 1) {
            // ERROR
            switch (res) {
                case "A":
                    this.error = "Invalid Credentials";
                    break;
                case "B":
                    this.error = "Internal error, server unavailable";
                    break;
            }
        }
        else {
            this.saveUser(res);
        }
    };
    LoginComponent.prototype.saveUser = function (profile) {
        localStorage.setItem("user", JSON.stringify(profile));
        this.router.navigateByUrl("/profile");
    };
    LoginComponent.prototype.logoutUser = function () {
        localStorage.removeItem("user");
    };
    LoginComponent.prototype.googleOAuth = function () {
        this.loginService.googleOAuth().subscribe(function (res) {
            //console.log(res);
            window.location.href = res["message"];
        });
    };
    LoginComponent.prototype.linkedinOAuth = function () {
        this.loginService.linkedinOAuth().subscribe(function (res) {
            //console.log(res);
            window.location.href = res["message"];
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: "login.component.html"
        }), 
        __metadata('design:paramtypes', [loginService_1.LoginService, router_1.Router, router_2.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map
