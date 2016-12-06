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
var profile_service_1 = require('../../services/profile/profile-service');
var ProfilelinkComponent = (function () {
    function ProfilelinkComponent(profileService) {
        var _this = this;
        this.profileService = profileService;
        profileService.getProfile()
            .subscribe(function (value) {
            _this.profile = value.json();
        });
    }
    ProfilelinkComponent = __decorate([
        core_1.Component({
            selector: 'profilelink',
            template: "\n    <div *ngIf=\"profile\">\n      Bonjour {{ profile.firstname }} !\n      <span>\n        <img src=\"{{profile.picture}}\"/>\n      </span>\n    </div>\n    <div *ngIf=\"!profile\">\n      <a href=\"\">Se connecter</a>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService])
    ], ProfilelinkComponent);
    return ProfilelinkComponent;
}());
exports.ProfilelinkComponent = ProfilelinkComponent;
//# sourceMappingURL=profilelink.component.js.map