import { Schema,model } from "mongoose";

const userSchema = new Schema({
    userName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        select:false,
    }
})

export default model('user',userSchema);