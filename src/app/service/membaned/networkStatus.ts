import moment = require("moment");
import Moment = moment.Moment;
import Duration = moment.Duration;
/**
 * Created by dominic on 07/02/17.
 */
export class NetworkStatus {

    enabled: boolean;
    connectedPeers: number;
    networkUID: string;
    maxConnectionCount: number;
    peerListeningPort: number;
    upnpAddress: string;

    constructor(info: any) {
        if (info) {
            this.enabled = info.enabled;
            this.connectedPeers = info.connectedPeers;
            this.networkUID = info.networkUID;
            this.maxConnectionCount = info.maxConnectionCount;
            this.peerListeningPort = info.peerListeningPort;
            this.upnpAddress = info.upnpAddress;
        } else {
            this.enabled = false;
            this.connectedPeers = 0;
            this.networkUID = "n/a";
            this.maxConnectionCount = 0;
            this.peerListeningPort = 0;
            this.upnpAddress = "n/a";
        }
    }
}
