const FizzbuzzService = require('../../lib/services/FizzbuzzService');

describe('Test Suite for class FizzbuzzService',()=>{
    test('1.- Method applyValidationInExplorer, pass param null and undefined',()=>{
        
        let result = FizzbuzzService.applyValidationInExplorer(null);
        expect(result).toEqual({});

        result = FizzbuzzService.applyValidationInExplorer(undefined);
        expect(result).toEqual({});        
        
    });

    test('2.- Method applyValidationInExplorer, pass params OK',()=>{
        let all_explorers = []
    });
});