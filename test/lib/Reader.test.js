const Reader = require('../../lib/utils/Reader');

describe('Test Suite for Reader', ()=>{
    test('1.- Method readJsonFile path = undefined, null and not string', ()=>{

        let [success,data_explorers] = Reader.readJsonFile();

        expect(success).toBe(false);
        expect(data_explorers).toBe('Ruta invalida');

        [success,data_explorers] = Reader.readJsonFile(null);

        expect(success).toBe(false);
        expect(data_explorers).toBe('Ruta invalida');

        [success,data_explorers] = Reader.readJsonFile(2);
        expect(success).toBe(false);
        expect(data_explorers).toBe('Ruta invalida');        
    });

    test('2.- Method readJsonFile path invalid', ()=>{
        let [success, data_explorers] = Reader.readJsonFile(`/tmp/${new Date().valueOf()}`);

        expect(success).toBe(false);

        expect(data_explorers).toBe('Ruta no encontrada');
    });

    test('3. Method readJsonFile path is not file', ()=>{
        let [success, data_explorers] = Reader.readJsonFile('/tmp/');

        expect(success).toBe(false);

       expect(data_explorers).toBe('Ruta no es archivo'); 

    });

});