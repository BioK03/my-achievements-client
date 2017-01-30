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
var profileDetailsService_1 = require('../../services/profileDetailsService');
var EditAchievementsComponent = (function () {
    function EditAchievementsComponent(profileDetailsService) {
        this.profileDetailsService = profileDetailsService;
        this.error = "";
    }
    EditAchievementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileDetailsService.getProfile(JSON.parse(localStorage.getItem("user")).id)
            .subscribe(function (profileDetails) {
            _this.parseRes(profileDetails);
        });
    };
    EditAchievementsComponent.prototype.parseRes = function (res) {
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
    EditAchievementsComponent.prototype.saveProfileDetails = function (profileDetails) {
        this.profileDetails = profileDetails;
    };
    EditAchievementsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'editachievements',
            templateUrl: "editAchievements.component.html"
        }), 
        __metadata('design:paramtypes', [profileDetailsService_1.ProfileDetailsService])
    ], EditAchievementsComponent);
    return EditAchievementsComponent;
}());
exports.EditAchievementsComponent = EditAchievementsComponent;
//# sourceMappingURL=editAchievements.component.js.map