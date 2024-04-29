import { Injectable } from '@nestjs/common';

// create an object
export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  getTasks(): User {
    // return ['Task 1', 'Task 2', 'Task 3'];
    // return 'Hello World!!';
    // return 20.3;
    // return [10, 33, 20];
    return {
      name: 'Jhon Doe',
      age: 40,
    };
  }

  createTask() {
    return 'Creating Tasks';
  }

  updateTask() {
    return 'Creating Tasks';
  }

  updateTaskStatus() {
    return 'Updating the status of a Task';
  }

  deleteTask() {
    return 'Deleting Tasks';
  }
}
