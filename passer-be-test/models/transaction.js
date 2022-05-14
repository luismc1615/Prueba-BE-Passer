const { postgresql } = require('../databases/postgresql')

/**
 * Create an specific transaction
 * @param {number} pk_transaction Transaction primary key
 * @param {number} fk_user Transaction foreign key users
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



module.exports = {
    createTransaction,
}