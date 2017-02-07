/**
 * Created by dominic on 05/02/17.
 */
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

// Route Configuration
export const routes: Routes = [
    //{ path: 'overview', component: OverviewComponent },
    //{ path: 'settings', component: SettingsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
