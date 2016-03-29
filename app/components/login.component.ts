import {Component} from 'angular2/core';
import {bootstrap} from "angular2/bootstrap";
import {AppComponent} from "./app.component";
import {InstagramService} from "../services/instagram.services";
import {RouteConfig} from "angular2/router";

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/login.html',
    providers: [
        InstagramService,
    ]
})
export class LoginComponent {
    title : string = "Tag Generator";

    constructor(private _instagramService: InstagramService){

    }

    url: string;

    ngOnInit(){
        this._instagramService.getLoginUrl().subscribe(
            (data) => {
                this.url = data;
            }
        );
    }

    getLoginUrl() {
        this._instagramService.getLoginUrl();
    }

    getToken(){
        console.log('testtoken');
        this._instagramService.extractTokenUrl();
    }
}
