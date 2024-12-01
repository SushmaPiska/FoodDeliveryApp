import User from "../models/user.model.js";

import bcryptjs from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import { validationResult } from "express-validator";


export const signup = async(req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user=await User.findOne({email})
    if(user){
        console.log("User already exists")
        return res.status(400).json({error:"Username already exists"})
    }

    const salt=await bcryptjs.genSalt(10);
    const hashedPassword=await bcryptjs.hash(password,salt);

    const newUser=new User({
        name, phone, email, 
        password:hashedPassword
    })
    if(newUser){
      generateTokenAndSetCookie(newUser._id, res);
        await newUser.save()

        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          });
    }else{
        res.status(400).json({error:"Invalid user data"})
    }

  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "signup error" });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    const token = generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (error) {
    console.log("Error in login controller ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateProfile=async(req,res)=>{
  try {
    const { id } = req.params;
    const { name, email, gender, country } = req.body;

    
    let user = await User.findById(id);
    console.log(user);
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    user = await User.findByIdAndUpdate(
      id,
      { name, email, gender, country },
      { new: true }
    );

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "user not updated" });
  }
}