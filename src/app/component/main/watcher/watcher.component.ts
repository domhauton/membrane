/**
 * Created by dominic on 06/02/17.
 */
import {Component} from "@angular/core";
import {MembraneDaemonService} from "../../../service/membaned/membraned.service";

@Component({
    moduleId: module.id,
    selector: 'watcher-component',
    templateUrl: 'watcher.component.html',
})

export class WatcherComponent {
    private title = 'Watcher Screen';

    constructor(private membraneDaemonService: MembraneDaemonService) {
    }
}
