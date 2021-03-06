"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var mapp_component_1 = require("./mapp.component");
var task_component_1 = require("./tasks/task.component");
var leader_component_1 = require("./tasks/leader.component");
var question_component_1 = require("./question.component");
var MappModule = (function () {
    function MappModule() {
    }
    return MappModule;
}());
MappModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule],
        declarations: [mapp_component_1.MappComponent, task_component_1.TaskComponent, leader_component_1.LeaderComponent, question_component_1.QuestionComponent],
        bootstrap: [mapp_component_1.MappComponent, task_component_1.TaskComponent, leader_component_1.LeaderComponent, question_component_1.QuestionComponent]
    })
], MappModule);
exports.MappModule = MappModule;
//# sourceMappingURL=mapp.module.js.map