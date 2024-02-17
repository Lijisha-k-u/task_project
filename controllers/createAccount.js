const {User}= require('../models/userSchema');
const bcrypt = require("bcrypt");

const Createaccount = async(req,res)=>{

try {
    const { username, email, password, phone } = req.body;

    // Validate input
    if (!username || !email || !password || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the username or email is already taken
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(409).json({ error: "Username or email already exists" });
    } 
    // password hashed
    const hashedPassword = bcrypt.hashSync(password, 10);

    User[username] = { username, email, password: hashedPassword, phone };

    // Create a new user
    const newUser = new User({ username, email, password:hashedPassword, phone });
    await newUser.save();

    // Respond with a success message
    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }

};


module.exports = { Createaccount};