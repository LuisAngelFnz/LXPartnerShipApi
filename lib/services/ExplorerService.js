const Reader  = require('../utils/Reader');
const Inspect = require('../utils/Inspect');

class ExplorerService{

    static getExplorers(path){
        if(Inspect.badParam(path)){
            path = 'explorers.json'
        }
        let [success, explorers] = Reader.readJsonFile(path);
        if(! success){
            console.log(`Error in get explorers, error: ${explorers}`)
            console.log('Init explorers with []');
            explorers = [];
        }
        return explorers;
    }

    static filterByMission(all_explorers, mission){
        if(Inspect.badParam(all_explorers) || Inspect.badParam(mission)){
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