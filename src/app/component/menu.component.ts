/**
 * Created by dominic on 05/02/17.
 */

import { Component } from '@angular/core';

@Component({
    // The selector is what angular internally uses
    selector: 'main-window', // <app></app>
    templateUrl: './app/component/menu.component.html'
})

export class MenuComponent {
    clickNavBar(e) {
        console.log(e);
    }
}
