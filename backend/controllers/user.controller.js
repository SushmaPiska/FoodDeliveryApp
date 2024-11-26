import User from "../models/user.model.js";

import bcryptjs from 'bcryptjs'

export const signup = async(req, res) => {
  try {
    const { name, phone, email, password } = req.body;

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
