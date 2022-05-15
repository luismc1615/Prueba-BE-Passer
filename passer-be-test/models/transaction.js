const { postgresql } = require('../databases/postgresql')

/**
 * Create an specific transaction
 * @param {number} pk_transaction Transaction pk
 * @param {number} fk_user Transaction fk user
 * @param {string} description Transaction description
 * @param {number} amount Transaction amount
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Descripción de la transacción", amount: 456}}
 */
 const createTransaction = (pk_transaction, fk_user, description, amount) => {
    try {
        let transaction = postgresql.public.one(`insert into transaction values ('${pk_transaction}', '${fk_user}', 
                                                 '${description}', '${amount}') returning *;`);
        return transaction
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Get an specific transaction
 * @param {number} pk_transaction Transaction pk
 * @returns {{pk_transaction: 1, fk_user: 123, description: "Descripción de la transacción", amount: 456}} transaction schema
 */
 const getTransaction = (pk_transaction) => {
    try {
        let transaction = postgresql.public.one(`select * from transaction where pk_transaction = ${pk_transaction}`);
        return transaction
    }
    catch (e) {
        throw new Error(e)
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
 const updateTransaction = (pk_transaction, fk_user, description, amount) => {
    try {
        let transaction = postgresql.public.one(`update transaction set fk_user='${fk_user}', 
                                                 description = '${description}',amount= '${amount}' 
                                                 where pk_transaction='${pk_transaction}' returning *;`);
        return transaction
    }
    catch (e) {
        throw new Error(e)
    }
}


module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction
}