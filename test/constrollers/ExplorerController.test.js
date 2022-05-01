const ExplorerController = require('../../lib/controllers/ExplorerController');

describe('Test suit for class ExplorerController',() => {
    test('1.- Method getExplorersByMission, pass param mission null and undefined', () => {
        let result = ExplorerController.getExplorersByMission(null);
        expect(result).toEqual([]);

        result = ExplorerController.getExplorersByMission(undefined);
        expect(result).toEqual([]);
    });

    test('2.- Method getExplorersByMission, pass params OK', () => {

        const result = ExplorerController.getExplorersByMission('node');
        expect(result).not.toBeUndefined();
        if(result.length > 0){
            expect(result[0].mission).toBe('node');
        }
    });

    test('3.- Method getExplorersAmonutByMission, pass param mission null and undefined', () => {

        let result = ExplorerController.getExplorersAmonutByMission(null);
        expect(result).toStrictEqual(0);

        result = ExplorerController.getExplorersAmonutByMission(undefined);
        expect(result).toStrictEqual(0);
    });

    test('4.- Method getExplorersAmonutByMission, pass param OK', () => {
        let result = ExplorerController.getExplorersAmonutByMission('node');
        expect(result).not.toBeUndefined();
        expect(result > 0).toBe(true); //Comment if not exists explorer
    });
});