const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Check if the email is already registered
      const user = await Users.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "Email already registered" });

      // Check password length
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Password must be at least 6 characters long" });
      }
      //password encryption
      const passwordHash = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new Users({
        name,
        email,
        password: passwordHash,
      });

      // Save the new user
      await newUser.save();

      //create jwt to authenticate
      const accessToken = createAccessToken({ id: newUser._id });
      const refreshToken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        path: "/user/refresh_token",
      });

      res.json({ accessToken, refreshToken });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  refreshtoken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "Please Login or Registers" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(400).json({ msg: "Please Login or Register" });
        const accesstoken = createAccessToken({ id: user.id });
        res.json({ user, accesstoken });
      });

    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
  },
  login: async(req, res)=>{
    try {
      const {email, password} = req.body;
      //find the user with email
      const user = await Users.findOne({email}) 

      if(!user) return res.status(400).json({msg:"User Does not exist"});
      //If user exist compare the hash password
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) return res.status(400).json({msg:"Incorrect Password"});
      //Establish the access and Refresh token 
      const accesstoken =  createAccessToken({ id: user._id });
      const refreshtoken =  createAccessToken({ id: user._id });

      res.cookie('refreshtoken', refreshtoken,{
        httpOnly: true,
        path: '/user/refresh_token'
      })

      res.json({accesstoken});
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },
  logout: async(req,res)=>{
    try {
      //Destroy the cookies for this session
      res.clearCookie('refreshToken', {path: '/user/refresh_token'})
      return res.json({msg:"Logout Success"});
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  },
  getUser: async(req,res)=>{
    try {
      //find user with id(Id of accesstoken) and dont select password 
      const user = await Users.findById(req.user.id).select('-password');
      //if user not found
      if(!user) return res.status(400).json({msg:"User Not Found"})
      res.json(user);
    } catch (error) {
      return res.status(500).json({msg:error.message})
    }
  }
};



//Function To Create Tokens(Access Token)
const createAccessToken = (payLoad) => {
  return jwt.sign(payLoad, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
//Function To Create Tokens(Access Token)
const createRefreshToken = (payLoad) => {
  return jwt.sign(payLoad, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

module.exports = userCtrl;
