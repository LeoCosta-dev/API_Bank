const CustomerDAO = require('../DAO/CustomerDAO')

class Validator{
    static async exist(cpf){
        try{
            const exist = await CustomerDAO.listCustomerForCPF(cpf)
            if(!exist.CPF){
                return true
            } else {
                return false
            }
        } catch (e) {
            console.log(e.message)
        }
    }
    static cpf(cpf){
        if(cpf && typeof cpf == "string" && `${cpf}`.length == 11){
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
    static async customer(cpf, firstName, lastName){
        if(await this.exist(cpf) && this.cpf(cpf) && this.name(firstName) && this.name(lastName)){
            return true
        } else {
            return false
        }
    }
    static deposit(value){
        if(value && typeof value == "string" && value <= 2000 && value > 0){
            return true
        } else {
            return false
        }
        
    }
    static bankDraft(value, bankBalance){
        if(value && typeof value == "string" && value <= bankBalance && value > 0){
            return true
        } else {
            return false
        }
    }
    static transfer(originCount, countDestination, value){
        if(originCount && countDestination && value && Validator.bankDraft(value, originCount)){
            return true
        } else {
            return false
        }
    }
}

module.exports = Validator;