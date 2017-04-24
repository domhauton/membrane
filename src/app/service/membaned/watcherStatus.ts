import moment = require("moment");
import Moment = moment.Moment;
import Duration = moment.Duration;
/**
 * Created by dominic on 07/02/17.
 */
export class WatcherStatus {

    trackedFolders: string[];
    trackedFiles: string[];

    constructor(info: any) {
        if (info) {
            this.trackedFolders = info.trackedFolders;
            this.trackedFiles = info.trackedFiles;
        } else {
            this.trackedFolders = [];
            this.trackedFiles = [];
        }
    }
}
