const Inspect = require('../utils/Inspect');

class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        explorer.trick = this.applyValidationInNumber(explorer.score);
        return explorer;
    }

    static applyValidationInNumber(score){
        if (Inspect.badParam(score)) return 'Parametro invalido'
        
        const is_fizz = score % 3 == 0;
        const is_buzz = score % 5 == 0;

        if(is_fizz && is_buzz){
            return 'FIZZBUZZ';
        }else if(is_fizz){
            return 'FIZZ';
        }else if(is_buzz){
            return 'BUZZ';
        }
        
        return score;
    }  
}

module.exports = FizzbuzzService;