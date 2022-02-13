const conection = require("../Infra/conection");

class CountDAO{
    static createCount(count){ // Criar a conta no banco de dados por meio do verbo POST.
        const query = `
        INSERT INTO COUNT_TABLE SET ?
        `
        conection.query(query, count, (e) => {
            if(e){
                return e
            } else {
                return count
            }
        })
    }
    static listCount(){ // Lista todas as contas existentes por meio do verbo GET.
        const query = `
        SELECT * FROM COUNT_TABLE
        `
        conection.query(query, (e, result) => { // Result é a resposta recebida pelo banco de dados em caso de sucesso.
            if(e){
                return e
            } else {
                return result
            }
        })
    }
    static listCountForId(id){ // Lista uma conta de id específico por meio do verbo GET.
        const query = `
        SELECT * FROM COUNT_TABLE WHERE COUNT_ID = ${id}
        `
        conection.query(query, (e, result) => {
            if(e){
                return e
            } else {
                return result
            }
        })
    }
    static alterCount(id, values){ // Altera dados de uma conta de id específico por meio do verbo PATCH.
        const query = `
        UPDATE COUNT_TABLE SET ? WHERE COUNT_ID = ?
        `
        conection.query(query, [values, id], (e, result) => {
            if(e){
                return e
            } else {
                return {result, ...values, id}
            }
        })
    }
    static deleteCount(id){ // Excluí a conta de um id específico por meio do verbo DELETE.
        const query = `
        DELETE FROM COUNT_TABLE WHERE COUNT_ID = ?
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

module.exports = CountDAO;