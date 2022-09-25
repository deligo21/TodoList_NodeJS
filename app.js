import colors from 'colors';
import { inquirerMenu, inquirerPausa, leerInput } from './helpers/inquirer.js';
// import { mostrarMenu, pausa } from './helpers/mensajes.js';
import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';

console.clear();

const main = async() => {

    let opt = '';
    
    const tareas = new Tareas();
    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case 1:
                const descripcion = await leerInput('Descripcion de la tarea: ');
                tareas.crearTarea(descripcion);
                console.log('Tarea creada exitosamente');
                break;
            case 2:
                console.log(tareas.listadoArr);
                break;
            case 1:
                
                break;
        
            default:
                break;
        }

        if (opt !== 0) {
            await inquirerPausa();
        }
        
    } while (opt !== 0);


    // pausa();
}

main();