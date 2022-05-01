
class FizzbuzzService{
    static applyValidationInExplorer(explorer){

        const is_fizz = explorer.score % 3 == 0;
        const is_buzz = explorer.score % 5 == 0;

        if(is_fizz && is_buzz){
            explorer.trick = 'FIZZBUZZ';
        }else if(is_fizz){
            explorer.trick = 'FIZZ';
        }else if(is_buzz){
            explorer.trick = 'BUZZ';
        }else{
            explorer.trick = explorer.score;
        }

        return explorer;
    }   
}

module.exports = FizzbuzzService;