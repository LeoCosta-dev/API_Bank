const Validator = require("../services/ValidatorCustomer")
const Customer = require("../model/Customer")
const CustomerDAO = require("../DAO/CustomerDAO")

module.exports = (app) => {
    app.get('/customer', (req, res) => {
        const listCustomer = CustomerDAO.listCustomer()
        return res.status(200).json({listCustomer})
    })
}