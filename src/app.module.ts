import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TareaController } from './tarea/tarea.controller';
import { TareaService } from './tarea/tarea.service';
import { TareaModule } from './tarea/tarea.module';
import { TaskModule } from './task/task.module'; 
import { ConfigModule, ConfigService } from '@nestjs/config';  
import { Firebase } from './firebase/firebase';
import { TestModule } from './test/test.module';


@Module({
  imports: [
    ConfigModule.forRoot(
      {
        envFilePath: '.dev.env',
        isGlobal: true
      }
    ),
    TareaModule,TaskModule, TestModule], 
  controllers: [AppController, TaskController, TareaController],
  providers: [AppService, TareaService, Firebase],
})
export class AppModule {
  static port: number;
constructor(private readonly cs:ConfigService){ 
  AppModule.port=this.cs.get('env_port')
}


}
