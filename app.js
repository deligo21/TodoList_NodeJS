import colors from 'colors';
import { mostrarMenu, pausa } from './helpers/mensajes.js';

console.clear();

const main = async() => {
    console.log('Hola Mundo');

    mostrarMenu();

    pausa();
}

main();