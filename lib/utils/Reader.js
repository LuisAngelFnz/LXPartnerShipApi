
class Reader{

    static readJsonFile(path){

        if ([undefined,null].includes(path) || typeof path != 'string'){
            return [false,'Ruta invalida'];
        }
    }
}

module.exports = Reader

