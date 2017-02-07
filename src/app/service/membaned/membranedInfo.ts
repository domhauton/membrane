/**
 * Created by dominic on 07/02/17.
 */
export class MembraneInfo {

    hostname: string;
    port: number;
    version: string;
    status: string;
    startTime: Date;
    online: boolean;

    constructor(info: any) {
        if (info) {
            this.hostname = info.hostname;
            this.port = info.port;
            this.version = info.version;
            this.status = info.status;
            this.startTime = new Date(Date.parse(info.startTime));
            this.online = true;
        } else {
            this.hostname = "n/a";
            this.port = 0;
            this.version = "n/a";
            this.status = "OFFLINE";
            this.startTime = new Date();
            this.online = false;
        }
    }
}
