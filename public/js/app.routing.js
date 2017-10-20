"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var appRoutes = [{
        path: 'login',
        component: login_component_1.LoginComponent
    }, {
        path: 'home',
        component: home_component_1.HomeComponent
    }, {
        path: 'about',
        component: about_component_1.AboutComponent
    }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map