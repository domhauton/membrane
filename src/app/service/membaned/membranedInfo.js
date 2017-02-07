"use strict";
var moment = require("moment");
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
            this.startTime = moment(info.startTime);
            this.online = true;
        }
        else {
            this.hostname = "n/a";
            this.port = 0;
            this.version = "n/a";
            this.status = "OFFLINE";
            this.startTime = moment();
            this.online = false;
        }
    }
    MembraneInfo.prototype.getUptime = function () {
        if (this.online) {
            var milliseconds = moment.duration(moment().diff(this.startTime)).asMilliseconds();
            return moment.utc(milliseconds).format("HH:mm:ss");
        }
        else {
            return "n/a";
        }
    };
    return MembraneInfo;
}());
exports.MembraneInfo = MembraneInfo;
//# sourceMappingURL=membranedInfo.js.map