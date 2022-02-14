const CustomerDAO = require('../DAO/CustomerDAO')

class Validator{
    static exist(cpf){
        const exist = CustomerDAO.listCustomerForCPF(cpf)
        if(JSON.stringify(exist) == JSON.stringify({})){
            return true
        } else {
            return false
        }
    }
    static cpf(cpf){
        if(cpf && typeof cpf == "number" && `${cpf}`.length == 11){
            return true
        } else {
            return false
        }
    }
    static name(name){
        if(name && typeof name == 'string' && name.length >=3){
            return true
        } else {
            return false
        }
    }
    static deposit(value){
        if(value && typeof value == "number" && value <= 2000 && value > 0){
            return true
        } else {
            return false
        }
        
    }
    static bankDraft(value, bankBalance){
        if(value && typeof value == "number" && value <= bankBalance && value > 0){
            return true
        } else {
            return false
        }
    }
    static transfer(originCount, countDestination, value){
        if(originCount && countDestination && value && ValidatorCount.bankDraft(value, originCount)){
            return true
        } else {
            return false
        }
    }
}

module.exports = Validator;