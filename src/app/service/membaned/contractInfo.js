"use strict";
/**
 * Created by dominic on 07/02/17.
 */
var ContractInfo = (function () {
    function ContractInfo(info) {
        if (info) {
            this.contractManagerActive = info.contractManagerActive;
            this.contractTarget = info.contractTarget;
            this.contractedPeers = info.contractedPeers;
            this.undeployedShards = info.undeployedShards;
            this.partiallyDistributedShards = info.partiallyDistributedShards;
            this.fullyDistributedShards = info.fullyDistributedShards;
        }
        else {
            this.contractManagerActive = false;
            this.contractTarget = 0;
            this.contractedPeers = [];
            this.undeployedShards = [];
            this.partiallyDistributedShards = [];
            this.fullyDistributedShards = [];
        }
    }
    return ContractInfo;
}());
exports.ContractInfo = ContractInfo;
//# sourceMappingURL=contractInfo.js.map