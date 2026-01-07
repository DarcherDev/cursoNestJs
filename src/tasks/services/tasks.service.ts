import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    getAllTasks() {
        return ['task 1','task 2','task 3']
    }
}
