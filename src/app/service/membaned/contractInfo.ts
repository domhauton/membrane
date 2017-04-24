import moment = require("moment");
import Moment = moment.Moment;
import Duration = moment.Duration;
/**
 * Created by dominic on 07/02/17.
 */
export class ContractInfo {

    contractManagerActive: boolean;
    contractTarget: number;
    contractedPeers: string[];
    undeployedShards: string[];
    partiallyDistributedShards: string[];
    fullyDistributedShards: string[];

    constructor(info: any) {
        if (info) {
            this.contractManagerActive = info.contractManagerActive;
            this.contractTarget = info.contractTarget;
            this.contractedPeers = info.contractedPeers;
            this.undeployedShards = info.undeployedShards;
            this.partiallyDistributedShards = info.partiallyDistributedShards;
            this.fullyDistributedShards = info.fullyDistributedShards;
        } else {
            this.contractManagerActive = false;
            this.contractTarget = 0;
            this.contractedPeers = [];
            this.undeployedShards = [];
            this.partiallyDistributedShards = [];
            this.fullyDistributedShards = [];
        }
    }
}
