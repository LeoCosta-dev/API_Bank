class ValidatorCustomer{
    static exist(cpf){

    }
    static cpf(cpf){
        if(cpf && typeof cpf == "number" && `${cpf}`.length == 11){
            return true
        } else {
            return false
        }
    }
    static name(name){

    }
    static lastName(lastName){

    }
}

module.exports = ValidatorCustomer;