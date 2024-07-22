import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import mongoose from 'mongoose';
import { postLogin, postSignup } from './controllers/User.js';
import { deleteTransaction, getTransaction, postTransactions } from './controllers/Transaction.js';

const app = express();
app.use(express.json());
app.use(cors());


const dbconnection = async () => {
    const conn = await mongoose.connect(process.env.DB_URL)

    if (conn) {
        console.log(`Connected to MongoDB`);
    }
    else {
        console.log("Failed to connect to MongoDB");

    }
}

dbconnection();

app.get("/", (req, res) => {
    res.send("Hello, server is healthy...  Have a good day");
})

app.post("/signup", postSignup)
app.post("/login", postLogin);
app.post("/transactions", postTransactions);
app.get("/transactions",getTransaction)
app.delete("/transactions/:id", deleteTransaction)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});