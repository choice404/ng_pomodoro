import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  @Output() emitPomodoroComplete = new EventEmitter<void>();

  minutes: number = 0;
  seconds: number = 0;
  minutesDisplay: string = "25";
  secondsDisplay: string = "00";
  timer: string = "pomodoro";
  isTimerRunning: boolean = false;
  buttonLabel: string = "Start";
  pomodoroCount: number = 0;
  interval: any;

  selectPomodoro()
  {
    if(this.isTimerRunning)
    {
      alert("Timer is currently running!");
      return;
    }
    this.timer = "pomodoro";
    this.minutes = 25;
    this.seconds = 0;
    this.minutesDisplay = this.displayTimer(this.minutes);
    this.secondsDisplay = this.displayTimer(this.seconds);
  }

  selectShortBreak()
  {
    if(this.isTimerRunning)
    {
      alert("Timer is currently running!");
      return;
    }
    this.timer = "shortBreak";
    this.minutes = 5;
    this.seconds = 0;
    this.minutesDisplay = this.displayTimer(this.minutes);
    this.secondsDisplay = this.displayTimer(this.seconds);
  }

  selectLongBreak()
  {
    if(this.isTimerRunning)
    {
      alert("Timer is currently running!");
      return;
    }
    this.timer = "longBreak";
    this.minutes = 15;
    this.seconds = 0;
    this.minutesDisplay = this.displayTimer(this.minutes);
    this.secondsDisplay = this.displayTimer(this.seconds);
  }

  displayTimer(time: number)
  {
    return time < 10 ? "0" + time: time.toString();
  }

  handleTimer()
  {
    if(this.buttonLabel === "Start")
    {
      this.startTimer();
      this.buttonLabel = "Pause";
    }
    else if(this.buttonLabel === "Pause")
    {
      this.pauseTimer();
      this.buttonLabel = "Start";
    }
  }

  resetTimer()
  {
    if(this.isTimerRunning)
    {
      alert("Timer is currently running!");
      return;
    }

    if(this.timer === "pomodoro")
    {
      this.minutes = 25;
      this.seconds = 0;
      this.minutesDisplay = this.displayTimer(this.minutes);
      this.secondsDisplay = this.displayTimer(this.seconds);
    }
    else if(this.timer === "shortBreak")
    {
      this.minutes = 5;
      this.seconds = 0;
      this.minutesDisplay = this.displayTimer(this.minutes);
      this.secondsDisplay = this.displayTimer(this.seconds);
    }
    else if(this.timer === "longBreak")
    {
      this.minutes = 15;
      this.seconds = 0;
      this.minutesDisplay = this.displayTimer(this.minutes);
      this.secondsDisplay = this.displayTimer(this.seconds);
    }
  }

  pauseTimer()
  {
    this.isTimerRunning = false;
    clearInterval(this.interval);
  }

  startTimer()
  {
    let minutes = parseInt(this.minutesDisplay);
    let seconds = parseInt(this.secondsDisplay);
    let totalSeconds = minutes * 60 + seconds;

    console.log("Total seconds: " + totalSeconds);
    console.log("Minutes: " + minutes);
    console.log("Seconds: " + seconds);

    this.isTimerRunning = true;

    const timer = () =>
    {
      totalSeconds--;
      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      this.minutesDisplay = this.displayTimer(minutesLeft);
      this.secondsDisplay = this.displayTimer(secondsLeft);
      if(minutesLeft <= 0 && secondsLeft <= 0)
      {
        this.isTimerRunning = false;
        clearInterval(this.interval);
        alert("Timer is done!");
        if(this.timer === "pomodoro")
        {
          this.pomodoroCount++;
          this.emitPomodoroComplete.emit();
          if(this.pomodoroCount === 4)
          {
            this.pomodoroCount = 0;
            this.selectLongBreak();
          }
          else
          {
            this.selectShortBreak();
          }
        }
        else if(this.timer === "shortBreak")
        {
          this.selectPomodoro();
        }
        else if(this.timer === "longBreak")
        {
          this.selectPomodoro();
          this.pomodoroCount = 0;
        }
      }
    }
    this.interval = setInterval(timer, 1000);
  }

  testClick(): void
  {
    this.emitPomodoroComplete.emit();
  }
}
