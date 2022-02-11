const Validator = require("../services/ValidatorCustomer")
const Customer = require("../model/Customer")
const CustomerDAO = require("../DAO/CustomerDAO")

const cpf = 1234567891
const rg = 123
let newCustomer = {}

if(Validator.cpf(cpf)){
    newCustomer = new Customer(cpf)
    console.log(cpf)
} else {
    console.log("deu ruim")
}

if(newCustomer && JSON.stringify(newCustomer) !== '{}'){
    CustomerDAO.foi(newCustomer)
} else {
    console.log("Ta vazia a parada!");
}