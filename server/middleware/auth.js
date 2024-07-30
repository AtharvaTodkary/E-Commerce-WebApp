const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    try {
        //take the auth token/header for a user
        const token = req.header("Authorization");
        if(!token) return res.status(400).json({msg:"Invalid Integration"});

        //check if the token is valid and not expired
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
            
            if(err) return res.status(400).json({msg:"Invalid Authentication"});
            req.user = user;
            next();
        })
    } catch (error) {
        return res.status(500).json({msg:error.message});
    }
}

module.exports = auth;