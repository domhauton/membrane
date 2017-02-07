/**
 * Created by dominic on 06/02/17.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MenuComponent} from "./component/menu/menu.component";
import {UserService} from "./service/user.service";
import {OverviewComponent} from "./component/main/overview/overview.component";
import {MembraneDaemonService} from "./service/membaned/membraned.service";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {DecoratorComponent} from "./component/decorator/decorator.component";
import {SettingsComponent} from "./component/settings/settings.component";
import {HelpComponent} from "./component/help/help.component";
import {NetworkComponent} from "./component/main/network/network.component";
import {StorageComponent} from "./component/main/storage/storage.component";
import {WatcherComponent} from "./component/main/watcher/watcher.component";

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
        SettingsComponent,
        HelpComponent,
        NetworkComponent,
        StorageComponent,
        WatcherComponent,
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
