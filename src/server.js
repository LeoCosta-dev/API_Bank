const app = require("./app");
const conection = require("./Infra/conection");
const PORT = process.env.PORT || 3002;
const createTable = require("./Infra/createTable")

conection.connect((e) => { // Solicito conexão com o mysql
    if (e){
        console.log(e) // retorno o erro de conexão caso ele ocorra
    } else {
        console.log("Conectado com sucesso ao banco de dados!")
        createTable.init(conection) // Crio as tabelas no inicio da conexão caso elas não existam.
        app.listen(PORT, () => { // faço o levante com o servidor apenas se estiver tudo certo com a conexão.
            console.log(`Servido rodadando na porta ${PORT}.`)
        })
    }
})