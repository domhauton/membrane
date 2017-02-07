/**
 * Created by dominic on 05/02/17.
 */

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'main-app',
    templateUrl: 'menu.component.html'
})

export class MenuComponent {
    menuOption: String = "Overview";

    clickMenu(e) {
        this.menuOption = e;
    }
}
