const Inspect = require('../utils/Inspect');

class FizzbuzzService{
    static applyValidationInExplorer(all_explorers){
        if(Inspect.badParam(all_explorers)) return [];
    }   
}

module.exports = FizzbuzzService;