"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var NavMockData_1 = require("./NavMockData");
var CommonService = (function () {
    function CommonService() {
        this.isLoggedIn = false;
        this.isLoading = false;
        // Observable string sources
        this.missionAnnouncedSource = new Subject_1.Subject();
        // Observable string streams
        this.missionAnnounced$ = this.missionAnnouncedSource.asObservable();
        this.serviceState = new Subject_1.Subject();
        this.$serviceState = this.serviceState.asObservable();
    }
    CommonService.prototype.getNavigations = function () {
        return Promise.resolve(NavMockData_1.NAVS);
    };
    CommonService.prototype.authenticate = function (user) {
        this.isLoggedIn = true;
        this.missionAnnouncedSource.next(user);
    };
    CommonService.prototype.setState = function (state) {
        if (state === "inProgress") {
            this.isLoading = true;
        }
        else {
            this.isLoading = false;
        }
        this.serviceState.next(this.isLoading);
    };
    return CommonService;
}());
CommonService = __decorate([
    core_1.Injectable()
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=CommonService.js.map