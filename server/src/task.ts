import * as mongodb from 'mongodb';

export interface Task {
    name: string;
    description: string;
    isCoplete: boolean;
    pomodoroCount: number;
    pomodoroEstimate: number;
    _id: mongodb.ObjectId;
}
