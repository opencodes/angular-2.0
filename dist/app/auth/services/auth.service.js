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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var auth_constant_1 = require("./auth.constant");
var session_service_1 = require("./session.service");
var AuthService = (function () {
    /**
     * @param  {Http} private http
     * @param  {Session} private _sessionService
     */
    function AuthService(http, _sessionService) {
        this.http = http;
        this._sessionService = _sessionService;
        this.session = _sessionService;
    }
    ;
    /**
     * @returns Observable
     */
    AuthService.prototype.login = function () {
        var self = this;
        var headers = new http_2.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_2.RequestOptions({
            headers: headers
        });
        return this.http.post(auth_constant_1.URL.login, {})
            .map(function (res) {
            var body = res.json();
            self._sessionService.create(body.id, body.userId, 'admin');
            return self.extractData(res);
        })
            .catch(this.handleError);
    };
    /**
     * @returns boolean
     */
    AuthService.prototype.isAuthenticated = function () {
        return !!this._sessionService.userId;
    };
    /**
     * @returns boolean
     */
    AuthService.prototype.isAuthorized = function () {
        var authorizedRoles;
        if (!Array.isArray(auth_constant_1.USER_ROLES)) {
            authorizedRoles = [auth_constant_1.USER_ROLES];
        }
        return (this.isAuthenticated() && auth_constant_1.USER_ROLES[this._sessionService.userRole] !== -1);
    };
    /**
     * @param  {Response} res
     */
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    /**
     * @param  {Response|any} error
     */
    AuthService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable_1.Observable.throw(errMsg);
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, session_service_1.Session])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map