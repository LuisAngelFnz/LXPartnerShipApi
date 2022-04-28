const fs = require("fs");

class Reader{

    static readJsonFile(path){

        if ([undefined,null].includes(path) || typeof path != 'string'){
            return [false,'Ruta invalida'];
        }
        
        if (! fs.existsSync(path)) {
          return [false, 'Ruta no encontrada'];
        }

        if(fs.lstatSync(path).isDirectory()){
           return [false, 'Ruta no es archivo'] 
        }
    }
}

module.exports = Reader

