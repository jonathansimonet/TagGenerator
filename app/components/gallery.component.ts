import {Component} from 'angular2/core';
import {LoginComponent} from "./login.component";
import {InstagramService} from "../services/instagram.services";
import {RouteConfig} from "angular2/router";
import {ImaggaService} from "../services/imagga.services";
@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/gallery.html',
    providers: [InstagramService]
})
export class GalleryComponent {
    url: string;
    medias: Array<string>;
    username_profile: string;
    photo_profile: string;
    constructor(private _instagramService:InstagramService, private _imaggaService:ImaggaService) {

    }
    ngOnInit(){
        this._instagramService.getGallery().subscribe(
            (gallery) => {
                this.username_profile = gallery.data[0].user.username;
                this.photo_profile = gallery.data[0].user.profile_picture;
               this.medias = gallery.data;

            }
        );
    }

    getTag(){
        this._imaggaService.getTag();
    }
}