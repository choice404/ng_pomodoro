import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  @Output() newTaskEvent = new EventEmitter<boolean>();

  addNewTask()
  {
    this.newTaskEvent.emit(true);
  }
}
