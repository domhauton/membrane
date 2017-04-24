import moment = require("moment");
import Moment = moment.Moment;
import Duration = moment.Duration;
/**
 * Created by dominic on 07/02/17.
 */
export class MembraneInfo {

    hostname: string;
    port: number;
    version: string;
    status: string;
    startTime: Moment;
    online: boolean;

    constructor(info: any) {
        if (info) {
            this.hostname = info.hostname;
            this.port = info.port;
            this.version = info.version;
            this.status = info.status;
            this.startTime = moment.utc(info.startTime);
            this.online = true;
        } else {
            this.hostname = "n/a";
            this.port = 0;
            this.version = "n/a";
            this.status = "OFFLINE";
            this.startTime = moment();
            this.online = false;
        }
    }

    getUptime(): String {
        if (this.online) {
            let milliseconds = moment.duration(moment().utc().diff(this.startTime)).asMilliseconds();
            return moment.utc(milliseconds).format("HH:mm:ss");
        } else {
            return "n/a";
        }
    }
}
