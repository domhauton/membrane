/**
 * Created by dominic on 06/02/17.
 */
import {Component} from "@angular/core";
import {MembraneDaemonService} from "../../../service/membaned/membraned.service";
import {WatcherStatus} from "../../../service/membaned/watcherStatus";
import {MembraneInfo} from "../../../service/membaned/membranedInfo";

@Component({
    moduleId: module.id,
    selector: 'watcher-component',
    templateUrl: 'watcher.component.html',
})

export class WatcherComponent {
    private title = 'Watcher Status';
    private info: MembraneInfo;
    private watcherStatus: WatcherStatus;

    constructor(private membraneDaemonService: MembraneDaemonService) {

        this.membraneDaemonService.getInfoStream().subscribe(
            data => this.info = data,
            error => console.error(error),
            () => console.log("Retrieved Info Successfully")
        );

        this.membraneDaemonService.getWatcherStatusStream().subscribe(
            data => this.watcherStatus = data,
            error => console.error(error),
            () => console.log("Retrieved Watcher Status Successfully")
        );
    }
}
