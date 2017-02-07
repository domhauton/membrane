/**
 * Created by dominic on 07/02/17.
 */
export class MembraneInfo {

    hostname: string;
    port: number;
    version: string;
    status: string;

    constructor(info: any) {
        if (info) {
            this.hostname = info.hostname;
            this.port = info.port;
            this.version = info.version;
            this.status = info.status;
        }
    }
}
