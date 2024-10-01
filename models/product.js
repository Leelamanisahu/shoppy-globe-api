import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    thumbnail:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
        default:0,
    },
    stockQty:{
        type:Number,
        default:0,
    },
    brand:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    }
})

export default model('product',productSchema);