const FizzbuzzService = require('../../lib/services/FizzbuzzService');

describe('Test Suite for class FizzbuzzService',()=>{
    test('1.- Method applyValidationInExplorer, pass param null and undefined',()=>{
        
        let callback = ()=>{
            FizzbuzzService.applyValidationInExplorer(null)
        };
        expect(callback).toThrow(TypeError);

        callback = ()=>{
            FizzbuzzService.applyValidationInExplorer(undefined);
        }
        expect(callback).toThrow(TypeError)
    });

    test('2.- Method applyValidationInExplorer, pass params OK',()=>{
        let explorer = {'score':3};

        let result = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(result.trick).toBe('FIZZ');

        explorer = {'score':5};
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe('BUZZ');

        explorer = {'score':15};
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe('FIZZBUZZ');

        explorer = {'score':2};
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toBe(2);
    });
});