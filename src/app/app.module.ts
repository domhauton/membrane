/**
 * Created by dominic on 06/02/17.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MenuComponent} from "./component/menu.component";
import {TitleComponent} from "./component/title.component";
import {UserService} from "./service/user.service";
import {OverviewComponent} from "./component/overview.component";
import {MembraneDaemonService} from "./service/membraned.service";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        HttpModule,
    ],
    declarations: [
        MenuComponent,
        OverviewComponent,
        TitleComponent
    ],
    providers: [
        UserService,
        MembraneDaemonService,
    ],
    bootstrap: [
        MenuComponent,
    ]
})

export class AppModule { }
