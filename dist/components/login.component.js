System.register(['angular2/core', "../services/instagram.services"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, instagram_services_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (instagram_services_1_1) {
                instagram_services_1 = instagram_services_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_instagramService) {
                    this._instagramService = _instagramService;
                    this.title = "Tag Generator";
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._instagramService.getLoginUrl().subscribe(function (data) {
                        _this.url = data;
                    });
                };
                LoginComponent.prototype.getLoginUrl = function () {
                    this._instagramService.getLoginUrl();
                };
                LoginComponent.prototype.getToken = function () {
                    console.log('testtoken');
                    this._instagramService.extractTokenUrl();
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/login.html',
                        providers: [
                            instagram_services_1.InstagramService,
                        ]
                    }), 
                    __metadata('design:paramtypes', [instagram_services_1.InstagramService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
