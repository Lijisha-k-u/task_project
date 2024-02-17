const jwt = require("jsonwebtoken");const JWTvarify = (req, res, next) => {
    const AuthHeader = req.headers.authorization;
   
    if (AuthHeader) {
      const token = AuthHeader.split(" ")[1];
  
      jwt.verify(token, process.env.accessToken, (err, data) => {
     
        if (err) {
          console.log(err);
          res.status(401).json({ message: "Unauthorized" });
        } else {
          
          req.LoggeDInUser = data;
          next();
        }
      });
    } else {
      res.status(401), json({ message: "Unauthorized" });
    }
  };
  module.exports = JWTvarify;