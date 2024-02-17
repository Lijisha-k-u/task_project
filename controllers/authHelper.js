const {User}= require('../models/userSchema');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async(req,res,next)=>{
    const { email, password } = req.body;

  try {
    // Check if the email exists
    const user = await User.findOne({ email });

    if (!user) {
      console.error('User Not Found');
      return res.status(404).json({ error: 'User Not Found' });
    }

    // Check if the password is correct
    if (!await bcrypt.compare(password, user.password)) {
      console.error('Incorrect Password');
      return res.status(401).json({
         error: 'Incorrect Password' 
        });
    }

    // Generate JWT token upon successful authentication
    const token = jwt.sign({
         email: user.email }, 'your_secret_key', { expiresIn: '1h' 
        });

    // Respond with a success message and the token
    res.status(200).json({
         message: 'Login successful', token 
        });
  } catch (error) {
    console.error('Internal Server Error:', error.message);
    res.status(500).json({ 
        error: 'Internal Server Error' 
    });
  }

    
res.redirect('/login')

}

module.exports={login}