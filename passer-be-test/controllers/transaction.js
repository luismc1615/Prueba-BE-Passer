const transactions = require('../services/transaction')


const createTransaction = async (req, res, next) => {
    const { pk_transaction, fk_user, description, amount } = req.query
    try {
        let transaction = await transactions.createTransaction(pk_transaction, fk_user, description, amount)
        res.status(200).send(transaction)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) && next(e)
    }
}



module.exports = {
    createTransaction
}