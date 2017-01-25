"use strict";
var main_component_1 = require('./main.component');
var login_component_1 = require('./auth/components/login.component');
var page_not_found_component_1 = require('./common/components/page.not.found.component');
var RoutingConfig = [
    { path: 'home', pathMatch: 'full', component: main_component_1.AppComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
exports.RoutingConfig = RoutingConfig;
//# sourceMappingURL=main.routing.config.js.map