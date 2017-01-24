"use strict";
var login_component_1 = require('./auth/components/login.component');
var page_not_found_component_1 = require('./common/components/page.not.found.component');
var RoutingConfig = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
exports.RoutingConfig = RoutingConfig;
//# sourceMappingURL=main.routing.config.js.map