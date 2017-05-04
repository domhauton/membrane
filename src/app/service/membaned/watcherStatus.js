"use strict";
/**
 * Created by dominic on 07/02/17.
 */
var WatcherStatus = (function () {
    function WatcherStatus(info) {
        if (info) {
            this.trackedFolders = info.trackedFolders;
            this.trackedFiles = info.trackedFiles;
        }
        else {
            this.trackedFolders = [];
            this.trackedFiles = [];
        }
    }
    return WatcherStatus;
}());
exports.WatcherStatus = WatcherStatus;
//# sourceMappingURL=watcherStatus.js.map