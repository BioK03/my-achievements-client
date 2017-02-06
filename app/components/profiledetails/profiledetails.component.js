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
var profileDetailsService_1 = require('../../services/profileDetailsService/profileDetailsService');
var ProfileDetailsComponent = (function () {
    function ProfileDetailsComponent(profileDetailsService, sanitizer, route) {
        this.profileDetailsService = profileDetailsService;
        this.sanitizer = sanitizer;
        this.route = route;
        this.error = "";
        this.personalProfile = false;
        this.connected = false;
        this.showList = 0;
        this.paddingLeft = 0;
        this.showAchievement = 0;
        this.nbAchievementShown = 0;
        this.longDescWithLinks = "";
        this.connected = (localStorage.getItem("user")) != null;
    }
    ProfileDetailsComponent.prototype.changeShowList = function (number) {
        this.showList = number;
    };
    ProfileDetailsComponent.prototype.changeShowAchievement = function (number) {
        this.showAchievement = number;
    };
    ProfileDetailsComponent.prototype.changeNbAchievementShown = function (number) {
        var nbTabs = this.profileDetails.tabs.length;
        if ((localStorage.getItem("user")) == null) {
            nbTabs = 0;
        }
        this.nbAchievementShown = number;
        var widthAchievement = 100 / (nbTabs + 1);
        this.paddingLeft = (number * widthAchievement) + (widthAchievement / 2) - 0.5;
    };
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
            console.log(res);
        }
    };
    ProfileDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['id']) {
                _this.profileDetailsService.getProfile(params['id'])
                    .subscribe(function (profileDetails) {
                    _this.parseRes(profileDetails);
                });
            }
            else {
                var id = JSON.parse(localStorage.getItem("user")).id;
                _this.profileDetailsService.getProfile(id)
                    .subscribe(function (profileDetails) {
                    _this.parseRes(profileDetails);
                });
            }
        });
    };
    ProfileDetailsComponent.prototype.saveProfileDetails = function (profileDetails) {
        this.profileDetails = profileDetails;
        var nbTabs = this.profileDetails.tabs.length;
        if ((localStorage.getItem("user")) == null) {
            nbTabs = 0;
        }
        this.paddingLeft = ((100 / (nbTabs + 1)) / 2) - 0.5;
        if (localStorage.getItem("user") && this.profileDetails.id == JSON.parse(localStorage.getItem("user")).id) {
            this.personalProfile = true;
        }
        this.parseLinks();
    };
    ProfileDetailsComponent.prototype.parseLinks = function () {
        if (!this.profileDetails) {
            return;
        }
        var pattern = /^http[s]?:/; //g;
        var tabs = this.profileDetails.tabs;
        var achievements = [];
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].achievements) {
                achievements = achievements.concat(tabs[i].achievements);
            }
        }
        for (var i = 0; i < achievements.length; i++) {
            var res = "";
            var parts = achievements[i].longdesc.split(" ");
            for (var j = 0; j < parts.length; j++) {
                var partEqualsLink = pattern.exec(parts[j]);
                if (partEqualsLink) {
                    res += "<a href='" + parts[j] + "' target='_blank'>" + parts[j] + "</a> ";
                }
                else {
                    res += parts[j] + " ";
                }
            }
            achievements[i].longDescWithLinks = res;
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
