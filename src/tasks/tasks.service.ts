import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';

// create an object
export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TasksService {
  private tasks = [];
  getTasks() {
    // return ['Task 1', 'Task 2', 'Task 3'];
    // return 'Hello World!!';
    // return 20.3;
    // return [10, 33, 20];
    // return {
    //   name: 'Jhon Doe',
    //   age: 40,
    // };
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`Task with id ${id} not found`);
    }

    return taskFound;
  }

  createTask(task: any) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
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
