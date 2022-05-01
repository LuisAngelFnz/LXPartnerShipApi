const FizzbuzzService = require('../../lib/services/FizzbuzzService');

describe('Test Suite for class FizzbuzzService',()=>{
    test('1.- Method applyValidationInExplorer, pass param null and undefined',()=>{
        
        let result = FizzbuzzService.applyValidationInExplorer(null);
        expect(result).toEqual({});

        result = FizzbuzzService.applyValidationInExplorer(undefined);
        expect(result).toEqual({});
        expect(result.trick).toBeUndefined();

    });

    test('2.- Method applyValidationInExplorer, pass params OK',()=>{
        let explorer = {'score':3};

        let result = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(result.trick).toBe('FIZZ');

        explorer = {'score':5};
        result = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(result.trick).toBe('BUZZ');

        explorer = {'score':15};
        result = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(result.trick).toBe('FIZZBUZZ');

        explorer = {'score':3};
        result = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(result.trick).toBe(3);
    });
});