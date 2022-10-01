import colors from 'colors';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { inquirerMenu, inquirerPausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } from './helpers/inquirer.js';
// import { mostrarMenu, pausa } from './helpers/mensajes.js';
import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';

console.clear();

const main = async() => {

    let opt = '';
    
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB)
    }

    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case 1:
                const descripcion = await leerInput('Descripcion de la tarea: ');
                tareas.crearTarea(descripcion);
                console.log('Tarea creada exitosamente');
                break;
            case 2:
                tareas.listadoCompleto();
                break;
            case 3:
                tareas.listarTareasCompletadas(true);
                break;
            case 4:
                tareas.listarTareasCompletadas(false);
                break;
            case 5:
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case 6:
                const id = await listadoTareasBorrar(tareas.listadoArr);

                if(id !== '0'){

                    const confirmacion = await confirmar('Estas seguro?')
                    if (confirmacion) {
                        tareas.borrarTarea( id);
                        console.log('Tarea borrada correctamente');
                    }
                    
                }
                break;
            default:
                break;
        }

        guardarDB(tareas.listadoArr);

        if (opt !== 0) {
            await inquirerPausa();
        }
        
    } while (opt !== 0);


    // pausa();
}

main();