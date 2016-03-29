System.register(['angular2/core', "./login.component", "../services/instagram.services", "angular2/router", "./gallery.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_component_1, instagram_services_1, router_1, gallery_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (instagram_services_1_1) {
                instagram_services_1 = instagram_services_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (gallery_component_1_1) {
                gallery_component_1 = gallery_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_instagramService) {
                    this._instagramService = _instagramService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._instagramService.getLoginUrl().subscribe(function (data) {
                        _this.url = data;
                    });
                };
                AppComponent.prototype.getLoginUrl = function () {
                    this._instagramService.getLoginUrl();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/app.html',
                        providers: [instagram_services_1.InstagramService],
                        directives: [login_component_1.LoginComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/gallery', name: 'Gallery', component: gallery_component_1.GalleryComponent },
                    ]), 
                    __metadata('design:paramtypes', [instagram_services_1.InstagramService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map