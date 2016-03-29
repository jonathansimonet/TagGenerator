import {Instagram} from "../classes/instagram";
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import 'rxjs/Rx';
import {Injectable} from 'angular2/core';
import {CookieService} from 'angular2-cookie/core';
@Injectable()
export class InstagramService {

    constructor(private http: Http) { }

    url: string;
    private _clientid = 'f6f5aa12a4ac4a198be1b65f7c12160a';
    private _clientsecret = '0bd1d78e05594e54895c0b9d010cf28a';
    private _redirecturi = 'http://localhost:8080/gallery';
    private _baseUrl = 'https://api.instagram.com/v1/';
    private API_OAUTH_URL = 'https://api.instagram.com/oauth/authorize';
    private API_OAUTH_TOKEN_URL = 'https://api.instagram.com/oauth/access_token';
    private _scopes = 'basic+likes+comments+relationships';


    getLoginUrl() {
            return this.http.get(this.API_OAUTH_URL + '?client_id=' + this._clientid + '&redirect_uri=' + this._redirecturi + '&scope=' +this._scopes+ '&response_type=token').map((res:Response)=> res.url);
    }


    getGallery(){
        console.log(InstagramService.getCookie('token'));
        return this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token='+InstagramService.getCookie('token')).map((res:Response) => res.json());
    }

    extractTokenUrl() {
        let urlarray;
        var t = window.location.href ;
        urlarray = t.split('access_token=');
        console.log(urlarray);
        if(urlarray[1] != null)
            InstagramService.setCookie('token',urlarray[1],1);
        return InstagramService.getCookie('token');
    }

    static setCookie(name: string, value: string, expireDays: number, path: string = "") {
        let d:Date = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires:string = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
    }

    static getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = name;
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s\+/g, "");
            if (c.search("token") == 0) {
                return c.substring(cookieName.length+1, c.length);
            }
        }
        return "";
    }


    getOAuthToken(code, token = false)
    {
        var apiData;
        var result;
        apiData = {'grant_type' : 'authorization_code',
        'client_id' : this._clientid,
        'client_secret' : this._clientsecret,
        'redirect_uri' : this._redirecturi,
        'code' : code};
        result = this._makeOAuthCall(apiData);
        return !token ? result : result.access_token;
    }

    _makeOAuthCall(apiData)
    {
        var jsonData;
        jsonData = this.http.post(this.API_OAUTH_TOKEN_URL,apiData).map((res:Response) => res.json());
        if (!jsonData) {
            alert('Error: _makeOAuthCall()');
        }
        return jsonData;
    }

    addComment(id, text) {
        var apiData;
        apiData = {'text':text};
        return this.http.post(this._baseUrl + '/media' + `/${id}/comments`,apiData)
            .map((res:Response) => res.json());
    }
}