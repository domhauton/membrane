/**
 * Created by dominic on 06/02/17.
 */

import {Component} from '@angular/core';
import {MembraneDaemonService} from "../../service/membaned/membraned.service";
import {MembraneInfo} from "../../service/membaned/membranedInfo";

@Component({
    moduleId: module.id,
    selector: 'help-module',
    templateUrl: 'help.component.html',
})

export class HelpComponent {
    private title = 'Help Screen';

    constructor() {
    }
}
