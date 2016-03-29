import {Component} from 'angular2/core';
import {bootstrap} from "angular2/bootstrap";
import {AppComponent} from "./app.component";
import {InstagramService} from "../services/instagram.services";

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

    getLoginUrl() {
        this._instagramService.getLoginUrl();
    }
}
