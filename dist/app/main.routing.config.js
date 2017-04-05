"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_component_1 = require("./dashboard/components/dashboard.component");
var login_component_1 = require("./auth/components/login.component");
var page_not_found_component_1 = require("./common/components/page.not.found.component");
var RoutingConfig = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
exports.RoutingConfig = RoutingConfig;
//# sourceMappingURL=main.routing.config.js.map