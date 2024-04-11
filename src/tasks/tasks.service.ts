import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return ['Task 1', 'Task 2', 'Task 3'];
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
