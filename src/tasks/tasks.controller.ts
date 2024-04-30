import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  //swagger
  @ApiOperation({ summary: 'Get All tasks' })
  @ApiResponse({ status: 200, description: 'Return All tasks' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }

  @Get('/:id') // /tasks/:id
  @ApiOperation({ summary: 'Get One task by ID' })
  getTask(@Param('id') id: string) {
    console.log(id);
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a task' })
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  // Put is an update of the entire object.
  @Put()
  @ApiOperation({ summary: 'Update a task entirely' })
  updateTask(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  // Patch is a partial update.
  @Patch()
  @ApiOperation({ summary: 'Update a task partially' })
  updateTaskStatus() {
    return this.tasksService.updateTaskStatus();
  }

  @Delete()
  @ApiOperation({ summary: 'Delete a task' })
  deleteTask() {
    return this.tasksService.deleteTask();
  }
}
