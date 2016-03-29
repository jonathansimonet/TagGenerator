import {Component} from 'angular2/core';
import {LoginComponent} from "./login.component";
import {InstagramService} from "../services/instagram.services";
import {RouteConfig} from "angular2/router";
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/gallery.html',
    providers: [InstagramService]
})
@RouteConfig([
    {path:'/gallery', name: 'Gallery', component: GalleryComponent},

])
export class GalleryComponent {
    url: string;
    constructor(private _instagramService:InstagramService) {

    }

    ngOnInit(){
        //this.url = this._instagramService.getOAuthToken();
    }
}