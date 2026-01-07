import { Module } from '@nestjs/common';
import { ProjectsController } from './controller/projects.controller';

@Module({
  controllers: [ProjectsController]
})
export class ProjectsModule {}
