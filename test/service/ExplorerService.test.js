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
});