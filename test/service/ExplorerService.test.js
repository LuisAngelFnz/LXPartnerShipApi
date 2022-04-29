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
});