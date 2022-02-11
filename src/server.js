const app = require("./app")
const PORT = process.env.PORT || 3002;
require("./infra/conection");


app.listen(PORT, () => {
    console.log(`Servido rodadando na porta ${PORT}.`)
})