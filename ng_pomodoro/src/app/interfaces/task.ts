export interface Task {
  name: string;
  description?: string;
  isComplete: boolean;
  pomodoroCount: number;
  pomodoroEstimate: number;
  _id: string;
}
