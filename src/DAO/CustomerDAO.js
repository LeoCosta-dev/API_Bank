const conection = require('../Infra/conection')
const Customer = require('../model/Customer')

class CustomerDAO{
    static createCustomer(customer){ // Criar o cliente no banco de dados por meio do verbo POST.
        const query = `
        INSERT INTO "CUSTOMER" (CPF, FIRST_NAME, LAST_NAME, AGENCY, COUNT_NUMBER, BANK_BALANCE) VALUES (?,?,?,?,?,?)
        `
        return new Promise((resolve, reject) => {
            conection.run(query, Object.values(customer), (e) => {
                if(e){
                    reject("Erro ao criar Cliente!", {erro: e.message})
                } else {
                    resolve({Customer: customer})
                }
            })
        })
    }
    static async listCustomer(){ // Lista todas os clientes existentes por meio do verbo GET.
        const query = `
        SELECT * FROM "CUSTOMER"
        `
        return new Promise((resolve, reject) => {
            conection.all(query, (e, result) => { // Result é a resposta recebida pelo banco de dados em caso de sucesso.
                if(e){
                    reject({ "mensagem": err.message, "error": true })
                } else {
                    resolve({result})
                }
            })
        })
    }
    static listCustomerForId(id){ // Lista um cliente de id específico por meio do verbo GET.
        const query = `
        SELECT * FROM CUSTOMER WHERE CUSTOMER_ID = ${id}
        `
        return new Promise((resolve, reject) => {
            conection.get(query, (e, result) => {
                if(e){
                    reject({ "mensagem": err.message, "error": true })
                } else {
                    resolve({result})
                }
            })
        })
    }
    static listCustomerForCPF(cpf){ // Lista um cliente de CPF específico por meio do verbo GET.
        const query = `
        SELECT * FROM CUSTOMER WHERE CPF = ${cpf}
        `
        return new Promise((resolve, reject) => {
            conection.get(query, (e, result) => {
                if(e){
                    reject({ "mensagem": e.message, "error": true })
                } else {
                    resolve({result})
                }
            })
        })
    }
    static alterCustomer(id, values){ // Altera dados de um cliente de id específico por meio do verbo PATCH.
        const query = `
        UPDATE 'CUSTOMER' SET (CPF, FIRST_NAME, LAST_NAME, AGENCY, COUNT_NUMBER, BANK_BALANCE) = (?,?,?,?,?,?) WHERE CUSTOMER_ID = ?
        `
        return new Promise((resolve, reject) => {
            conection.all(query, [...Object.values(values), id], (e) => {
                if(e){
                    reject({ "mensagem": e.message, "error": true })
                } else {
                    resolve({id, values})
                }
            })
        })
    }
    static deleteCustomer(id){ // Excluí o cliente de um id específico por meio do verbo DELETE.
        const query = `
        DELETE FROM 'CUSTOMER' WHERE CUSTOMER_ID = ?
        `
        return new Promise((resolve, reject) => {
            conection.all(query, id, (e, result) => {
                if(e){
                    reject({ "mensagem": e.message, "error": true })
                } else {
                    resolve({result, id})
                }
            })
        })
    }
}

module.exports = CustomerDAO