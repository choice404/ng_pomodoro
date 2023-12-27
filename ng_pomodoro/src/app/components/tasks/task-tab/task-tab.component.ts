import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../interfaces/task'

@Component({
  selector: 'app-task-tab',
  templateUrl: './task-tab.component.html',
  styleUrls: ['./task-tab.component.scss']
})
export class TaskTabComponent {
  @Input() task: Task = {
    "name": "",
    "description": "",
    "isComplete": false,
    "pomodoroCount": 0,
    "pomodoroEstimate": 1,
    "_id": "",
  };
}
