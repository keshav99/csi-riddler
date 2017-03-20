import { Component } from '@angular/core';
import{ TaskService } from './tasks/services/task.service';
import { Tasks } from '../Task';

@Component({
  moduleId: module.id,
  selector: 'mapp',
  styleUrls: ['styles.css'],
  templateUrl: 'mapp.component.html',
  providers: [TaskService]
})

export class MappComponent {
  names: Tasks[];
  curName: any;
  constructor(private taskService: TaskService){
      this.taskService.getTasks()
        .subscribe(ranks =>{
          this.names= ranks;
          this.curName= this.names[0].name;
          document.getElementById("poker").innerHTML= this.curName;
        });

  }
}
