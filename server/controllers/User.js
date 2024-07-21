import User from "./../models/User.js";

const postLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        email: email, password: password
    });
    if (!user) return res.json({ success: false, message: "Invalid email or password" });

    return res.json({
        success: true, message: "Login successfully",
        data: user
    });
}
const postSignup = async (req, res) => {
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
    catch {
        res.json({
            success: false,
            message: "Error",
            user: null
        });
    }
}
export {
    postLogin,
    postSignup
};