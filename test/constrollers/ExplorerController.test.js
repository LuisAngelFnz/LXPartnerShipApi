const ExplorerController = require('../../lib/controllers/ExplorerController');

describe('Test suit for class ExplorerController',() => {
    test('1.- Method getExplorersByMission, pass param mission null and undefined', () => {
        let result = ExplorerController.getExplorersByMission(null);
        expect(result).toEqual([]);

        result = ExplorerController.getExplorersByMission(undefined);
        expect(result).toEqual([]);
    });

    test('2.- Method getExplorersByMission, pass params OK', () => {
        const all_explorers = [
            {
                "githubUsername" : "ajolonauta2",
                "mission"        : "java",
            },
            {
                "githubUsername" : "ajolonauta1",
                "mission"        : "node",
            }
        ];

        let result = ExplorerController.getExplorersByMission(all_explorers, 'node');
        expect(result.length).toBe(1);
        expect(result[0].mission).toBe('node');
    });
});