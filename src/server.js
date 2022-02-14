const app = require("./app");
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => { // faço o levante com o servidor apenas se estiver tudo certo com a conexão.
    console.log(`Servido rodadando na porta ${PORT}.`)
})