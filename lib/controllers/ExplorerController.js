const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService');

class ExplorerController{
    static getExplorersByMission(mission){
        const all_explorers = ExplorerService.getExplorers();
        return ExplorerService.filterByMission(all_explorers, mission)
    }

    static getExplorersAmonutByMission(mission){
        const all_explorers = ExplorerService.getExplorers();
        return ExplorerService.getAmountOfExplorersByMission(all_explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const all_explorers = ExplorerService.getExplorers();
        return ExplorerService.getExplorersUsernamesByMission(all_explorers, mission);
    }

    static applyScoreValidationInNumber(score){
        return FizzbuzzService.applyValidationInNumber(score);
    }

    static telegramScoreValidationInNumber(){
        
    }
}

module.exports = ExplorerController;