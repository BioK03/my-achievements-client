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
var TabFormComponent = (function () {
    function TabFormComponent(route, tabService, router) {
        var _this = this;
        this.route = route;
        this.tabService = tabService;
        this.router = router;
        this.addOrEdit = true;
        this.id = 0;
        this.name = "";
        this.color = "#33B5E5";
        this.icon = "fa fa-pencil";
        this.order = 1;
        this.orderOrigin = 1;
        this.route.queryParams.subscribe(function (params) {
            if (params['id']) {
                _this.addOrEdit = false;
                _this.tabService.getTab(JSON.parse(localStorage.getItem("user")).id, params['id']).subscribe(function (res) {
                    _this.id = res["id"];
                    _this.name = res["name"];
                    _this.color = res["color"];
                    _this.icon = res["icon"];
                    _this.order = res["orderNumber"];
                    _this.orderOrigin = res["orderNumber"];
                });
            }
        });
        this.faIcons = this.tabService.getFAIcons();
        this.tabService.getAllTabs(JSON.parse(localStorage.getItem("user")).id).subscribe(function (res) {
            _this.tabList = res;
        });
    }
    TabFormComponent.prototype.changeIcon = function (icon) {
        this.icon = icon;
    };
    TabFormComponent.prototype.tabAttempt = function () {
        var _this = this;
        if (this.id == 0) {
            this.tabService.createTab(this.order, this.name, this.color, this.icon, JSON.parse(localStorage.getItem("user")).id).subscribe(function (res) {
                _this.router.navigateByUrl("/edittabs");
            });
        }
        else {
            this.tabService.editTab(this.id, this.order, this.name, this.color, this.icon, JSON.parse(localStorage.getItem("user")).id).subscribe(function (res) {
                _this.router.navigateByUrl("/edittabs");
            });
        }
    };
    TabFormComponent.prototype.deleteAttempt = function () {
        var _this = this;
        if (this.id == 0)
            return;
        this.tabService.deleteTab(JSON.parse(localStorage.getItem("user")).id, this.id).subscribe(function (res) {
            _this.router.navigateByUrl("/edittabs");
        });
    };
    TabFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabform',
            templateUrl: "tabForm.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, tabService_1.TabService, router_2.Router])
    ], TabFormComponent);
    return TabFormComponent;
}());
exports.TabFormComponent = TabFormComponent;
//# sourceMappingURL=tabForm.component.js.map
