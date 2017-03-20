import { Component } from '@angular/core';
import{ TaskService } from './tasks/services/task.service';
import { Questions } from '../questions';
import { Leaders } from '../leader';

@Component({
  moduleId: module.id,
  selector: 'questions',
  styleUrls: ['./styles.css'],
  templateUrl:'question.component.html',
  providers: [TaskService]
})

export class QuestionComponent {
  qs: Questions[];
  ls: Leaders[];
  curr: any;
  curQues: any;
  curPos: any;
  curIndex: any;
  rite: any;
  currentIndex: 0;
  constructor(private questionService: TaskService){
      this.questionService.getquestions()
        .subscribe(questions =>{
          this.qs= questions;


        });

      this.questionService.getranks()
        .subscribe(ranks =>{
          this.ls= ranks;

          this.curIndex=1;
            for(var i=0; i<3; i++){
              var b= true;
              for(var j=0; j<3; j++){
                if(this.ls[this.curIndex].finished[j]==(i+1))
                b=false;

              }
              if(b){
                this.curr=this.qs[i].answer;
                this.curPos=this.qs[i].number;
                this.curQues=this.qs[i].content;
                break;
              }
            }

            console.log(this.curQues);
            var submit = document.getElementById('submit');
            var answer = document.getElementById('answer').value;
            var question=this.curr;

            var changeRite = function(val){
              this.rite=val;
            }

            function correct(){
              answer = document.getElementById('answer').value;
              if(answer==question)
              return true;
              else
              return false;
            }

            submit.addEventListener('click', function () {
              if(correct())
              document.getElementById('star').innerHTML="Your answer is right :) Move on to the next question";
              else
              document.getElementById('star').innerHTML="Your answer is wrong :( Try again or try the other questions";
            });


          });



  }


  }
