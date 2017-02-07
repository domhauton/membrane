/**
 * Created by dominic on 06/02/17.
 */
import {Component} from "@angular/core";
import {MembraneDaemonService} from "../../../service/membaned/membraned.service";

@Component({
    moduleId: module.id,
    selector: 'storage-component',
    templateUrl: 'storage.component.html',
})

export class StorageComponent {
    private title = 'Storage Screen';

    constructor(private membraneDaemonService: MembraneDaemonService) {
    }
}
