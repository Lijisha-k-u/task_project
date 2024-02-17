const mongoose =require('mongoose');
const {User}= require('../models/userSchema');

const getProfile =async(req,res)=>{
    const User = req.LoggeDInUser;
    const userData = await UserModel.findById(
      new mongoose.Types.ObjectId(User._id)
    );
    res.status(200).json(userData);
};
const updateUser = async(req,res)=>{
    const userId = req.user.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json({ message: 'User profile updated successfully.', user: updatedUser });
  } catch (error) {
    console.error('Error updating user profile:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {updateUser,getProfile}