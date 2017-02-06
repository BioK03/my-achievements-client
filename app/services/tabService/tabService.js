"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var maService_1 = require('../maService');
var TabService = (function (_super) {
    __extends(TabService, _super);
    function TabService(http) {
        _super.call(this, http);
    }
    TabService.prototype.getAllTabs = function (idUser) {
        return this.get("users/" + idUser + "/tabs");
    };
    TabService.prototype.getTab = function (idUser, id) {
        return this.get("users/" + idUser + "/tabs/" + id);
    };
    TabService.prototype.createTab = function (order, name, color, icon, idUser) {
        return this.post("users/" + idUser + "/tabs", JSON.parse('{"orderNumber": "' + order + '", "name": "' + name + '", "color" : "' + color + '", "icon" : "' + icon + '"}'));
    };
    TabService.prototype.editTab = function (id, order, name, color, icon, idUser) {
        return this.patch("users/" + idUser + "/tabs/" + id, JSON.parse('{"orderNumber": "' + order + '", "name": "' + name + '", "color" : "' + color + '", "icon" : "' + icon + '"}'));
    };
    TabService.prototype.deleteTab = function (idUser, id) {
        return this.del("users/" + idUser + "/tabs/" + id);
    };
    TabService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TabService);
    return TabService;
}(maService_1.MAService));
exports.TabService = TabService;
//# sourceMappingURL=tabService.js.map
