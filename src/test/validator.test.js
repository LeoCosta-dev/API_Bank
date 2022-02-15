const Validator = require("../services/Validator")

test('Verifica se já existe cadastro no CPF.', async () => {
    let teste = await Validator.exist("0")
    expect(teste).toBe(true)
})

test('Verifica se é um cliente válido.', async () => {
    let teste = await Validator.customer("0", "0", "0")
    expect(teste).toBe(false)
})

test('Verifica se o cpf tem 11 caracteres.', () => {
    expect(Validator.cpf("0000000000")).toBe(false)
})

test('Verifica se o cpf tem 11 caracteres.', () => {
    expect(Validator.cpf("00000000000")).toBe(true)
})

test('Verifica se o nome tem 3 ou mais caracteres.', () => {
    expect(Validator.name("00")).toBe(false)
})

test('Verifica se o nome tem 3 ou mais caracteres.', () => {
    expect(Validator.name("000")).toBe(true)
})

test('Verifica se o valor é até 2000.', () => {
    expect(Validator.deposit("2001")).toBe(false)
})

test('Verifica se o valor é até 2000.', () => {
    expect(Validator.deposit("2000")).toBe(true)
})

test('Verifica se o valor é menor que o saldo.', () => {
    expect(Validator.bankDraft("1", "0")).toBe(false)
})

test('Verifica se o valor é menor que o saldo.', () => {
    expect(Validator.bankDraft("1", "2")).toBe(true)
})

test('Verifica se o valor para transferencia é menor que o saldo.', () => {
    expect(Validator.transfer("0", "0", "1")).toBe(false)
})

test('Verifica se o valor para transferencia é menor que o saldo.', () => {
    expect(Validator.transfer("2", "2", "1")).toBe(true)
})