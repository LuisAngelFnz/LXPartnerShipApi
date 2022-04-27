
class Reader{

    static readJsonFile(path){

        if ([undefined,null].includes(path)){
            return [false,'Ruta invalida'];
        }
    }
}

module.exports = Reader

