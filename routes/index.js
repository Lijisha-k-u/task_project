var express = require('express');
const {Createaccount} =require('../controllers/createAccount');
const { login } = require('../controllers/authHelper');
const {updateUser,getProfile} =require('../controllers/updateUser');
const {JWTvarify} =require('../controllers/JWTverify');
var router = express.Router();

/* GET home page. */
router.get('/signup',(req,res)=>{
  res.render('signup')
})
router.post('/signup', Createaccount );
router.post('/login',login);
router.get('/login',(req,res)=>{
  res.render('login');
})
router.get('/profile',JWTvarify,getProfile);
router.put('/updateduser',JWTvarify,updateUser);


module.exports = router;
