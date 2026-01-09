import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TasksController } from './controllers/tasks.controller';
import { TasksService } from './services/tasks.service';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {

    //consumo de rutas para rutas expecificas
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        {
          path: 'tasks',
          method: RequestMethod.GET,
        },
        {
          path: 'tasks',
          method: RequestMethod.POST,
        }
      )
      .apply(AuthMiddleware).forRoutes('tasks') //consumo para todas las rutas del modulo
  }
}
