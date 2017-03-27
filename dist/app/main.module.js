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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
//Common Components
var main_component_1 = require('./main.component');
var main_routing_config_1 = require('./main.routing.config');
//Modules
var blog_module_1 = require('./blog/blog.module');
var auth_module_1 = require('./auth/auth.module');
//Components
var dashboard_component_1 = require('./dashboard/components/dashboard.component');
var page_not_found_component_1 = require('./common/components/page.not.found.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(main_routing_config_1.RoutingConfig), auth_module_1.AuthModule, blog_module_1.BlogModule],
            declarations: [main_component_1.AppComponent, dashboard_component_1.DashboardComponent, page_not_found_component_1.PageNotFoundComponent],
            bootstrap: [main_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=main.module.js.map