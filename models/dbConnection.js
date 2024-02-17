const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


// require("dotenv").config();
// const url = process.env.mongoURL;

url ="mongodb+srv://lijishaunni99:0HSDrD1ZDq6zwupT@cluster0.oiec9dx.mongodb.net/"
mongoose.connect(url).then(()=>{
    console.log("Connection successfully");
})
.catch((err)=> console.log(err));