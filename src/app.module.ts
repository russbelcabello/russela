import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TareaController } from './tarea/tarea.controller';
import { TareaService } from './tarea/tarea.service';
import { TareaModule } from './tarea/tarea.module';
import { TaskModule } from './task/task.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [TareaModule, TaskModule, UsuarioModule], 
  controllers: [AppController, TaskController, TareaController],
  providers: [AppService, TareaService],
})
export class AppModule {}
