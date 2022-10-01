import {  writeFileSync } from 'fs';
import fs from 'fs';


const archivo = './db/data.json'

const guardarDB = (data) => {
    
    writeFileSync(archivo,JSON.stringify(data) , (err) => {
        if (err) throw err;
    });
}

const leerDB = () => {
    if(!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);

    return data;
}

export { guardarDB, leerDB};