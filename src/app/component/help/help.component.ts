/**
 * Created by dominic on 06/02/17.
 */

import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'help-module',
    templateUrl: 'help.component.html',
})

export class HelpComponent {
    private title = 'Membrane GUI Help';

    constructor() {
    }
}
