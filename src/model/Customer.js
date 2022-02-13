const ValidatorCustomer = require("../services/ValidatorCustomer")

class Customer{
    constructor(cpf, firstName, lastName, countId){
        this.cpf = cpf, // 11 digitos
        this.firstName = firstName, // minímo 3 caracteres
        this.lastName = lastName, // minimo 3 caracteres
        this.countId = countId // tipo objeto
    }
}

module.exports = Customer