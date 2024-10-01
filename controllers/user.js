import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req,res,next)=>{
    try {
        const {userName,email,password} = req.body;
        const hasPassword = bcryptjs.hashSync(password);
        const user = new User({
            userName,
            email,
            password:hasPassword
        })
       await user.save();
       return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const login = async(req,res,next)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email}).select("+password");
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const passCheck = bcryptjs.compareSync(password,user.password);
        if(!passCheck){
            return res.status(400).json({message:"Password Missmatch"});
        }
        const token = jwt.sign({id:user._id},"SECRETEKEY",{expiresIn:"15m"})
        
        return res.status(200).json({ _id: user._id,
            email: user.email,
            userName: user.userName,
        token:token,
        });
    } catch (error) {
        return res.status(500).json(error);
    }
}
