import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-tab',
  templateUrl: './task-tab.component.html',
  styleUrls: ['./task-tab.component.scss']
})
export class TaskTabComponent {
  @Input() task = {
    "name": "",
    "description": "",
  };

}
