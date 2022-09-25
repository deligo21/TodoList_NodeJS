import colors from 'colors';
import { mostrarMenu, pausa } from './helpers/mensajes.js';

console.clear();

const main = async() => {
    console.log('Hola Mundo');

    let opt = '';

    do {
        opt = await mostrarMenu();
        console.log({opt});
        
        if (opt !== '0') {
            await pausa();
        }
        
    } while (opt !== '0');


    // pausa();
}

main();