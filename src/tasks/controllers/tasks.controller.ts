import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import type { CreateTaskDto } from '../dto/create-task.dto';
import type { UpdateTaskDto } from '../dto/update-task.dto';


@Controller('/tasks')
export class TasksController {

    tasksService: TasksService;

    constructor(tasksService: TasksService){
        this.tasksService = tasksService;
    }

    // http://localhost:3000/tasks?limit=2
    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query);
        return this.tasksService.getAllTasks();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createTasks(@Body() tasks: CreateTaskDto ) {
      return this.tasksService.createTasks(tasks);
    }

  // http://localhost:3000/tasks/2
  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  // http://localhost:3000/tasks?limit=2
  @Put()
  updateTasks(@Body() tasks: UpdateTaskDto ) {
    return this.tasksService.updateTasks(tasks);
  }
}
