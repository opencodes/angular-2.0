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
var CommonService_1 = require("../../common/services/CommonService");
var BlogPostService_1 = require("../services/BlogPostService");
var BlogComponent = (function () {
    function BlogComponent(_postService, route, router, _commonService) {
        this._postService = _postService;
        this.route = route;
        this.router = router;
        this._commonService = _commonService;
        this.title = "Blog";
    }
    ;
    BlogComponent.prototype.getPosts = function () {
        var _this = this;
        var self = this;
        self._commonService.setState('inProgress');
        this._postService.getBlogPost()
            .subscribe(function (posts) {
            _this.posts = posts;
            self._commonService.setState('Complete');
        }, function (error) {
            _this.errorMessage = error;
            self._commonService.setState('Complete');
        });
    };
    BlogComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/blog/html/blog.html",
        styleUrls: ["./app/blog/css/blog.css"],
        providers: [BlogPostService_1.BlogPostService]
    }),
    __metadata("design:paramtypes", [BlogPostService_1.BlogPostService,
        router_1.ActivatedRoute,
        router_1.Router,
        CommonService_1.CommonService])
], BlogComponent);
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map