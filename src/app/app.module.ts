/**
 * Created by dominic on 06/02/17.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MenuComponent} from "./component/menu.component";
import {TitleComponent} from "./component/title.component";
import {UserService} from "./service/user.service";

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        MenuComponent,
        TitleComponent
    ],
    providers: [
        UserService,
    ],
    bootstrap: [
        MenuComponent,
    ]
})

export class AppModule { }
