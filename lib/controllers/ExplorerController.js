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

    static telegramScoreValidationInNumber(param_number){
        
        param_number = parseInt(param_number);

        if(isNaN(param_number)) return 'Envía un número válido';

        return `Tu número es: ${param_number}. Validación: ${this.applyScoreValidationInNumber(param_number)}`
    }
}

module.exports = ExplorerController;