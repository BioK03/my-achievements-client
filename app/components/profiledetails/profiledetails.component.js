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
var profiledetails_service_1 = require('../../services/profiledetails/profiledetails-service');
var ProfiledetailsComponent = (function () {
    function ProfiledetailsComponent(profileService) {
        var _this = this;
        this.profileService = profileService;
        profileService.getProfile()
            .subscribe(function (value) {
            _this.profiledetails = value.json();
            console.log(_this.profiledetails);
        });
    }
    ProfiledetailsComponent = __decorate([
        core_1.Component({
            selector: 'profiledetails',
            template: "\n    <div *ngIf=\"profiledetails\">\n      <div *ngFor=\"let profiledetailsitem of profiledetails.list\">\n        <span>{{profiledetailsitem.name}}</span>\n      </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [profiledetails_service_1.ProfileDetailsService])
    ], ProfiledetailsComponent);
    return ProfiledetailsComponent;
}());
exports.ProfiledetailsComponent = ProfiledetailsComponent;
//# sourceMappingURL=profiledetails.component.js.map