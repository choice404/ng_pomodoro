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
    "isCompleted": false,
    "pomodoroEstimate": 1,
  };

  @Input() pomodoroCount = 0;
  // @Input() pomodorosRequired = 1;

  ngOnChanges()
  {
  }

  onClickTask()
  {
    this.pomodoroCount++;
    if(this.pomodoroCount >= this.task.pomodoroEstimate)
    {
      this.pomodoroCount = this.task.pomodoroEstimate;
      this.task.isCompleted = true;
    }
  }

}
