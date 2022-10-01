import { v4 as uuidv4 } from 'uuid';
import { Tarea } from './tarea.js';
import colors from 'colors';

class Tareas {

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    borrarTarea(id = ''){

        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){

        console.log();
        
        this.listadoArr.forEach(({ desc, completadoEn}, i) => {
            let completado = false;
            let idx = `${i + 1}.`.yellow;

            if (completadoEn) {
                console.log(`${idx} ${desc} :: ${'Completada'.green}`);
                
            } else {
                console.log(`${idx} ${desc} :: ${'Pendiente'.red}`);
            }


        });
    }

    listarTareasCompletadas(completadas = true){
        console.log();
        let indice = 0;
        
        this.listadoArr.forEach(({ desc, completadoEn}) => {
            
            if (completadas){
                if (completadoEn) {
                    indice += 1;
                    console.log(`${(indice + '.').yellow} ${desc} :: ${completadoEn.green}`);       
                }
            }
            else{
                if (!completadoEn) {
                    indice += 1;
                    console.log(`${(indice + '.').yellow} ${desc} :: ${'Pendiente'.red}`);       
                }
            }


        });
    }

    toggleCompletadas (ids = []){
        
        ids.forEach (id => {
           const tarea = this._listado[id];

           if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
           }

        });

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null;
                
            }
        })
    }
}

export { Tareas};