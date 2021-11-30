const router = require("express").Router();
const User = require("../Models/User.js");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

//REGISTER
router.post("/register", async (req, res) => {
  const {email , password} = req.body

  const newUser = new User({
   
    email: email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString(),
  });
  const existUserByMail = await User.findOne({ email});
  if(existUserByMail) return res.status(400).json("There is a registered user with this email address.");
  console.log(newUser) 
  try {    
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);    
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  const { email, password} = req.body;
  try {
    const user = await User.findOne( {email} );
    if(!user) return res.status(404).json("User doesn't exist!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (originalPassword !== password) return res.status(400).json("Password is not matching!");

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY , { expiresIn: "5d" });

    res.status(200).json({ result: user, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
});



module.exports = router;