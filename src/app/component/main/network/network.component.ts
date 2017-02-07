/**
 * Created by dominic on 06/02/17.
 */
import {Component} from "@angular/core";
import {MembraneDaemonService} from "../../../service/membaned/membraned.service";

@Component({
    moduleId: module.id,
    selector: 'network-component',
    templateUrl: 'network.component.html',
})

export class NetworkComponent {
    private title = 'Network Screen';

    constructor(private membraneDaemonService: MembraneDaemonService) {
    }
}
