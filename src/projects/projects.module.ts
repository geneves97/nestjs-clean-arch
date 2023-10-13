import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { ProjectsWhithUseCaseController } from './projects-whith-use-case.controller';
import { CreateProjectUseCase } from './use-cases/create-project.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [
    //ProjectsController,
    ProjectsWhithUseCaseController,
  ],

  providers: [ProjectsService, CreateProjectUseCase],
})
export class ProjectsModule {}
