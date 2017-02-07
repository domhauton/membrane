/**
 * Created by dominic on 06/02/17.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MenuComponent} from "./component/menu/menu.component";
import {UserService} from "./service/user.service";
import {OverviewComponent} from "./component/overview/overview.component";
import {MembraneDaemonService} from "./service/membaned/membraned.service";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {DecoratorComponent} from "./component/decorator/decorator.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        HttpModule,
    ],
    declarations: [
        DecoratorComponent,
        MenuComponent,
        OverviewComponent,
    ],
    providers: [
        UserService,
        MembraneDaemonService,
    ],
    bootstrap: [
        DecoratorComponent,
    ]
})

export class AppModule { }
