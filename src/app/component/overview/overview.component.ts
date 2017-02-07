/**
 * Created by dominic on 06/02/17.
 */

import {Component} from '@angular/core';
import {MembraneDaemonService} from "../../service/membaned/membraned.service";
import {MembraneInfo} from "../../service/membaned/membranedInfo";

@Component({
    moduleId: module.id,
    selector: 'main-component',
    templateUrl: 'overview.component.html',
})

export class OverviewComponent {
    private title = 'Overview Screen';
    private date = new Date();
    private info: MembraneInfo;

    constructor(private membraneDaemonService: MembraneDaemonService) {
        setInterval(() => {
            this.date = new Date();
        }, 1000);

        this.membraneDaemonService.getInfo().subscribe(
            data => this.info = data,
            error => console.error(error),
            () => console.log("Finished request!")
        );
    }
}
