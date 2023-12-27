import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './components/core/text/text.component';
import { TimerComponent } from './components/pomodoro/timer/timer.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { NewTaskComponent } from './components/tasks/new-task/new-task.component';
import { PageComponent } from './components/core/page/page.component';
import { TaskTabComponent } from './components/tasks/task-tab/task-tab.component';
import { TaskModalComponent } from './components/tasks/task-modal/task-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    TimerComponent,
    TaskComponent,
    NewTaskComponent,
    PageComponent,
    TaskTabComponent,
    TaskModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
