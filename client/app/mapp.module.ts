import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {MappComponent} from './mapp.component';
import {TaskComponent} from './tasks/task.component';
import {LeaderComponent} from './tasks/leader.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [MappComponent, TaskComponent, LeaderComponent],
  bootstrap: [MappComponent, TaskComponent, LeaderComponent]
})
export class MappModule { }
