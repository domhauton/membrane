"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by dominic on 06/02/17.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var menu_component_1 = require("./component/menu/menu.component");
var user_service_1 = require("./service/user.service");
var overview_component_1 = require("./component/overview/overview.component");
var membraned_service_1 = require("./service/membaned/membraned.service");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var decorator_component_1 = require("./component/decorator/decorator.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule,
            http_1.HttpModule,
        ],
        declarations: [
            decorator_component_1.DecoratorComponent,
            menu_component_1.MenuComponent,
            overview_component_1.OverviewComponent,
        ],
        providers: [
            user_service_1.UserService,
            membraned_service_1.MembraneDaemonService,
        ],
        bootstrap: [
            decorator_component_1.DecoratorComponent,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map