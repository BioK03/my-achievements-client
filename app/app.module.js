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
var http_1 = require('@angular/http');
var app_component_1 = require('./components/app.component');
var login_component_1 = require('./components/login/login.component');
var toolbar_component_1 = require('./components/toolbar/toolbar.component');
var searchbar_component_1 = require('./components/searchbar/searchbar.component');
var profilelink_component_1 = require('./components/profilelink/profilelink.component');
var profiledetails_component_1 = require('./components/profiledetails/profiledetails.component');
var profiletabs_component_1 = require('./components/profiletabs/profiletabs.component');
var tabdetails_component_1 = require('./components/tabdetails/tabdetails.component');
var achievementpreview_component_1 = require('./components/achievementpreview/achievementpreview.component');
var profile_service_1 = require('./services/profile/profile-service');
var profiledetails_service_1 = require('./services/profiledetails/profiledetails-service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule],
            declarations: [
                app_component_1.AppComponent, login_component_1.LoginComponent, toolbar_component_1.ToolbarComponent, searchbar_component_1.SearchbarComponent, profilelink_component_1.ProfilelinkComponent, profiledetails_component_1.ProfiledetailsComponent,
                profiletabs_component_1.ProfiletabsComponent, tabdetails_component_1.TabdetailsComponent, achievementpreview_component_1.AchievementpreviewComponent, achievementpreview_component_1.AchievementpreviewComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [profile_service_1.ProfileService, profiledetails_service_1.ProfileDetailsService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map