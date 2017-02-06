/**
 * Created by dominic on 05/02/17.
 */
/*
 * Angular Modules
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {enableProdMode} from '@angular/core';
enableProdMode();

// Import Children
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);