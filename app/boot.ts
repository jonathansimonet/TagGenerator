import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './components/app.component'
import {LoginComponent} from "./components/login.component";
import {InstagramService} from "./services/instagram.services";
import {RouteConfig} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/router";

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    InstagramService,
    ROUTER_PROVIDERS
]);