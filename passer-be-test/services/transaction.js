const transactionsModel = require('../models/transaction')

/**
 * Create an specific transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user Transaction foreign key users
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1,fk_user:123,description:"nueva", amount: 1213}}
 */
const createTransaction = async (pk_transaction, fk_user, description, amount) => {
    try {
        return await transactionsModel.createTransaction(pk_transaction, fk_user, description, amount);
    }
    catch (e) {
        throw new Error(e.message)
    }
}



module.exports = {
    createTransaction
}