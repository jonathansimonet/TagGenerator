import {Http, HTTP_PROVIDERS, Response,Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Injectable} from 'angular2/core';

@Injectable()


export class ImaggaService{

    constructor(private http: Http) { }

    getTag(urlimage: string) {
        var headers = new Headers();
        headers.append('authorization',"Basic YWNjXzAwZTFlOTZiNzMwYWUyNDpmYjM5NzU5NWQ5MDQ2ZTcwMTQ3ZGVjYjE0MTQ4ZjQyMQ==" );
        headers.append('accept',"application/json" );

        return this.http.get(' http://api.imagga.com/v1/tagging?url='+urlimage+'&version=2', {
                headers: headers
            })
            .map(res => res.json());

    }


    getLoginUrl() {

    }



}