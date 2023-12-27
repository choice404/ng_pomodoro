import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../../interfaces/task'
import { TaskService } from '../../../services/task.service'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  isModal = false;

  @Input() completeTasks: Task[] = [];
  @Input() incompleteTasks: Task[] = [];
  @Input() old_tasks: any[] = []
  @Input() old_tasks_done: any[] = []

  @Output() emitAddTask = new EventEmitter<any>();

  showModal(modal: boolean): void
  {
    this.isModal = modal;
  }

  closeModal(modal: boolean): void
  {
    this.isModal = modal;
  }

  addNewTask(task: any): void
  {
    this.emitAddTask.emit(task);
  }
}
