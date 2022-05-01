class Inspect{
    static badParam(param){
        return [undefined,null].includes(param)
    }
}

module.exports = Inspect;