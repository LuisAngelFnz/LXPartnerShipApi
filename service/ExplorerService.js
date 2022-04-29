const Reader = require('../lib/utils/Reader');

class ExplorerService{
    static getExplorers(path){
        if([undefined,null].includes(path)){
            path = 'explorers.json'
        }
        return Reader.readJsonFile(path);
    }

    static explorersInNode(all_explorers){
        if([undefined,null].includes(all_explorers)) return [];        
    }
}

module.exports = ExplorerService;