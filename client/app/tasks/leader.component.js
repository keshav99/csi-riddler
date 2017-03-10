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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_service_1 = require("./services/task.service");
var LeaderComponent = (function () {
    function LeaderComponent(leaderService) {
        var _this = this;
        this.leaderService = leaderService;
        this.leaderService.getranks()
            .subscribe(function (ranks) {
            _this.leaders = ranks;
        });
    }
    return LeaderComponent;
}());
LeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'leaders',
        templateUrl: 'leader.component.html',
        providers: [task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], LeaderComponent);
exports.LeaderComponent = LeaderComponent;
//# sourceMappingURL=leader.component.js.map