const Validator = require("../services/Validator")
class Customer{
    constructor(cpf, firstName, lastName, AGENCY, COUNT_NUMBER, BANK_BALANCE = "0.0"){
        this.CPF = cpf, // 11 digitos
        this.FIRST_NAME = firstName, // minímo 3 caracteres
        this.LAST_NAME = lastName, // minimo 3 caracteres
        this.AGENCY = AGENCY, // 4 digitos.
        this.COUNT_NUMBER = COUNT_NUMBER, // 4 digitos.
        this.BANK_BALANCE = BANK_BALANCE // iniciado por padrão em zero
    }
    deposit(deposit){
        if(Validator.deposit(deposit)){
            this.BANK_BALANCE = `${parseFloat(this.BANK_BALANCE) + parseFloat(deposit)}`
        } else {
            console.log("Valor inválido.");
        }
    }
    bankDraft(value){
        if(Validator.bankDraft(value, this.BANK_BALANCE)){
            this.BANK_BALANCE = `${parseFloat(this.BANK_BALANCE) - parseFloat(value)}`
            console.log("Saque efetuado com sucesso, seu saldo atual é de: " + this.BANK_BALANCE)
        } else {
            console.log("Erro na transação, saldo insuficiente!")
        }
    }
    transfer(countDestination, value){
        if(Validator.transfer(this.BANK_BALANCE, countDestination, value) && Validator.deposit(value)){
            this.bankDraft(value)
            countDestination.deposit(value)
            console.log("Transferência efetuada com sucesso!")
        } else {
            console.log("Erro ao tentar efetuar transação, revise os dados e tente novamente mais tarde.")
        }
    }
}

module.exports = Customer