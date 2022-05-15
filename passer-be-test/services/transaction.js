const transactionsModel = require('../models/transaction')

/**
 * Create an specific transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user Transaction foreign key users
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user:123, description:"Descripción de la transacción", amount: 456}}
 */
const createTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        return await transactionsModel.createTransaction(pk_transaction, fk_user, description, amount);
    }
    catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Get an specific transaction
 * @param {number} pk_transaction Transaction pk
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Descripción de la transacción", amount: 456}} Transaction schema
 */
 const getTransaction = async (pk_transaction) => {
    try {
        return await transactionsModel.getTransaction(pk_transaction);
    }
    catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Update an specific transaction
 * @param {number} pk_transaction Transaction pk
 * @param {number} fk_user Transaction fk users
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user:123, description:"Cambio en la descripción", amount: 567}}
 */
 const updateTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        return await transactionsModel.updateTransaction(pk_transaction, fk_user, description, amount);
    }
    catch (e) {
        throw new Error(e.message)
    }
}


module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction
}