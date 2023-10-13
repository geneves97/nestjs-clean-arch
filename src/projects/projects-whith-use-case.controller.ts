import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateProjectUseCase } from './use-cases/create-project.usecase';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';

@Controller('projects')
export class ProjectsWhithUseCaseController {
  constructor(
    @InjectRepository(Project)
    private readonly createProjectsUseCase: CreateProjectUseCase) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.createProjectsUseCase.execute(createProjectDto);
  }

  // @Get()
  // findAll() {
  //   return this.projectsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.projectsService.findOne(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
  //   return this.projectsService.update(id, updateProjectDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.projectsService.remove(id);
  // }
}
