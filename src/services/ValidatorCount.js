class ValidatorCount{
    static cpf(cpf){
        if(cpf && typeof cpf == "number" && `${cpf}`.length == 11){
            return true
        } else {
            return false
        }
    }
}

module.exports = ValidatorCount;