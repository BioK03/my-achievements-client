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
var tabService_1 = require('../../services/tabService/tabService');
var fileService_1 = require('../../services/fileService/fileService');
var achievementService_1 = require('../../services/achievementService/achievementService');
var AchievementFormComponent = (function () {
    function AchievementFormComponent(route, tabService, achievementService, router, fileService) {
        var _this = this;
        this.route = route;
        this.tabService = tabService;
        this.achievementService = achievementService;
        this.router = router;
        this.fileService = fileService;
        this.addOrEdit = true;
        this.tabid = 0;
        this.id = 0;
        this.name = "";
        this.icon = "fa fa-pencil";
        this.favorite = false;
        this.shortDesc = "";
        this.longDesc = "";
        this.order = 1;
        this.orderOrigin = 1;
        this.pictures = [];
        this.files = null;
        this.tabService.getAllTabs(JSON.parse(localStorage.getItem("user")).id).subscribe(function (res) {
            _this.tabList = res;
        });
        this.route.queryParams.subscribe(function (params) {
            if (params['id'] && params['tabid']) {
                _this.addOrEdit = false;
                _this.tabid = params['tabid'];
                _this.achievementService.getAchievement(JSON.parse(localStorage.getItem("user")).id, params['tabid'], params['id']).subscribe(function (res) {
                    _this.id = res["id"];
                    _this.name = res["name"];
                    _this.icon = res["icon"];
                    _this.favorite = res["favorite"];
                    _this.shortDesc = res["shortdesc"];
                    _this.longDesc = res["longdesc"];
                    _this.order = res["orderNumber"];
                    _this.orderOrigin = res["orderNumber"];
                    _this.pictures = res["images"];
                    for (var _i = 0, _a = _this.tabList; _i < _a.length; _i++) {
                        var tab = _a[_i];
                        if (tab.id == _this.tabid) {
                            _this.tabColor = tab.color;
                        }
                    }
                });
                _this.achievementService.getAchievementsOfTab(JSON.parse(localStorage.getItem("user")).id, params['tabid']).subscribe(function (res) {
                    _this.achievementList = res;
                });
            }
        });
        this.faIcons = this.tabService.getFAIcons();
    }
    AchievementFormComponent.prototype.changeTab = function () {
        var _this = this;
        for (var _i = 0, _a = this.tabList; _i < _a.length; _i++) {
            var tab = _a[_i];
            if (tab.id == this.tabid) {
                this.tabColor = tab.color;
            }
        }
        this.order = 1;
        this.achievementService.getAchievementsOfTab(JSON.parse(localStorage.getItem("user")).id, this.tabid).subscribe(function (res) {
            _this.achievementList = res;
        });
    };
    AchievementFormComponent.prototype.updateFiles = function (event) {
        this.files = event.srcElement.files;
    };
    AchievementFormComponent.prototype.changeIcon = function (icon) {
        this.icon = icon;
    };
    AchievementFormComponent.prototype.changeFavorite = function (favorite) {
        this.favorite = favorite;
    };
    AchievementFormComponent.prototype.achievementAttempt = function () {
        var _this = this;
        if (this.id == 0) {
            this.achievementService.createAchievement(JSON.parse(localStorage.getItem("user")).id, this.tabid, this.name, this.order, this.shortDesc, this.longDesc, this.icon, this.favorite).subscribe(function (res) {
                _this.router.navigateByUrl("/editachievements");
            });
        }
        else {
            if (this.files) {
                this.fileService.makeFileRequest('http://localhost:8100/upload', [], this.files).subscribe(function (res) {
                    console.log(res);
                    _this.pictures = [];
                    for (var _i = 0, _a = res.paths; _i < _a.length; _i++) {
                        var path = _a[_i];
                        _this.pictures.push(_this.fileService.getFilePath(path));
                    }
                    console.log(_this.pictures);
                    _this.achievementService.editAchievement(JSON.parse(localStorage.getItem("user")).id, _this.tabid, _this.id, _this.name, _this.order, _this.shortDesc, _this.longDesc, _this.icon, _this.favorite, _this.pictures).subscribe(function (res) {
                        _this.router.navigateByUrl("/editachievements");
                    });
                });
            }
            else {
                this.achievementService.editAchievement(JSON.parse(localStorage.getItem("user")).id, this.tabid, this.id, this.name, this.order, this.shortDesc, this.longDesc, this.icon, this.favorite, this.pictures).subscribe(function (res) {
                    _this.router.navigateByUrl("/editachievements");
                });
            }
        }
    };
    AchievementFormComponent.prototype.deleteAttempt = function () {
        var _this = this;
        this.achievementService.deleteAchievement(JSON.parse(localStorage.getItem("user")).id, this.tabid, this.id).subscribe(function (res) {
            _this.router.navigateByUrl("/editachievements");
        });
    };
    AchievementFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'achievementform',
            templateUrl: "achievementForm.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, tabService_1.TabService, achievementService_1.AchievementService, router_2.Router, fileService_1.FileService])
    ], AchievementFormComponent);
    return AchievementFormComponent;
}());
exports.AchievementFormComponent = AchievementFormComponent;
//# sourceMappingURL=achievementForm.component.js.map
