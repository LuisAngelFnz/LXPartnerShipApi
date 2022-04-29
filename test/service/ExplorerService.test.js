const ExplorerService = require('../../service/ExplorerService');

describe('Test Suite for class ExplorerService', ()=>{

    test('1.- Method getExplorers',()=>{
        const [success,all_explorers] = ExplorerService.getExplorers()

        expect(success).toBe(false);
        expect(all_explorers).not.toBeUndefined();
    });
});