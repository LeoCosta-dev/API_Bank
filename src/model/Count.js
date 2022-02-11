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
    transfer(){

    }
    bankDraft(){

    }
}


module.exports = Count;