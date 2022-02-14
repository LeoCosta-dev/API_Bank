const Customer = require("../model/Customer")
const Validator = require("./Validator")

class Transations{
    static deposit(customer, value){
        const customerDestination = new Customer(...Object.values(customer))
        if(Validator.deposit(value)){
            customerDestination.deposit(value)
            return customerDestination
        } else {
            return {Error: "Valor fora dos limites da conta."}
        }
    }
    static bankDraft(customer, value){
        const customerDestination = new Customer(...Object.values(customer))
        if(Validator.bankDraft(value, customerDestination.BANK_BALANCE)){
            customerDestination.bankDraft(value)
            return customerDestination
        } else {
            return {Error: "Saldo insuficiente seu saldo atual é de: " + customerDestination.BANK_BALANCE}
        }
    }
    static transfer(customerOrigin, customerDestination, value){
        const CustomerOrigin = new Customer(...Object.values(customerOrigin))
        const CustomerDestination = new Customer(...Object.values(customerDestination))
        if(Validator.transfer(CustomerOrigin, CustomerDestination, value)){
            CustomerOrigin.transfer(CustomerDestination, value)
            return {CustomerOrigin, CustomerDestination}
        } else {
            return {Error: "Transferencia não autorizada, revise os dados antes de tentar novamente!"}
        }
    }
}

module.exports = Transations