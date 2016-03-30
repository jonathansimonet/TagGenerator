System.register(['angular2/core', 'angular2-modal'], function(exports_1, context_1) {
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
    var core_1, angular2_modal_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(modal, elementRef, injector, _renderer) {
                    this.modal = modal;
                    this.elementRef = elementRef;
                    this.injector = injector;
                    this._renderer = _renderer;
                }
                App.prototype.openDialog = function (type) {
                    var _this = this;
                    var dialog, component = angular2_modal_1.YesNoModal, content = new angular2_modal_1.YesNoModalContent('Simple Large modal', 'Press ESC or click OK / outside area to close.', true);
                    var bindings = core_1.Injector.resolve([
                        core_1.provide(angular2_modal_1.ICustomModal, { useValue: content })
                    ]);
                    if (type === 'inElement') {
                        dialog = this.modal.openInside(component, this.mySampleElement, 'myModal', bindings, App.modalConfigs[type]);
                    }
                    else
                        dialog = this.modal.open(component, bindings, new angular2_modal_1.ModalConfig("lg", false, 27));
                    dialog.then(function (resultPromise) {
                        return resultPromise.result.then(function (result) {
                            _this.lastModalResult = result;
                        }, function () { return _this.lastModalResult = 'Rejected!'; });
                    });
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [angular2_modal_1.Modal],
                        template: "\n    <div>\n      <h2>Angular 2 Modal example</h2>\n      <h3>Check the source on <a href=\"https://github.com/shlomiassaf/angular2-modal\">Github</a> or see the complete <a href=\"http://shlomiassaf.github.io/angular2-modal/\">demo</a></h3>\n      <button class=\"btn btn-primary\" (click)=\"openDialog('large')\">Open Modal</button>\n    </div>\n  ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof angular2_modal_1.Modal !== 'undefined' && angular2_modal_1.Modal) === 'function' && _a) || Object, core_1.ElementRef, core_1.Injector, core_1.Renderer])
                ], App);
                return App;
                var _a;
            }());
            exports_1("App", App);
        }
    }
});
