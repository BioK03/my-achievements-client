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
var loginService_1 = require('../../services/loginService');
var RegisterComponent = (function () {
    function RegisterComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.error = "";
        this.login = "";
        this.password = "";
        this.firstname = "";
        this.lastname = "";
    }
    RegisterComponent.prototype.registerAttempt = function () {
        var _this = this;
        this.loginService.register(this.login, this.password, this.firstname, this.lastname).subscribe(function (res) {
            _this.parseRes(res);
            _this.router.navigateByUrl("/login");
        });
    };
    RegisterComponent.prototype.parseRes = function (res) {
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
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: "register.component.html"
        }), 
        __metadata('design:paramtypes', [loginService_1.LoginService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map