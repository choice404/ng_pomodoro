import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './interfaces/task'
import { TaskService } from './services/task.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  completeTasks: Task[] = [];
  incompleteTasks: Task[] = [];
  isZenMode: boolean = false;

  title = 'ng_pomodoro';

  tasks$: Observable<Task[]> = new Observable();

  old_tasks: any[] = []
  old_tasks_done: any[] = []

  constructor
  (
    private tasksService: TaskService
  ) {}

  ngOnInit(): void
  {
    this.fetchTasks();
  }

  toggleZenMode(): void
  {
    this.isZenMode = !this.isZenMode;
  }

  addNewTask(task: any): void
  {
    this.old_tasks.push({
      "name": task.name,
      "description": task.description,
      "isComplete": false,
      "pomodoroCount": 0,
      "pomodoroEstimate": task.pomodoroEstimate,
    });
  }

  increaseOldActivePomodoroCount(): void
  {
    if(this.old_tasks.length < 1)
    {
      return;
    }
    if(this.old_tasks[0].isComplete)
    {
      return;
    }
    this.old_tasks[0].pomodoroCount++;
    if(this.old_tasks[0].pomodoroCount >= this.old_tasks[0].pomodoroEstimate)
    {
      this.old_tasks[0].pomodoroCount = this.old_tasks[0].pomodoroEstimate;
      this.old_tasks[0].isComplete = true;
      let old_active = this.old_tasks.shift();
      this.old_tasks_done.push(old_active);
    }
  }

  increaseCurrentPomodoroCount(): void
  {
    this.increasePomodoroCount(this.incompleteTasks[0]);
    if(this.incompleteTasks[0].pomodoroCount >= this.incompleteTasks[0].pomodoroEstimate)
    {
      this.incompleteTasks[0].pomodoroCount = this.incompleteTasks[0].pomodoroEstimate;
      this.incompleteTasks[0].isComplete = true;
    }
    this.tasksService.updateTask(this.incompleteTasks[0]._id, this.incompleteTasks[0]).subscribe({
      next: () => this.fetchTasks(),
    });
  }

  setTaskComplete(task: Task): void
  {
    task.isComplete = true;
    this.tasksService.updateTask(task._id, task).subscribe({
      next: () => this.fetchTasks(),
    });
  }

  increasePomodoroCount(task: Task): void
  {
    task.pomodoroCount++;
    if(task.pomodoroCount >= task.pomodoroEstimate)
    {
      task.pomodoroCount = task.pomodoroEstimate;
      task.isComplete = true;
    }
  }

  deleteTask(id: string): void
  {
    this.tasksService.deleteTask(id).subscribe({
      next: () => this.fetchTasks(),
    });
  }

  private fetchTasks(): void
  {
    this.tasks$ = this.tasksService.getTasks();
    this.tasksService.getTasks()
      .subscribe((tasks: Task[]) =>
        {
          this.completeTasks = tasks.filter((task: Task) => task.isComplete);
          this.incompleteTasks = tasks.filter((task: Task) => !task.isComplete);
        }
      );
  }

}
