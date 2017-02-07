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
var MembraneDaemonService = (function () {
    function MembraneDaemonService(http) {
        var _this = this;
        this.http = http;
        this.memInfoStream = rxjs_1.Observable.interval(2000)
            .switchMap(function () { return _this.getInfo(); });
    }
    MembraneDaemonService.prototype.getInfo = function () {
        return this.http.get('http://127.0.01:13200/')
            .map(function (res) { return res.json(); })
            .map(function (res) { return new membranedInfo_1.MembraneInfo(res); })
            .catch(function () { return rxjs_1.Observable.of(new membranedInfo_1.MembraneInfo(null)); });
    };
    MembraneDaemonService.prototype.getInfoStream = function () {
        return this.memInfoStream;
    };
    return MembraneDaemonService;
}());
MembraneDaemonService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MembraneDaemonService);
exports.MembraneDaemonService = MembraneDaemonService;
//# sourceMappingURL=membraned.service.js.map