import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() task: any) {
    return this.tasksService.createTask(task);
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
