/**
 * Created by dominic on 06/02/17.
 */
import {Component} from "@angular/core";
import {MembraneDaemonService} from "../../../service/membaned/membraned.service";
import {ContractInfo} from "../../../service/membaned/contractInfo";
import {NetworkStatus} from "../../../service/membaned/networkStatus";
import {MembraneInfo} from "../../../service/membaned/membranedInfo";

@Component({
    moduleId: module.id,
    selector: 'network-component',
    templateUrl: 'network.component.html',
})

export class NetworkComponent {
    private title = 'Networked Storage';
    private info: MembraneInfo;
    private contractInfo: ContractInfo;
    private networkStatus: NetworkStatus;

    constructor(private membraneDaemonService: MembraneDaemonService) {

        this.membraneDaemonService.getInfoStream().subscribe(
            data => this.info = data,
            error => console.error(error),
            () => console.log("Retrieved Info Successfully")
        );

        this.membraneDaemonService.getContractInfoStream().subscribe(
            data => this.contractInfo = data,
            error => console.error(error),
            () => console.log("Retrieved Contract Info Successfully")
        );

        this.membraneDaemonService.getNetworkStatusStream().subscribe(
            data => this.networkStatus = data,
            error => console.error(error),
            () => console.log("Retrieved Network Status Successfully")
        );
    }
}
