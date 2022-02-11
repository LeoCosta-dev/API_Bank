const ValidatorCustomer = require("../services/ValidatorCustomer")

class Customer{
    constructor(cpf, firstName, lastName, conta){
        this.cpf = cpf, // 11 digitos
        this.firstName = firstName, // minímo 3 caracteres
        this.lastName = lastName, // minimo 3 caracteres
        this.count = conta // tipo objeto
    }
}

module.exports = Customer