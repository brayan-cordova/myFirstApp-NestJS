import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

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

  createTask(task: CreateTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask(task: UpdateTaskDto) {
    console.log(task);
    return 'Creating Tasks';
  }

  updateTaskStatus() {
    return 'Updating the status of a Task';
  }

  deleteTask() {
    return 'Deleting Tasks';
  }
}
