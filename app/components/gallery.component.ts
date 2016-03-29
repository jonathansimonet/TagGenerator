import {Component, ViewChild} from 'angular2/core';
import {LoginComponent} from "./login.component";
import {InstagramService} from "../services/instagram.services";
import {RouteConfig} from "angular2/router";
import {ImaggaService} from "../services/imagga.services";
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/gallery.html',
    providers: [InstagramService, ImaggaService],
    directives: [MODAL_DIRECTIVES]
})


export class GalleryComponent {
    url: string;
    medias: Array<string>;
    listtags: Array<string>;
    username_profile: string;
    photo_profile: string;
    commentForm: ControlGroup;

    @ViewChild('myModal')
    modal: ModalComponent;

    close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }


    constructor(private _instagramService:InstagramService, private _imaggaService:ImaggaService, private _fb: FormBuilder) {

    }
    ngOnInit() {
        this._instagramService.getGallery().subscribe(
            (gallery) => {
                this.username_profile = gallery.data[0].user.username;
                this.photo_profile = gallery.data[0].user.profile_picture;
                this.medias = gallery.data;

            }
        );
        this.commentForm = this._fb.group({
            "id": ['', Validators.required],
            "comment": ['', Validators.required]
        });
    }

    getTag(url: string){
        this._imaggaService.getTag(url).subscribe(
            (data) => {
                this.listtags =  data.results[0].tags;
            }

        );
    }

    addComment(){
        console.log(this.commentForm.value);
        //this._instagramService.addComment(id,text);
    }


}