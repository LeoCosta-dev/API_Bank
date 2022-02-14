const sqlite3 = require("sqlite3").verbose()
const path = require("path")
const pathArchive = path.resolve(__dirname, 'database.db')
const CreateTable = require('./createTable')

const conection = new sqlite3.Database(pathArchive)

conection.serialize(()=>{
    CreateTable.init(conection)
})



// exportar conexão.
module.exports = conection;