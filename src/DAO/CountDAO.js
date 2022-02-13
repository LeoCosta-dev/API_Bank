const conection = require("../Infra/conection");

class CountDAO{
    static createCount(count){
        const query = `
        INSERT INTO 'COUNT' SET ?
        `
        conection.query(query, count, (e) => {
            if(e){
                return e
            } else {
                return count
            }
        })
    }
    static listCount(){
        const query = `
        SELECT * FROM COUNT
        `
        conection.query(query, (e, result) => {
            if(e){
                return e
            } else {
                return result
            }
        })
    }
    static listCountForId(id){
        const query = `
        SELECT * FROM COUNT WHERE COUNT_ID = ${id}
        `
        conection.query(query, (e, result) => {
            if(e){
                return e
            } else {
                return result
            }
        })
    }
    static alterCount(id, values){
        const query = `
        UPDATE 'COUNT' SET ? WHERE COUNT_ID = ?
        `
        conection.query(query, [id, values], (e, result) => {
            if(e){
                return e
            } else {
                return {result, ...values, id}
            }
        })
    }
    static deleteCount(id){
        const query = `
        DELETE FROM 'COUNT' WHERE COUNT_ID = ?
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