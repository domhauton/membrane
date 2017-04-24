/**
 * Created by dominic on 06/02/17.
 */
import {Component} from "@angular/core";
import {MembraneDaemonService} from "../../../service/membaned/membraned.service";
import {StorageStatus} from "../../../service/membaned/storageStatus";
import {MembraneInfo} from "../../../service/membaned/membranedInfo";

@Component({
    moduleId: module.id,
    selector: 'storage-component',
    templateUrl: 'storage.component.html',
})

export class StorageComponent {
    private title = 'Storage Status';
    private info: MembraneInfo;
    private storageStatus: StorageStatus;

    constructor(private membraneDaemonService: MembraneDaemonService) {

        this.membraneDaemonService.getInfoStream().subscribe(
            data => this.info = data,
            error => console.error(error),
            () => console.log("Retrieved Info Successfully")
        );

        this.membraneDaemonService.getStorageStatusStream().subscribe(
            data => this.storageStatus = data,
            error => console.error(error),
            () => console.log("Retrieved Storage Status Successfully")
        );
    }
}
