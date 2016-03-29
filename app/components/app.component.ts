import {Component} from 'angular2/core';
import {LoginComponent} from "./login.component";
import {InstagramService} from "../services/instagram.services";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {GalleryComponent} from "./gallery.component";
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    providers: [InstagramService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/login', name:'Login', component: LoginComponent, useAsDefault: true},
    {path:'/gallery', name: 'Gallery', component: GalleryComponent},

])
export class AppComponent {
    constructor(private _instagramService: InstagramService){

    }

    ngOnInit(){
        this._instagramService.extractTokenUrl();
    }
}
