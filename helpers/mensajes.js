import colors from 'colors';
import { resolve } from 'path';
import readline from 'readline';

const mostrarMenu = () => {

    return new Promise (resolve => {
        console.clear();

        console.log('======================='.yellow);
        console.log(' Seleccione una opcion '.yellow);
        console.log('=======================\n'.yellow);
    
        console.log(`${'1'.yellow}. Crear una tarea`);
        console.log(`${'2'.yellow}. Listar tareas`);
        console.log(`${'3'.yellow}. Listar tareas completadas`);
        console.log(`${'4'.yellow}. Listar tareas pendientes`);
        console.log(`${'5'.yellow}. Completar tareas`);
        console.log(`${'6'.yellow}. Borrar la tarea`);
        console.log(`${'0'.yellow}. Salir\n`);
    
         
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question('Seleccione una opcion: ', (opt) => {
            rl.close();
            resolve(opt);
        });
    });
    
}

const pausa = () => {

    return new Promise (resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        rl.question(`\nPresione ${'Enter'.yellow} para continuar\n`, (opt) => {
            rl.close();
            resolve();
        });

    })

}

export { mostrarMenu, pausa };