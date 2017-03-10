import { Component } from '@angular/core';
import{ TaskService } from './services/task.service';
import { Tasks } from '../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl:'task.component.html',
  providers: [TaskService]
})

export class TaskComponent {
  tasks: Tasks[];
  constructor(private taskService: TaskService){
      this.taskService.getTasks()
        .subscribe(tasks =>{
          this.tasks= tasks;
        });
  }
 }
