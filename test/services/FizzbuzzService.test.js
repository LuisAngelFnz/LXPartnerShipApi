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

    test('3.- Method applyValidationInNumber, pass para null and undefined', () => {
        let result = FizzbuzzService.applyValidationInNumber(null);
        
        expect(result).toBe('Parametro invalido');

        result = FizzbuzzService.applyValidationInNumber(undefined);
        expect(result).toBe('Parametro invalido');

    });

    test('4.- Method applyValidationInNumber, pass OK', () => {
        let score  = 3;
        let result = FizzbuzzService.applyValidationInNumber(score);
        
        expect(result).toBe('FIZZ');

        score  = 5;
        result = FizzbuzzService.applyValidationInNumber(score);
        expect(result).toBe('BUZZ');

        score  = 15;
        result = FizzbuzzService.applyValidationInNumber(score);
        expect(result).toBe('FIZZBUZZ');
    });
});