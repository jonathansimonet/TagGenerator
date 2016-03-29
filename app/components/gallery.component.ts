import {Component} from 'angular2/core';
import {LoginComponent} from "./login.component";
import {InstagramService} from "../services/instagram.services";
import {RouteConfig} from "angular2/router";
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/gallery.html',
    providers: [InstagramService]
})
export class GalleryComponent {
    url: string;
    medias: Array<string>;
    constructor(private _instagramService:InstagramService) {

    }
    ngOnInit(){
        this._instagramService.getGallery().subscribe(
            (gallery) => {
                console.log(gallery);
               this.medias = gallery.data;
            }
        );
    }
}