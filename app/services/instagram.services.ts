import {Instagram} from "../classes/instagram";
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import 'rxjs/Rx';
import {Injectable} from 'angular2/core';
@Injectable()
export class InstagramService {

    constructor(private http: Http) { }

    url: string;
    private _clientid = 'f6f5aa12a4ac4a198be1b65f7c12160a';
    private _clientsecret = '0bd1d78e05594e54895c0b9d010cf28a';
    private _redirecturi = 'http://localhost:8080';
    private _baseUrl = 'https://api.instagram.com/v1/';
    private API_OAUTH_URL = 'https://api.instagram.com/oauth/authorize';
    private API_OAUTH_TOKEN_URL = 'https://api.instagram.com/oauth/access_token';
    private _scopes = 'basic+likes+comments+relationships';
    private token = '46089652.f6f5aa1.71081fc96cac4672b2aac6d00b7d0101';


    getLoginUrl() {
            return this.http.get(this.API_OAUTH_URL + '?client_id=' + this._clientid + '&redirect_uri=' + this._redirecturi + '&scope=' +this._scopes+ '&response_type=token').map((res:Response)=> res.url);
    }


    getImage(){
        var json;
        json = this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token='+this.token).map((res:Response) => res.json());
        console.log(json);
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
        console.log(result);
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