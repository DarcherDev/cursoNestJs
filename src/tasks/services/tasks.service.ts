import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import type { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TasksService {

  private tasks: any[] = [];

    getAllTasks() {
      return this.tasks
    }

    createTasks(task: CreateTaskDto) {

      this.tasks.push({
        ...task,
        id: this.tasks.length + 1,
      });
      this.tasks.push(task);
      return task
    }

  getTask(id: number) {
    const taskFound = this.tasks.find(task => task.id === id);
    if (!taskFound) {
      return new NotFoundException('Tarea no encontrada');
    }
    return taskFound
    }

  updateTasks(task: UpdateTaskDto) {
    return "actualizando tarea" + task
  }


}
