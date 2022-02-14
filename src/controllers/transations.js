const CustomerDAO = require("../DAO/CustomerDAO")
const Transations = require("../services/Transations")

module.exports = (app) => {
    app.put('/transations/bankdraft', async (req, res) => {
        /*
        {
            "CPF": "cpf", 
            "VALUE": "value"
        }
        */
        try{
            const customer = await CustomerDAO.listCustomerForCPF(req.body.CPF)
            const id = customer.CUSTOMER_ID
            delete customer.CUSTOMER_ID
            const process = Transations.bankDraft(customer, req.body.VALUE)
            if(process.Error){
                res.status(400).json(process)
            } else {
                const alter = await CustomerDAO.alterCustomer(id, process)
                res.status(200).json({Autorizate: true, CPF: alter.values.CPF, VALUE: req.body.VALUE, NEW_BANK_BALANCE: alter.values.BANK_BALANCE})
            }
        } catch (e) {
            res.status(400).json(e.message)
        }

    })
    app.put('/transations/deposit', async (req, res) => {
        /*
        {
            "CPF": "cpf", 
            "VALUE": "value"
        }
        */
        try{
            const customer = await CustomerDAO.listCustomerForCPF(req.body.CPF)
            const id = customer.CUSTOMER_ID
            delete customer.CUSTOMER_ID
            const process = Transations.deposit(customer, req.body.VALUE)
            if(process.Error){
                res.status(400).json(process)
            } else {
                const alter = await CustomerDAO.alterCustomer(id, process)
                res.status(200).json({Autorizate: true, CPF: alter.values.CPF, VALUE: req.body.VALUE, NEW_BANK_BALANCE: alter.values.BANK_BALANCE})
            }
        } catch (e) {
            res.status(400).json(e.message)
        }
    })
    app.put('/transations/transfer', async (req, res) => {
        /*
        {
            "ORIGIN": "cpf",
            "DESTINATION": "CPF",
            "VALUE": "value"
        }
        */
        try{
            const origin = await CustomerDAO.listCustomerForCPF(req.body.ORIGIN)
            const destination = await CustomerDAO.listCustomerForCPF(req.body.DESTINATION)
            const idOrigin = origin.CUSTOMER_ID
            const idDestination = destination.CUSTOMER_ID
            delete origin.CUSTOMER_ID
            delete destination.CUSTOMER_ID
            const process = Transations.transfer(origin, destination, req.body.VALUE)
            if(process.Error){
                res.status(400).json(process)
            } else {
                const alterOrigin = await CustomerDAO.alterCustomer(idOrigin, process.CustomerOrigin)
                const alterDestination = await CustomerDAO.alterCustomer(idDestination, process.CustomerDestination)
                res.status(200).json({Autorizate: true, ORIGIN: alterOrigin.values.CPF, DESTINATION: alterDestination.values.CPF, VALUE: req.body.VALUE, NEW_BANK_BALANCE: alterOrigin.values.BANK_BALANCE})
            }
        } catch (e) {
            res.status(400).json(e.message)
        }
    })
}