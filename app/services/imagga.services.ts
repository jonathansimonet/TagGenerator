import {Http, HTTP_PROVIDERS, Response,Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Injectable} from 'angular2/core';

@Injectable()


export class ImaggaService{

    constructor(private http: Http) { }

    getTag() {
        var headers = new Headers();
        headers.append('authorization',"Basic YWNjXzAwZTFlOTZiNzMwYWUyNDpmYjM5NzU5NWQ5MDQ2ZTcwMTQ3ZGVjYjE0MTQ4ZjQyMQ==" );
        headers.append('accept',"application/json" );

        this.http.get(' http://api.imagga.com/v1/tagging?url=http://cm-nautisme.fr/wp-content/uploads/2013/07/bateau-a-moteur-nice.jpg&version=2', {
                headers: headers
            })
            .map(res => res.json())
            .subscribe(
                data =>{},
                err =>{}

            );
    }


    getLoginUrl() {

    }



}