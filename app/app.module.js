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
var forms_1 = require('@angular/forms');
var app_component_1 = require('./components/app.component');
var home_component_1 = require('./components/home/home.component');
var login_component_1 = require('./components/login/login.component');
var logout_component_1 = require('./components/logout/logout.component');
var navbar_component_1 = require('./components/navbar/navbar.component');
var searchbar_component_1 = require('./components/searchbar/searchbar.component');
var profileLink_component_1 = require('./components/profileLink/profileLink.component');
var profileDetails_component_1 = require('./components/profileDetails/profileDetails.component');
var achievementPreview_component_1 = require('./components/achievementPreview/achievementPreview.component');
var achievementDetails_component_1 = require('./components/achievementDetails/achievementDetails.component');
var register_component_1 = require('./components/register/register.component');
var editTabs_component_1 = require('./components/editTabs/editTabs.component');
var editAchievements_component_1 = require('./components/editAchievements/editAchievements.component');
var tabForm_component_1 = require('./components/tabForm/tabForm.component');
var achievementForm_component_1 = require('./components/achievementForm/achievementForm.component');
var profileForm_component_1 = require('./components/profileForm/profileForm.component');
var app_routing_1 = require('./app.routing');
var loginService_1 = require('./services/loginService/loginService');
var profileService_1 = require('./services/profileService/profileService');
var searchService_1 = require('./services/searchService/searchService');
var profileDetailsService_1 = require('./services/profileDetailsService/profileDetailsService');
var tabService_1 = require('./services/tabService/tabService');
var achievementService_1 = require('./services/achievementService/achievementService');
var testFile_component_1 = require('./components/testFile/testFile.component');
var fileService_1 = require('./services/fileService/fileService');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.Routing,
                forms_1.FormsModule],
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                navbar_component_1.NavbarComponent,
                searchbar_component_1.SearchbarComponent,
                profileLink_component_1.ProfileLinkComponent,
                profileDetails_component_1.ProfileDetailsComponent,
                achievementPreview_component_1.AchievementPreviewComponent,
                achievementPreview_component_1.AchievementPreviewComponent,
                achievementDetails_component_1.AchievementDetailsComponent,
                register_component_1.RegisterComponent,
                logout_component_1.LogoutComponent,
                editTabs_component_1.EditTabsComponent,
                editAchievements_component_1.EditAchievementsComponent,
                profileForm_component_1.ProfileFormComponent,
                tabForm_component_1.TabFormComponent,
                achievementForm_component_1.AchievementFormComponent,
                testFile_component_1.TestFileComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [profileService_1.ProfileService,
                profileDetailsService_1.ProfileDetailsService,
                searchService_1.SearchService,
                loginService_1.LoginService,
                tabService_1.TabService,
                achievementService_1.AchievementService,
                fileService_1.FileService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
