class ValidatorCount{
    static deposit(value){
        if(value && typeof value == "number" && value <= 2000 && value > 0){
            return true
        } else {
            return false
        }
    }
}

module.exports = ValidatorCount;