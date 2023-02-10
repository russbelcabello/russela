import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Console } from 'console';
import {TareaDto} from  './dto/tarea.dto'
import {TareaService} from './tarea.service'
import {Tarea} from './interfaces/tarea.interface'

@Controller('tarea')
export class TareaController {

    constructor(private ts:TareaService){}
    /*
    @Get()
    Gettask():{Hola:String}{
        return {"Hola":"Mundo"};
    }   
    */ 
    @Get()
    Gettask():Tarea[]{
        return this.ts.findAll();
    }


    @Get(':id')
    findOne(@Param('id') id:string) {
        return this.ts.findOne(parseInt(id)); 
    }
  


    @Delete(':id')
    EliminarTask(@Param('id') id):string{
        return 'Eliminando tarea $(id)';
    }
    @Post()
    CrearTarea(@Body() objTarea:TareaDto):string{
        console.log(objTarea.titulo); 
        console.log(objTarea.descripcion);               
        console.log(objTarea.hecho);        
        return 'creando tarea'
    }
}
