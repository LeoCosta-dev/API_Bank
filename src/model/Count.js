const ValidatorCount = require("../services/ValidatorCount");

class Count{
    constructor(agency, countNumber){
        this.agency = agency,
        this.countNumber = countNumber,
        this.bankBalance = 0
    }
    deposit(deposit){
        if(ValidatorCount.deposit(deposit)){
            this.bankBalance = this.bankBalance + deposit
        } else {
            console.log("Valor inválido.");
        }
    }
    bankDraft(value){
        if(ValidatorCount.bankDraft(value, this.bankBalance)){
            this.bankBalance = this.bankBalance - value
            console.log("Saque efetuado com sucesso, seu saldo atual é de: " + this.bankBalance)
        } else {
            console.log("Erro na transação, saldo insuficiente!")
        }
    }
    transfer(countDestination, value){
        if(ValidatorCount.transfer(this.bankBalance, countDestination, value) && ValidatorCount.deposit(value)){
            this.bankDraft(value)
            countDestination.deposit(value)
            console.log("Transferência efetuada com sucesso!")
        } else {
            console.log("Erro ao tentar efetuar transação, revise os dados e tente novamente mais tarde.")
        }
    }
}


module.exports = Count;