import { Component } from '@angular/core';
import{ TaskService } from './tasks/services/task.service'

@Component({
  moduleId: module.id,
  selector: 'mapp',
  styleUrls: ['styles.css'],
  templateUrl: 'mapp.component.html',
  providers: [TaskService]
})

export class MappComponent { }
