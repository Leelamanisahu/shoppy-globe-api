import Product from "../models/product.js";

export const getProduct = async(req,res,next)=>{
    try {
        const product = await Product.find();
        return res.status(200).json(product);
    } catch (error) {
        return res.status(404).json(error)
    }
}


export const getOneProduct = async(req,res,next)=>{
    try {
        const {id} = req.params;
        
        if(!id){
            return res.status(400).json({message:"Invalid Id"})
        }
        const isProduct = await Product.findById(id);
        return res.status(200).json(isProduct);
    } catch (error) {
        return res.status(500).json(error)
    }
}



export const uploadProduct = async(req,res,next)=>{
    try {
        const {name,thumbnail,rating,stockQty,brand,description,price} = req.body;
        const product = Product({
            name,
            thumbnail,
            rating,
            stockQty,
            brand,
            description,
            price
        });
        await product.save();
        return res.status(200).json(product);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export const updateProduct = async(req,res,next)=>{
    try {
        
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Product not found"});
        }
        const newProduct = await Product.findByIdAndUpdate(id,req.body,{new:true});
        return res.status(200).json(newProduct);
    }
    catch (error) {
        return res.status(500).json(error);
    }
} 

