const ExplorerController = require('../../lib/controllers/ExplorerController');

describe('Test suit for class ExplorerController',() => {
    test('1.- Method getExplorersByMission, pass param mission null and undefined', () => {
        let result = ExplorerController.getExplorersByMission(null);
        expect(result).toEqual([]);

        result = ExplorerController.getExplorersByMission(undefined);
        expect(result).toEqual([]);
    });  
});