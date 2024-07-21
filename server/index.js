import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import mongoose from 'mongoose';
import User from './models/User.js'
import Transaction from './models/Transaction.js'

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
    res.send("Hello, World!");
})

app.post("/signup", async (req, res) => {
    const {
        fullName,
        email,
        password,
        dob
    } = req.body

    const user = new User({
        fullName,
        email,
        password,
        dob: new Date(dob)
    });

    try {
        const saveduser = await user.save()
        res.json({
            success: true,
            message: "User created successfully",
            user: saveduser
        });
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.json({ message: "User already exists" });
    }
    catch (error) {
        res.json({
            success: false,
            message: error.masssage,
            user: null
        });
    }
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        email: email, password: password
    });
    if (!user) return res.json({ success: false, message: "Invalid email or password" });

    return res.json({ success: true, message: "Login successfully",
        data : user
     });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});