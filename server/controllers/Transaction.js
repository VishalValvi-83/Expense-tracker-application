import Transaction from './../models/Transaction.js'

const postTransactions = async (req, res) => {
    const {title, amount, category, description, type, user } = req.body

    const transaction = new Transaction({
        title,
        amount,
        description,
        category,
        type,
        user
    });
    try {
        const savedTransaction = await transaction.save();
        res.json({
            success: true,
            message: "Transaction saved successfully", transaction: savedTransaction
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: error.message,
            data : null

        });
    }
}

export {
    postTransactions,
}