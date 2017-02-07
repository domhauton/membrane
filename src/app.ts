/**
 * Created by dominic on 05/02/17.
 */
/*
 * Angular Modules
 */
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {enableProdMode} from "@angular/core";
// Import Children
import {AppModule} from "./app/app.module";
enableProdMode();


platformBrowserDynamic().bootstrapModule(AppModule);
