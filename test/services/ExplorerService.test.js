const ExplorerService = require('../../lib/services/ExplorerService');

describe('Test Suite for class ExplorerService', ()=>{

    test('1.- Method getExplorers, pass param path, null and undefined(get with defaul path)',()=>{
        let [success,all_explorers] = ExplorerService.getExplorers(null);
        expect(success).toBe(true);
        expect(all_explorers).not.toBeUndefined();

        [success,all_explorers] = ExplorerService.getExplorers();
        expect(success).toBe(false);
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

    test('5.- Method getAmountOfExplorersByMission, pass args null and undefined', ()=>{

        let result = ExplorerService.getAmountOfExplorersByMission();

        expect(result).toBe(0);

        const all_explorers = ExplorerService.getExplorers();

        result = ExplorerService.getAmountOfExplorersByMission(all_explorers);
        
        expect(result).toBe(0);        
    }); 

    test('6.- Method getAmountOfExplorersByMission, pass params OK', ()=>{

        const all_explorers = [
            {
                "githubUsername" : "ajolonauta2",
                "mission"        : "java",
            },
            {
                "githubUsername" : "ajolonauta1",
                "mission"        : "node",
            },
            {
                "githubUsername" : "ajolonauta1",
                "mission"        : "node",
            }
        ];

        let result = ExplorerService.getAmountOfExplorersByMission(all_explorers, 'unknow');
        expect(result).toBe(0);

        result = ExplorerService.getAmountOfExplorersByMission(all_explorers, 'java');
        expect(result).toBe(1);

        result = ExplorerService.getAmountOfExplorersByMission(all_explorers, 'node');
        expect(result).toBe(2);
    });

    test('7.- Method getExplorersUsernamesByMission, pass args null and undefined', ()=>{

        let result = ExplorerService.getExplorersUsernamesByMission();
        expect(result).toEqual([]);

        result = ExplorerService.getExplorersUsernamesByMission(null, undefined);
        expect(result).toEqual(result);
    });

    test('8.- Method getExplorersUsernamesByMission, pass params OK',()=>{
        let all_explorers = [
            {
                "githubUsername" : "ajolonauta1",
                "mission"        : "java",
                "name"           : "Woopa1",
            },
            {
                "githubUsername" : "ajolonauta2",
                "mission"        : "node",
                "name"           : "Woopa2",
            },
            {
                "githubUsername" : "ajolonauta3",
                "mission"        : "java",
                "name"           : "Woopa3",
            }
        ];

        let result = ExplorerService.getExplorersUsernamesByMission(all_explorers, 'node');
        expect(result.length).toBe(1);
        expect(result).toContain('Woopa2');

        result = ExplorerService.getExplorersUsernamesByMission(all_explorers, 'java');
        expect(result.length).toBe(2);
        expect(result).toContain('Woopa1');
        expect(result).toContain('Woopa3');
    });
});