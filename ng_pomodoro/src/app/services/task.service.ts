import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = 'http://localhost:5200';
  private tasks$: Subject<Task[]> = new Subject();

  constructor(private http: HttpClient) { }

  private refreshTasks(): void
  {
    this.http.get<Task[]>(`${this.url}/tasks`)
      .subscribe(tasks =>
      {
        this.tasks$.next(tasks);
      });
  }

  getTasks(): Subject<Task[]>
  {
    this.refreshTasks();
    return this.tasks$;
  }

  getTask(id: number): Observable<Task>
  {
    return this.http.get<Task>(`${this.url}/tasks/${id}`);
  }

  createTask(task: Task): Observable<string>
  {
    return this.http.post(`${this.url}/tasks`, task, { responseType: 'text' });
  }

  updateTask(id: string, task: Task): Observable<string>
  {
    return this.http.put(`${this.url}/tasks/${id}`, task, { responseType: 'text' });
  }

  deleteTask(id: string): Observable<string>
  {
    return this.http.delete(`${this.url}/tasks/${id}`, { responseType: 'text' });
  }
}
