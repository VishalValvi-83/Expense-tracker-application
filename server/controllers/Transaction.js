import User from '../models/User.js';
import Transaction from './../models/Transaction.js'

const postTransactions = async (req, res) => {
    const { title, amount, category, description, type, user } = req.body

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
            message: "Transaction saved successfully",
            transaction: savedTransaction
        });
    }
    catch {
        res.json({
            success: false,
            message: "Transaction saved successfully",
            data: null

        });
    }
}

const getTransaction = async (req, res) => {
    const { userId } = req.query;

    const user = await User.findById(userId);
    if (!user) {
        return res.json({ success: false, message: "User not found",
            data: null
         });
    }

    const transactions = await Transaction.find({user:userId})

    res.json({
        success: true,
        message: "Transactions fetched successfully",
        data: transactions
    });
    


}

export {
    postTransactions,
    getTransaction,
}