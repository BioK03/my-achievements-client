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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var profileDetailsService_1 = require('../../services/profileDetailsService');
var ProfileDetailsComponent = (function () {
    function ProfileDetailsComponent(profileDetailsService, sanitizer, route) {
        this.profileDetailsService = profileDetailsService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.error = "";
        this.personalProfile = false;
    }
    ProfileDetailsComponent.prototype.parseRes = function (res) {
        if (res.length == 1) {
            // ERROR
            switch (res) {
                case "A":
                    this.error = "User not connected";
                    break;
                case "B":
                    this.error = "Internal error, server unavailable";
                    break;
                case "C":
                    this.error = "This user doesn't exist or you don't have the right to access it";
                    break;
            }
            console.error(this.error);
        }
        else {
            this.saveProfileDetails(res);
        }
    };
    ProfileDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            console.log(id);
            _this.profileDetailsService.getProfile(id)
                .subscribe(function (profileDetails) {
                _this.parseRes(profileDetails);
            });
        });
    };
    ProfileDetailsComponent.prototype.saveProfileDetails = function (profileDetails) {
        this.profileDetails = profileDetails;
        if (localStorage.getItem("user") && this.profileDetails.id == JSON.parse(localStorage.getItem("user")).id) {
            this.personalProfile = true;
        }
    };
    ProfileDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profileDetails',
            templateUrl: "profileDetails.component.html",
        }), 
        __metadata('design:paramtypes', [profileDetailsService_1.ProfileDetailsService, platform_browser_1.DomSanitizer, router_1.ActivatedRoute])
    ], ProfileDetailsComponent);
    return ProfileDetailsComponent;
}());
exports.ProfileDetailsComponent = ProfileDetailsComponent;
//# sourceMappingURL=profileDetails.component.js.map