import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent {

  @Output() emitCloseModal = new EventEmitter<boolean>
  @Output() emitAddTask = new EventEmitter<any>();

  taskName: string = "";
  taskDescription: string = "";
  pomodoroEstimate: number = 1;
  error: boolean = false;
  errorMessage: string = "";

  onClickExitModal(event: MouseEvent)
  {
    if(event.target === event.currentTarget)
    {
        this.emitCloseModal.emit(false);
    }
  }

  onClickAddTask()
  {
    if(this.taskName === "")
    {
      this.logError("Please enter a task name");
      return;
    }
    this.emitAddTask.emit({
        "name": this.taskName,
        "description": this.taskDescription,
        "pomodoroEstimate": this.pomodoroEstimate,
    });
    this.emitCloseModal.emit(false);
  }

  logError(message: string)
  {
    console.log(message);
    this.errorMessage = message;
    this.error = true;
  }

}
