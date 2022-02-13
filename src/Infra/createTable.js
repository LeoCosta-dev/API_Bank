class CreateTable{
    init(conection){
        this.conection = conection
    }
    createCount(){
        const countQuery = `
        CREATE TABLE IF NOT EXISTS 'COUNT' (
            COUNT_ID INT NOT NULL AUTO_INCREMENT,
            AGENCY VARCHAR(4) NOT NULL,
            COUNT_NUMBER VARCHAR(4) NOT NULL,
            BANK_BALANCE FLOAT,
            PRIMARY KEY (COUNT_ID)
        );
        `
        this.conection.query(countQuery, e => {
            if(e){
                console.log(e)
            } else {
                console.log('Tabela COUNT criada com sucesso!')
            }
        })
    }
    createCustomer(){
        const customerQuery = `       
        CREATE TABLE IF NOT EXISTS CUSTOMER (
            CUSTOMER_ID INT NOT NULL AUTO_INCREMENT,
            CPF VARCHAR(11) NOT NULL,
            FIRST_NAME VARCHAR(255),
            LAST_NAME VARCHAR(255),
            COUNT_ID INT NOT NULL,
            PRIMARY KEY (CUSTOMER_ID),
            FOREIGN KEY (COUNT_ID)
                REFERENCES 'COUNT' (COUNT_ID)
        );
        `
        this.conection.query(customerQuery, e => {
            if(e){
                console.log(e)
            } else {
                console.log('Tabela CUSTOMER criada com sucesso!')
            }
        })
    }
}