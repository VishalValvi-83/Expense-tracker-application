import { Schema, model } from 'mongoose';

const transactionSchema = new Schema({
    title: { type: String, required: true, },
    amount: { type: Number, required: true },
    category: { type: String, default: "others" },
    date: { type: Date, default: Date.now },
    description: { type: String, required: false },
    type: { type: String, enum: ['debit', 'credit'], required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
}
);
const Transaction = model('Transaction', transactionSchema);

export default Transaction;