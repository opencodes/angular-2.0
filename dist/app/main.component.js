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
var CommonService_1 = require('./common/services/CommonService');
var AppComponent = (function () {
    function AppComponent(_commonService) {
        this._commonService = _commonService;
        this.name = 'Angular';
        this.isLoggedIn = false;
    }
    AppComponent.prototype.getNavs = function () {
        var _this = this;
        this._commonService.getNavigations().then(function (nav) { return _this.navs = nav; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getNavs();
    };
    AppComponent.prototype.ngOnChange = function (val) {
        console.log('isLoggedIn', val);
        this.isLoggedIn = val;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/main.html',
            providers: [CommonService_1.CommonService]
        }), 
        __metadata('design:paramtypes', [CommonService_1.CommonService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=main.component.js.map