class CreateTable{
    static init(conection){
        this.conection = conection
        this.createCustomer()
    }
    static createCustomer(){
        const customerQuery = `       
        CREATE TABLE IF NOT EXISTS "CUSTOMER" (
            "CUSTOMER_ID" INTEGER PRIMARY KEY AUTOINCREMENT,
            "CPF" VARCHAR(11) NOT NULL,
            "FIRST_NAME" VARCHAR(255),
            "LAST_NAME" VARCHAR(255),
            "AGENCY" VARCHAR(4) NOT NULL,
            "COUNT_NUMBER" VARCHAR(4) NOT NULL,
            "BANK_BALANCE" VARCHAR(255)
        );
        `
        this.conection.run(customerQuery, e => {
            if(e){
                console.log(e)
            } else {
                console.log('Tabela CUSTOMER criada com sucesso!')
            }
        })
    }
}

module.exports = CreateTable