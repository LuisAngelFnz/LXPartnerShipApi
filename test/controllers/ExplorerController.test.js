const ExplorerController = require('../../lib/controllers/ExplorerController');

describe('Test suit for class ExplorerController',() => {
    test('1.- Method getExplorersByMission, pass param mission null and undefined', () => {
        let result = ExplorerController.getExplorersByMission(null);
        expect(result).toEqual([]);

        result = ExplorerController.getExplorersByMission(undefined);
        expect(result).toEqual([]);
    });

    test('2.- Method getExplorersByMission, pass params OK', () => {

        const result = ExplorerController.getExplorersByMission('node');
        expect(result).not.toBeUndefined();
        if(result.length > 0){
            expect(result[0].mission).toBe('node');
        }
    });

    test('3.- Method getExplorersAmonutByMission, pass param mission null and undefined', () => {

        let result = ExplorerController.getExplorersAmonutByMission(null);
        expect(result).toStrictEqual(0);

        result = ExplorerController.getExplorersAmonutByMission(undefined);
        expect(result).toStrictEqual(0);
    });

    test('4.- Method getExplorersAmonutByMission, pass param OK', () => {
        let result = ExplorerController.getExplorersAmonutByMission('node');
        expect(result).not.toBeUndefined();
        expect(result > 0).toBe(true); //Comment if not exists explorer
    });

    test('5.- Method getExplorersUsernamesByMission, pass param mission null and undefined', () => {
        let result = ExplorerController.getExplorersUsernamesByMission(null);
        expect(result).not.toBeUndefined();
        expect(result).toEqual([]);

        result = ExplorerController.getExplorersUsernamesByMission(null);
        expect(result).not.toBeUndefined();
        expect(result).toEqual([]);
    });

    test('6.- Method getExplorersUsernamesByMission, pass params OK', () => {
        let result = ExplorerController.getExplorersUsernamesByMission('node');
        expect(result).not.toBeUndefined();
        expect(result.length > 0).toBe(true);

        result = ExplorerController.getExplorersUsernamesByMission('java');
        expect(result).not.toBeUndefined();
        expect(result.length > 0).toBe(true);
    });

    test('7.- Method applyScoreValidationInNumber, pass param null and undefined', () => {
        let result = ExplorerController.applyScoreValidationInNumber(null);
        
        expect(result).toBe('Parametro invalido');

        result = ExplorerController.applyScoreValidationInNumber(undefined);
        expect(result).toBe('Parametro invalido');
    });

    test('8.- Method applyScoreValidationInNumber, pass param OK', () => {
        let score  = 3;
        let result = ExplorerController.applyScoreValidationInNumber(score);
        
        expect(result).toBe('FIZZ');

        score  = 5;
        result = ExplorerController.applyScoreValidationInNumber(score);
        expect(result).toBe('BUZZ');

        score  = 15;
        result = ExplorerController.applyScoreValidationInNumber(score);
        expect(result).toBe('FIZZBUZZ');
    });

    test('9.- Method telegramScoreValidationInNumber, pass params null and undefined', () => {

        let result = ExplorerController.telegramScoreValidationInNumber(null);
        expect(result).toBe('Envía un número válido');

        result = ExplorerController.telegramScoreValidationInNumber(undefined);
        expect(result).toBe('Envía un número válido');        
    });

    test('10.- Method telegramScoreValidationInNumber, pass params OK', () => {
        let input_number = 2;

        let result = ExplorerController.telegramScoreValidationInNumber(input_number);
        expect(result).toBe(`Tu número es: ${input_number}. Validación: ${input_number}`);

        input_number = 3;
        result = ExplorerController.telegramScoreValidationInNumber(input_number);
        expect(result).toBe(`Tu número es: ${input_number}. Validación: FIZZ`);

        input_number = 5;
        result = ExplorerController.telegramScoreValidationInNumber(input_number);
        expect(result).toBe(`Tu número es: ${input_number}. Validación: BUZZ`);

        input_number = 15;
        result = ExplorerController.telegramScoreValidationInNumber(input_number);
        expect(result).toBe(`Tu número es: ${input_number}. Validación: BUZZ`);        
    });
});