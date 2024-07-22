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
        return res.json({
            success: false, message: "User not found",
            data: null
        });
    }

    const transactions = await Transaction.find({ user: userId }).sort({ createdAt: -1 });

    res.json({
        success: true,
        message: "Transactions fetched successfully",
        data: transactions
    });



}


const deleteTransaction = async (req, res) => {
    try {
        const id = req.params.id;
        await Transaction.deleteOne({ _id: id });
        res.json({ success: true, message: "Transaction deleted successfully", data : null });
    }
    catch (err) {
        res.json({ success: false, message: err.message });
    }
}

export {
    postTransactions,
    getTransaction,
    deleteTransaction
}