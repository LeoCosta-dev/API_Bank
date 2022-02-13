const conection = require('../Infra/conection')

class CustomerDAO{
    static createCustomer(customer){ // Criar o cliente no banco de dados por meio do verbo POST.
        const query = `
        INSERT INTO 'Customer' SET ?
        `
        conection.query(query, customer, (e) => {
            if(e){
                return e
            } else {
                return customer
            }
        })
    }
    static listCustomer(){ // Lista todas os clientes existentes por meio do verbo GET.
        const query = `
        SELECT * FROM 'CUSTOMER'
        `
        conection.query(query, (e, result) => { // Result é a resposta recebida pelo banco de dados em caso de sucesso.
            if(e){
                return e
            } else {
                return result
            }
        })
    }
    static listCustomerForId(id){ // Lista um cliente de id específico por meio do verbo GET.
        const query = `
        SELECT * FROM CUSTOMER WHERE CUSTOMER_ID = ${id}
        `
        conection.query(query, (e, result) => {
            if(e){
                return e
            } else {
                return result
            }
        })
    }
    static listCustomerForCPF(cpf){ // Lista um cliente de CPF específico por meio do verbo GET.
        const query = `
        SELECT * FROM CUSTOMER WHERE CPF = ${cpf}
        `
        conection.query(query, (e, result) => {
            if(e){
                return e
            } else {
                return result
            }
        })
    }
    static alterCustomer(id, values){ // Altera dados de um cliente de id específico por meio do verbo PATCH.
        const query = `
        UPDATE 'CUSTOMER' SET ? WHERE CCUSTOMER_ID = ?
        `
        conection.query(query, [values, id], (e, result) => {
            if(e){
                return e
            } else {
                return {result, ...values, id}
            }
        })
    }
    static deleteCustomer(id){ // Excluí o cliente de um id específico por meio do verbo DELETE.
        const query = `
        DELETE FROM 'CUSTOMER' WHERE CUSTOMER_ID = ?
        `
        conection.query(query, id, (e, result) => {
            if(e){
                return e
            } else {
                return {result, id}
            }
        })
    }
}

module.exports = CustomerDAO