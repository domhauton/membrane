import moment = require("moment");
import Moment = moment.Moment;
import Duration = moment.Duration;
/**
 * Created by dominic on 07/02/17.
 */
export class StorageStatus {

    currentFiles: string[];
    referencedFiles: string[];
    localShardStorageSize: string;
    targetLocalShardStorageSize: string;
    maxLocalShardStorageSize: string;
    peerBlockStorageSize: string;
    targetPeerBlockStorageSize: string;
    maxPeerBlockStorageSize: string;

    constructor(info: any) {
        let mb = 1024 * 1024;
        if (info) {
            this.currentFiles = info.currentFiles;
            this.referencedFiles = info.referencedFiles;
            this.localShardStorageSize = (info.localShardStorageSize / mb).toFixed(1);
            this.targetLocalShardStorageSize = (info.targetLocalShardStorageSize / mb).toFixed(1);
            this.maxLocalShardStorageSize = (info.maxLocalShardStorageSize / mb).toFixed(1);
            this.peerBlockStorageSize = (info.peerBlockStorageSize / mb).toFixed(1);
            this.targetPeerBlockStorageSize = (info.targetPeerBlockStorageSize / mb).toFixed(1);
            this.maxPeerBlockStorageSize = (info.maxPeerBlockStorageSize / mb).toFixed(1);
        } else {
            this.currentFiles = [];
            this.referencedFiles = [];
            this.localShardStorageSize = "n/a ";
            this.targetLocalShardStorageSize = "n/a ";
            this.maxLocalShardStorageSize = "n/a ";
            this.peerBlockStorageSize = "n/a ";
            this.targetPeerBlockStorageSize = "n/a ";
            this.maxPeerBlockStorageSize = "n/a ";
        }
    }
}

