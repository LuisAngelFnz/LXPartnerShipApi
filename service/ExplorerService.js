const Reader = require('../lib/utils/Reader');

class ExplorerService{
    static getExplorers(path){
        if([undefined,null].includes(path)){
            path = 'explorers.json'
        }
        return Reader.readJsonFile(path);
    }
}

module.exports = ExplorerService;