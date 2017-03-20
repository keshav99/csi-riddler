import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {MappComponent} from './mapp.component';
import {TaskComponent} from './tasks/task.component';
import {LeaderComponent} from './tasks/leader.component';
import {QuestionComponent} from './question.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [MappComponent, TaskComponent, LeaderComponent, QuestionComponent],
  bootstrap: [MappComponent, TaskComponent, LeaderComponent, QuestionComponent]
})
export class MappModule { }
