/**
 * Created by dominic on 05/02/17.
 */

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'main-window',
    templateUrl: 'decorator.component.html'
})

export class DecoratorComponent {
    option: String = 'Home';
    version: String = "1.0.0-alpha.1";

    clickNavBar(e) {
        this.option = e;
    }
}
