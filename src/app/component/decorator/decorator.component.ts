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
    clickNavBar(e) {
        console.log(e);
    }
}
