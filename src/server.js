const app = require("./app");
const conection = require("./Infra/conection");
const PORT = process.env.PORT || 3002;

conection.connect((e) => {
    if (e){
        console.log(e)
    } else {
        console.log("Conectado com sucesso ao banco de dados!")
    }
    app.listen(PORT, () => {
        console.log(`Servido rodadando na porta ${PORT}.`)
    })
})