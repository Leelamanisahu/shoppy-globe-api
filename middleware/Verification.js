import jwt from "jsonwebtoken";

export const authenticationUser = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    jwt.verify(token,"SECRETEKEY",(err,user)=>{
        if(err){
            return res.status(403).json({message:"Invalid JWT token"})
        }
        req.user = user;
        next();
    })
}