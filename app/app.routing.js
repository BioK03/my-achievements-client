"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var login_component_1 = require('./components/login/login.component');
var logout_component_1 = require('./components/logout/logout.component');
var register_component_1 = require('./components/register/register.component');
var profileDetails_component_1 = require('./components/profileDetails/profileDetails.component');
var editAchievements_component_1 = require('./components/editAchievements/editAchievements.component');
var editTabs_component_1 = require('./components/editTabs/editTabs.component');
var profileForm_component_1 = require('./components/profileForm/profileForm.component');
var tabForm_component_1 = require('./components/tabForm/tabForm.component');
var achievementForm_component_1 = require('./components/achievementForm/achievementForm.component');
var testFile_component_1 = require('./components/testFile/testFile.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'profile',
        component: profileDetails_component_1.ProfileDetailsComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'logout',
        component: logout_component_1.LogoutComponent
    },
    {
        path: 'edittabs',
        component: editTabs_component_1.EditTabsComponent
    },
    {
        path: 'editachievements',
        component: editAchievements_component_1.EditAchievementsComponent
    },
    {
        path: 'editprofile',
        component: profileForm_component_1.ProfileFormComponent
    },
    {
        path: 'formtab',
        component: tabForm_component_1.TabFormComponent
    },
    {
        path: 'formachievement',
        component: achievementForm_component_1.AchievementFormComponent
    },
    {
        path: 'testfile',
        component: testFile_component_1.TestFileComponent
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
