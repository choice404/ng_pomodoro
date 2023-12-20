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

    onClickExitModal(event: MouseEvent)
    {
        if(event.target === event.currentTarget)
        {
            this.emitCloseModal.emit(false);
        }
    }

    onClickAddTask()
    {
        this.emitAddTask.emit({
            "name": this.taskName,
            "description": this.taskDescription,
        });
        this.emitCloseModal.emit(false);
    }

}
