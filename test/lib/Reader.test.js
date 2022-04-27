const Reader = require('../../lib/utils/Reader');

describe('Test Suite for Reader', ()=>{
    test('1.- Method readJsonFile with not pass param and path null', ()=>{

        let [success,data_explorers] = Reader.readJsonFile();

        expect(success).toBe(false);
        expect(data_explorers).toBe('Ruta invalida');

        [success,data_explorers] = Reader.readJsonFile(null);

        expect(success).toBe(false);
        expect(data_explorers).toBe('Ruta invalida');
    });
});