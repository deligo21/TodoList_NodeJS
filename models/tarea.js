import { v4 as uuidv4 } from 'uuid';
// import { customAlphabet } from 'nanoid';
// const nanoid = customAlphabet('ABCDEF1234567890abcdefghijklmnopqrstuvwxyz', 46); // Otra opcion para IDs
// import { nanoid } from 'nanoid'

class Tarea {

    constructor( desc){
        this.id = uuidv4();
        // this.id = nanoid();
        this.desc = desc;
        this.completadoEn = null;
    }
}

export { Tarea};