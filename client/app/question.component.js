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
var task_service_1 = require("./tasks/services/task.service");
var QuestionComponent = (function () {
    function QuestionComponent(questionService) {
        var _this = this;
        this.questionService = questionService;
        this.questionService.getquestions()
            .subscribe(function (questions) {
            _this.qs = questions;
        });
        this.questionService.getranks()
            .subscribe(function (ranks) {
            _this.ls = ranks;
            _this.curIndex = 1;
            for (var i = 0; i < 3; i++) {
                var b = true;
                for (var j = 0; j < 3; j++) {
                    if (_this.ls[_this.curIndex].finished[j] == (i + 1))
                        b = false;
                }
                if (b) {
                    _this.curr = _this.qs[i].answer;
                    _this.curPos = _this.qs[i].number;
                    _this.curQues = _this.qs[i].content;
                    break;
                }
            }
            console.log(_this.curQues);
            var submit = document.getElementById('submit');
            var answer = document.getElementById('answer').value;
            var question = _this.curr;
            var changeRite = function (val) {
                this.rite = val;
            };
            function correct() {
                answer = document.getElementById('answer').value;
                if (answer == question)
                    return true;
                else
                    return false;
            }
            submit.addEventListener('click', function () {
                if (correct())
                    document.getElementById('star').innerHTML = "Your answer is right :) Move on to the next question";
                else
                    document.getElementById('star').innerHTML = "Your answer is wrong :( Try again or try the other questions";
            });
        });
    }
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'questions',
        styleUrls: ['styles.css'],
        templateUrl: 'question.component.html',
        providers: [task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], QuestionComponent);
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map