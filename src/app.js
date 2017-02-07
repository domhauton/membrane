"use strict";
/**
 * Created by dominic on 05/02/17.
 */
/*
 * Angular Modules
 */
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var core_1 = require("@angular/core");
// Import Children
var app_module_1 = require("./app/app.module");
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=app.js.map