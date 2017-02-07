/**
 * Created by dominic on 06/02/17.
 */
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
var membraned_service_1 = require("../../service/membaned/membraned.service");
var OverviewComponent = (function () {
    function OverviewComponent(membraneDaemonService) {
        var _this = this;
        this.membraneDaemonService = membraneDaemonService;
        this.title = 'Overview Screen';
        this.date = new Date();
        setInterval(function () {
            _this.date = new Date();
            _this.membraneDaemonService.getInfo();
        }, 1000);
        this.membraneDaemonService.getInfoStream().subscribe(function (data) { return _this.info = data; }, function (error) { return console.error(error); }, function () { return console.log("Retrieved Info Successfully"); });
    }
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'main-component',
        templateUrl: 'overview.component.html',
    }),
    __metadata("design:paramtypes", [membraned_service_1.MembraneDaemonService])
], OverviewComponent);
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map