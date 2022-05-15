const express = require('express')

const { users, transaction } = require('../controllers')

const router = express.Router()

router.get('/users/:pk_user', users.getUser)
    .post('/users/', users.createUser)
    .put('/users/:pk_user', users.updateUser)
    .delete('/users/:pk_user', users.deleteUser)
    .post('/transaction/', transaction.createTransaction)
    .get('/transaction/:pk_transaction', transaction.getTransaction)
    .put('/transaction/:pk_transaction', transaction.updateTransaction)
    .get('/transaction/fk_user/:fk_user', transaction.getTransactionByfkUser)

module.exports = router