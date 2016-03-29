System.register(['angular2/core', "../services/instagram.services", "../services/imagga.services"], function(exports_1, context_1) {
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
    var core_1, instagram_services_1, imagga_services_1;
    var GalleryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (instagram_services_1_1) {
                instagram_services_1 = instagram_services_1_1;
            },
            function (imagga_services_1_1) {
                imagga_services_1 = imagga_services_1_1;
            }],
        execute: function() {
            GalleryComponent = (function () {
                function GalleryComponent(_instagramService, _imaggaService) {
                    this._instagramService = _instagramService;
                    this._imaggaService = _imaggaService;
                }
                GalleryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._instagramService.getGallery().subscribe(function (gallery) {
                        _this.username_profile = gallery.data[0].user.username;
                        _this.photo_profile = gallery.data[0].user.profile_picture;
                        _this.medias = gallery.data;
                    });
                };
                GalleryComponent.prototype.getTag = function (url) {
                    this._imaggaService.getTag(url).subscribe(function (tags) {
                        console.log(tags.results[0].tags);
                    });
                };
                GalleryComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/templates/gallery.html',
                        providers: [instagram_services_1.InstagramService, imagga_services_1.ImaggaService]
                    }), 
                    __metadata('design:paramtypes', [instagram_services_1.InstagramService, imagga_services_1.ImaggaService])
                ], GalleryComponent);
                return GalleryComponent;
            }());
            exports_1("GalleryComponent", GalleryComponent);
        }
    }
});
