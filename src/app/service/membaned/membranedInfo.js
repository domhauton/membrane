"use strict";
/**
 * Created by dominic on 07/02/17.
 */
var MembraneInfo = (function () {
    function MembraneInfo(info) {
        if (info) {
            this.hostname = info.hostname;
            this.port = info.port;
            this.version = info.version;
            this.status = info.status;
            this.startTime = new Date(Date.parse(info.startTime));
            this.online = true;
        }
        else {
            this.hostname = "n/a";
            this.port = 0;
            this.version = "n/a";
            this.status = "OFFLINE";
            this.startTime = new Date();
            this.online = false;
        }
    }
    return MembraneInfo;
}());
exports.MembraneInfo = MembraneInfo;
//# sourceMappingURL=membranedInfo.js.map