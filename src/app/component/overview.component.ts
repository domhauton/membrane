/**
 * Created by dominic on 06/02/17.
 */

import { Component } from '@angular/core';

@Component({
    // The selector is what angular internally uses
    selector: 'my-app',
    template: '<h1>{{title}}</h1>',
})

export class OverviewComponent {
    title = 'Overview Screen';
}