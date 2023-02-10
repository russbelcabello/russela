import { Injectable } from '@nestjs/common';
import{Tarea} from './interfaces/tarea.interface'
@Injectable()
export class TareaService {

// Usa interfaces donde se declaran las variables 
//Inicializamos
//private readonly tarea: Tarea[] = [];

private readonly tarea: Tarea[] = [
    { 
        id:1,
        titulo:"string",
        descripcion:"string",
        hecho:true
    },
    { 
        id:2,
        titulo:"string",
        descripcion:"string",
        hecho:true
    },
    { 
        id:3,
        titulo:"string",
        descripcion:"string",
        hecho:true
    },
    { 
        id:4,
        titulo:"string",
        descripcion:"string",
        hecho:true
    }

    
        
];
 /*
    create(cat: Cat) {
        this.cats.push(cat);
    }*/

    findAll(): Tarea[] {
        return this.tarea;
    }

    findOne(id: number):Tarea {
        // esta accion retorna un numero de id tarea
        return this.tarea.find(tarea=>tarea.id==id);  
      }
    



}



