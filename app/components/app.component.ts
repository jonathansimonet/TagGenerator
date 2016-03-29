import {Component} from 'angular2/core';
import {LoginComponent} from "./login.component";
import {InstagramService} from "../services/instagram.services";
import {RouteConfig} from "angular2/router";
import {GalleryComponent} from "./gallery.component";
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    providers: [InstagramService],
    directives: [LoginComponent]
})

@RouteConfig([
    {path:'/gallery', name: 'Gallery', component: GalleryComponent},

])
export class AppComponent {
    constructor(private _instagramService: InstagramService){

    }

    url: String;

    ngOnInit(){
         this._instagramService.getLoginUrl().subscribe(
            (data) => {
                console.log(data);
                //this.url = data;
            }
        );

        this._instagramService.getGallery();
    }

    getLoginUrl() {
        this._instagramService.getLoginUrl();
    }
}
