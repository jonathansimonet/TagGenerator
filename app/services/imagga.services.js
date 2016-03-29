System.register(['angular2/http', 'rxjs/Rx', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var ImaggaService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ImaggaService = (function () {
                function ImaggaService(http) {
                    this.http = http;
                }
                ImaggaService.prototype.getTag = function () {
                    var headers = new http_1.Headers();
                    headers.append('authorization', "Basic YWNjXzAwZTFlOTZiNzMwYWUyNDpmYjM5NzU5NWQ5MDQ2ZTcwMTQ3ZGVjYjE0MTQ4ZjQyMQ==");
                    headers.append('accept', "application/json");
                    this.http.get(' http://api.imagga.com/v1/tagging?url=http://cm-nautisme.fr/wp-content/uploads/2013/07/bateau-a-moteur-nice.jpg&version=2', {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { }, function (err) { });
                };
                ImaggaService.prototype.getLoginUrl = function () {
                };
                ImaggaService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ImaggaService);
                return ImaggaService;
            })();
            exports_1("ImaggaService", ImaggaService);
        }
    }
});
//# sourceMappingURL=imagga.services.js.map