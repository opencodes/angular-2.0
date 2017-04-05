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
var CommonService_1 = require("./common/services/CommonService");
var AppComponent = (function () {
    function AppComponent(_commonService) {
        var _this = this;
        this._commonService = _commonService;
        this.name = 'Angular';
        this.isLoggedIn = false;
        this.mission = '<no mission announced>';
        this.announced = false;
        this.isLoggedIn = _commonService.isLoggedIn;
        this.subscription = _commonService.missionAnnounced$.subscribe(function (user) {
            _this.user = {
                id: user.id,
                name: "Guest User"
            };
            _this.announced = true;
            _this.isLoggedIn = true;
        });
    }
    AppComponent.prototype.getNavs = function () {
        var _this = this;
        this._commonService.getNavigations().then(function (nav) { return _this.navs = nav; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getNavs();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/main.html',
        providers: [CommonService_1.CommonService]
    }),
    __metadata("design:paramtypes", [CommonService_1.CommonService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=main.component.js.map