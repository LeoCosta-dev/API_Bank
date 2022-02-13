class ValidatorCount{
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

module.exports = ValidatorCount;