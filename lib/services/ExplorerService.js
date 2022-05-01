const Reader = require('../utils/Reader');

class ExplorerService{

    static paramInvalid(param){
        return [undefined,null].includes(param)
    }

    static getExplorers(path){
        if(this.paramInvalid(path)){
            path = 'explorers.json'
        }
        return Reader.readJsonFile(path);
    }

    static filterByMission(all_explorers, mission){
        if(this.paramInvalid(all_explorers) || this.paramInvalid(mission)){
            return [];
        }

        return all_explorers.filter((each_explorer)=>{
            return each_explorer.mission == mission;
        });
    }

    static getAmountOfExplorersByMission(all_explorers, mission){
        return this.filterByMission(all_explorers, mission).length;
    }

    static getExplorersUsernamesByMission(all_explorers, mission){
        return this.filterByMission(all_explorers, mission).map((each_explorer)=>{
            return each_explorer.name;
        })
    }
}

module.exports = ExplorerService;