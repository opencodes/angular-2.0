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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth.service");
var CommonService_1 = require("../../common/services/CommonService");
var session_service_1 = require("../services/session.service");
var LoginComponent = (function () {
    function LoginComponent(_authService, _commonService, router) {
        this._authService = _authService;
        this._commonService = _commonService;
        this.router = router;
        this.title = 'Login Component';
        this.isAuthenticated = _commonService.isLoggedIn;
        if (_commonService.isLoggedIn) {
            this.router.navigate(['/profile']);
        }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var self = this;
        this._authService.login().subscribe(function (user) {
            self.user = user;
            self.isAuthenticated = self._authService.isAuthenticated();
            self._commonService.authenticate(user);
        }, function (error) { return _this.errorMessage = error; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: './app/auth/html/login.html',
        styleUrls: ['./app/auth/css/login.css'],
        providers: [auth_service_1.AuthService, session_service_1.Session]
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        CommonService_1.CommonService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map