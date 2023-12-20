import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  isModal = false;

  tasks: any[] = [
  ]

  showModal(modal: boolean)
  {
    this.isModal = modal;
  }

  closeModal(modal: boolean)
  {
    this.isModal = modal;
  }

  addNewTask(task: any)
  {
    this.tasks.push({
      "name": task.name,
      "description": task.description,
    });
  }
}
