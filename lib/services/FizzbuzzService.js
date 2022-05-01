const Inspect = require('../utils/Inspect');

class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        if(Inspect.badParam(explorer)){
            return {};
        }

    }   
}

module.exports = FizzbuzzService;