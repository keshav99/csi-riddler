import { Component } from '@angular/core';
import{ TaskService } from './services/task.service';
import { Leaders } from '../../leader';

@Component({
  moduleId: module.id,
  selector: 'leaders',
  templateUrl:'leader.component.html',
  providers: [TaskService]
})

export class LeaderComponent {
  leaders: Leaders[];
  constructor(private leaderService: TaskService){
      this.leaderService.getranks()
        .subscribe(ranks =>{
          this.leaders= ranks;
        });
  }
 }
