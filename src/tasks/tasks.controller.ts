import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask() {
    return this.tasksService.createTask();
  }

  // Put is an update of the entire object.
  @Put()
  updateTask() {
    return this.tasksService.updateTask();
  }

  // Patch is a partial update.
  @Patch()
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }
}
