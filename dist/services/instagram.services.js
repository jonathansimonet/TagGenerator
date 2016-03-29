System.register(['angular2/http', 'rxjs/Rx', 'angular2/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var InstagramService;
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
            InstagramService = (function () {
                function InstagramService(http) {
                    this.http = http;
                    this._clientid = 'f6f5aa12a4ac4a198be1b65f7c12160a';
                    this._clientsecret = '0bd1d78e05594e54895c0b9d010cf28a';
                    this._redirecturi = 'http://localhost:8080';
                    this._baseUrl = 'https://api.instagram.com/v1/';
                    this.API_OAUTH_URL = 'https://api.instagram.com/oauth/authorize';
                    this.API_OAUTH_TOKEN_URL = 'https://api.instagram.com/oauth/access_token';
                    this._scopes = 'basic+likes+comments+relationships';
                    this.token = '46089652.f6f5aa1.71081fc96cac4672b2aac6d00b7d0101';
                }
                InstagramService.prototype.getLoginUrl = function () {
                    return this.http.get(this.API_OAUTH_URL + '?client_id=' + this._clientid + '&redirect_uri=' + this._redirecturi + '&scope=' + this._scopes + '&response_type=token').map(function (res) { return res; });
                };
                InstagramService.prototype.getGallery = function () {
                    this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + InstagramService.getCookie('token')).map(function (res) { return res.json(); });
                    //console.log(json);
                    console.log(InstagramService.extractTokenUrl());
                };
                InstagramService.extractTokenUrl = function () {
                    var urlarray;
                    var t = window.location.href;
                    urlarray = t.split('access_token=');
                    if (urlarray != null)
                        InstagramService.setCookie('token', urlarray[1], 1);
                    return InstagramService.getCookie('token');
                };
                InstagramService.setCookie = function (name, value, expireDays, path) {
                    if (path === void 0) { path = ""; }
                    var d = new Date();
                    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
                    var expires = "expires=" + d.toUTCString();
                    document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
                };
                InstagramService.getCookie = function (name) {
                    var ca = document.cookie.split(';');
                    var caLen = ca.length;
                    var cookieName = name + "=";
                    var c;
                    for (var i = 0; i < caLen; i += 1) {
                        c = ca[i].replace(/^\s\+/g, "");
                        if (c.indexOf(cookieName) == 0) {
                            return c.substring(cookieName.length, c.length);
                        }
                    }
                    return "";
                };
                InstagramService.prototype.getOAuthToken = function (code, token) {
                    if (token === void 0) { token = false; }
                    var apiData;
                    var result;
                    apiData = { 'grant_type': 'authorization_code',
                        'client_id': this._clientid,
                        'client_secret': this._clientsecret,
                        'redirect_uri': this._redirecturi,
                        'code': code };
                    result = this._makeOAuthCall(apiData);
                    console.log(result);
                    return !token ? result : result.access_token;
                };
                InstagramService.prototype._makeOAuthCall = function (apiData) {
                    var jsonData;
                    jsonData = this.http.post(this.API_OAUTH_TOKEN_URL, apiData).map(function (res) { return res.json(); });
                    if (!jsonData) {
                        alert('Error: _makeOAuthCall()');
                    }
                    return jsonData;
                };
                InstagramService.prototype.addComment = function (id, text) {
                    var apiData;
                    apiData = { 'text': text };
                    return this.http.post(this._baseUrl + '/media' + ("/" + id + "/comments"), apiData)
                        .map(function (res) { return res.json(); });
                };
                InstagramService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], InstagramService);
                return InstagramService;
            }());
            exports_1("InstagramService", InstagramService);
        }
    }
});
