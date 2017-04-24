"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var membranedInfo_1 = require("./membranedInfo");
var rxjs_1 = require("rxjs");
var contractInfo_1 = require("./contractInfo");
var networkStatus_1 = require("./networkStatus");
var storageStatus_1 = require("./storageStatus");
var watcherStatus_1 = require("./watcherStatus");
var MembraneDaemonService = (function () {
    function MembraneDaemonService(http) {
        var _this = this;
        this.http = http;
        this.memInfoSource = rxjs_1.Observable.interval(5000)
            .switchMap(function () { return _this.getInfo(); });
        this.memInfoSubject = new rxjs_1.BehaviorSubject(new membranedInfo_1.MembraneInfo(null));
        this.memInfoSource.subscribe(this.memInfoSubject);
        this.contractInfoSource = rxjs_1.Observable.interval(5000)
            .switchMap(function () {
                return _this.getContractInfo();
            });
        this.contractInfoSubject = new rxjs_1.BehaviorSubject(new contractInfo_1.ContractInfo(null));
        this.contractInfoSource.subscribe(this.contractInfoSubject);
        this.networkStatusSource = rxjs_1.Observable.interval(5000)
            .switchMap(function () {
                return _this.getNetworkStatus();
            });
        this.networkStatusSubject = new rxjs_1.BehaviorSubject(new networkStatus_1.NetworkStatus(null));
        this.networkStatusSource.subscribe(this.networkStatusSubject);
        this.storageStatusSource = rxjs_1.Observable.interval(5000)
            .switchMap(function () {
                return _this.getStorageStatus();
            });
        this.storageStatusSubject = new rxjs_1.BehaviorSubject(new storageStatus_1.StorageStatus(null));
        this.storageStatusSource.subscribe(this.storageStatusSubject);
        this.watcherStatusSource = rxjs_1.Observable.interval(5000)
            .switchMap(function () {
                return _this.getWatcherStatus();
            });
        this.watcherStatusSubject = new rxjs_1.BehaviorSubject(new watcherStatus_1.WatcherStatus(null));
        this.watcherStatusSource.subscribe(this.watcherStatusSubject);
        var uptimeSource = rxjs_1.Observable.interval(500)
            .map(function () { return _this.getUptime(); });
        this.uptimeSubject = new rxjs_1.BehaviorSubject(this.getUptime());
        uptimeSource.subscribe(this.uptimeSubject);
    }
    MembraneDaemonService.prototype.getInfoStream = function () {
        return this.memInfoSubject;
    };
    MembraneDaemonService.prototype.getUptimeStream = function () {
        return this.uptimeSubject;
    };
    MembraneDaemonService.prototype.getContractInfoStream = function () {
        return this.contractInfoSubject;
    };
    MembraneDaemonService.prototype.getNetworkStatusStream = function () {
        return this.networkStatusSubject;
    };
    MembraneDaemonService.prototype.getStorageStatusStream = function () {
        return this.storageStatusSubject;
    };
    MembraneDaemonService.prototype.getWatcherStatusStream = function () {
        return this.watcherStatusSubject;
    };
    MembraneDaemonService.prototype.getInfo = function () {
        return this.http.get('http://127.0.0.1:13200')
            .map(function (res) { return res.json(); })
            .map(function (res) { return new membranedInfo_1.MembraneInfo(res); })
            .catch(function () { return rxjs_1.Observable.of(new membranedInfo_1.MembraneInfo(null)); });
    };
    MembraneDaemonService.prototype.getContractInfo = function () {
        return this.http.get('http://127.0.0.1:13200/status/contract')
            .map(function (res) {
                return res.json();
            })
            .map(function (res) {
                return new contractInfo_1.ContractInfo(res);
            })
            .catch(function () {
                return rxjs_1.Observable.of(new contractInfo_1.ContractInfo(null));
            });
    };
    MembraneDaemonService.prototype.getNetworkStatus = function () {
        return this.http.get('http://127.0.0.1:13200/status/network')
            .map(function (res) {
                return res.json();
            })
            .map(function (res) {
                return new networkStatus_1.NetworkStatus(res);
            })
            .catch(function () {
                return rxjs_1.Observable.of(new networkStatus_1.NetworkStatus(null));
            });
    };
    MembraneDaemonService.prototype.getStorageStatus = function () {
        return this.http.get('http://127.0.0.1:13200/status/storage')
            .map(function (res) {
                return res.json();
            })
            .map(function (res) {
                return new storageStatus_1.StorageStatus(res);
            })
            .catch(function () {
                return rxjs_1.Observable.of(new storageStatus_1.StorageStatus(null));
            });
    };
    MembraneDaemonService.prototype.getWatcherStatus = function () {
        return this.http.get('http://127.0.0.1:13200/status/watcher')
            .map(function (res) {
                return res.json();
            })
            .map(function (res) {
                return new watcherStatus_1.WatcherStatus(res);
            })
            .catch(function () {
                return rxjs_1.Observable.of(new watcherStatus_1.WatcherStatus(null));
            });
    };
    MembraneDaemonService.prototype.getUptime = function () {
        return this.memInfoSubject.getValue().getUptime();
    };
    return MembraneDaemonService;
}());
MembraneDaemonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MembraneDaemonService);
exports.MembraneDaemonService = MembraneDaemonService;
//# sourceMappingURL=membraned.service.js.map