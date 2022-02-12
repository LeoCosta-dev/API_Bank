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
    transfer(countDestination, value){
        if(countDestination && value && this.bankDraft(value)){
            return true
        } else {
            return false
        }
    }
    bankDraft(value){
        if(value && typeof value == "number" && value <= this.bankBalance){
            return true
        } else {
            return false
        }
    }
}


module.exports = Count;