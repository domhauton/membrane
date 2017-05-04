"use strict";
/**
 * Created by dominic on 07/02/17.
 */
var NetworkStatus = (function () {
    function NetworkStatus(info) {
        if (info) {
            this.enabled = info.enabled;
            this.connectedPeers = info.connectedPeers;
            this.networkUID = info.networkUID;
            this.maxConnectionCount = info.maxConnectionCount;
            this.peerListeningPort = info.peerListeningPort;
            this.upnpAddress = info.upnpAddress;
        }
        else {
            this.enabled = false;
            this.connectedPeers = 0;
            this.networkUID = "n/a";
            this.maxConnectionCount = 0;
            this.peerListeningPort = 0;
            this.upnpAddress = "n/a";
        }
    }
    return NetworkStatus;
}());
exports.NetworkStatus = NetworkStatus;
//# sourceMappingURL=networkStatus.js.map