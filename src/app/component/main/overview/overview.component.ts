/**
 * Created by dominic on 06/02/17.
 */

import {Component} from '@angular/core';
import {MembraneDaemonService} from "../../../service/membaned/membraned.service";
import {MembraneInfo} from "../../../service/membaned/membranedInfo";

@Component({
    moduleId: module.id,
    selector: 'overview-component',
    templateUrl: 'overview.component.html',
})

export class OverviewComponent {
    private title = 'Overview Screen';
    private info: MembraneInfo;
    private uptime: String;

    constructor(private membraneDaemonService: MembraneDaemonService) {

        this.membraneDaemonService.getInfoStream().subscribe(
            data => this.info = data,
            error => console.error(error),
            () => console.log("Retrieved Info Successfully")
        );

        this.membraneDaemonService.getUptimeStream().subscribe(
            data => {
                this.uptime = data;
                console.log(data);
            }
        );
    }
}
