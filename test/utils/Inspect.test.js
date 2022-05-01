const Inspect = require('../../lib/utils/Inspect');

describe('Test Suite for class Inspect', ()=>{
    test('1.- Method badParam, pass param null and undefined', ()=>{
        let result = Inspect.badParam(null);
        expect(result).toBe(true);

        result = Inspect.badParam(undefined);
        expect(result).toBe(true);

        result = Inspect.badParam([]);
        expect(result).toBe(false);

        result = Inspect.badParam({});
        expect(result).toBe(false);        
    });
});