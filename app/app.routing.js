"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home/home.component');
var login_component_1 = require('./components/login/login.component');
var profileDetails_component_1 = require('./components/profileDetails/profileDetails.component');
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
        path: 'profile/:userId',
        component: profileDetails_component_1.ProfileDetailsComponent
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map