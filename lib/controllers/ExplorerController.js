const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService');

class ExplorerController{
    static getExplorersByMission(mission){
        const all_explorers = ExplorerService.getExplorers();

        return ExplorerService.filterByMission(all_explorers, mission)
    }

}

module.exports = ExplorerController;