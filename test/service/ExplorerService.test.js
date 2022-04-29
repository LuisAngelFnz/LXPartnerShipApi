const ExplorerService = require('../../service/ExplorerService');

describe('Test Suite for class ExplorerService', ()=>{

    test('1.- Method getExplorers, pass param path, null and undefined(get with defaul path)',()=>{
        let [success,all_explorers] = ExplorerService.getExplorers(null);
        expect(success).toBe(true);
        expect(all_explorers).not.toBeUndefined();

        [success,all_explorers] = ExplorerService.getExplorers();
        expect(success).toBe(true);
        expect(all_explorers).not.toBeUndefined();
    });

    test('2.- Method getExplorers, with custom path', ()=>{
        let path = `/tmp/${new Date().valueOf()}`
        let [success,all_explorers] = ExplorerService.getExplorers(path);

        expect(success).toBe(false);
        expect(all_explorers).toBe('Ruta no encontrada');

        path = 'explorers.json';
        [success,all_explorers] = ExplorerService.getExplorers(path);
        expect(success).toBe(true);
        expect(all_explorers).not.toBeUndefined();
    });

    test('3.- Method filterByMission, pass args null and undefined',()=>{

        let result = ExplorerService.filterByMission(null, null);
        expect(result).not.toBeUndefined();

        result = ExplorerService.filterByMission();
        expect(result).not.toBeUndefined();
        expect(result).toEqual([]);
    });

    test('4.- Method filterByMission, filter explorers', ()=>{

        const all_explorers = [
            {
                "githubUsername" : "ajolonauta2",
                "mission"        : "java",
            },
            {
                "githubUsername" : "ajolonauta1",
                "mission"        : "node",
            }
        ]

        let result = ExplorerService.filterByMission(all_explorers, 'node');

        expect(result.length).toBe(1);
        expect(result[0].mission).toBe('node');
    });
});