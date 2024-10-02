import Cart  from "../models/cart.js";
import Product from "../models/product.js";


// add new procudt in the cart
// if the product were already in the cart then just increase the qunatity by 1,
export const addToCart = async(req,res,next)=>{
    try {
        const userId = req.user.id;
        const {productId} = req.body;
        const prodCheck = await Product.findById(productId);
        if(!prodCheck){
            return res.status(401).json({message:"Product not found"});
        }

        let cart = await Cart.findOne({userId});
        if(cart){
            const productIndex = cart.items.findIndex((item=>item.product.toString() == productId));

            if(productIndex > -1){
                cart.items[productIndex].quantity += 1 ;
            }else{
                cart.items.push({product:productId,quantity:1});
            }
        }else{
            cart = new Cart({
                userId,
                items:[{product:productId}]
            });
        }
        await cart.save();
        const populatedCart = await cart.populate('items.product')
        return res.status(200).json({populatedCart});
    } catch (error) {
        next(error);
    }
}


// increase the qunatity of the cart product by given the extra qunatity
// existing quantity + give quantity
export const increaseCart = async(req,res,next)=>{
        try {
            const userId = req.user.id;
            const {productId,quantity} = req.body;
            const prodCheck = await Product.findById(productId);
            if(!prodCheck){
                return res.status(401).json({message:"Product not found"});
            }
            let cart = await Cart.findOne({userId});
            let productIndex 
            if(cart){
                productIndex  = cart.items.findIndex((item=>item.product.toString() == productId));
    
                if(productIndex > -1){
                    cart.items[productIndex].quantity += quantity ;
                }else{
                    return res.status(401).json({message:"Product were not found in the cart"})
                }
            }
            await cart.save();
            const populatedCart = await cart.populate('items.product');
            return res.status(200).json(populatedCart.items[productIndex]);
        } catch (error) {
            next(error);
        }
}


// get all the details of the cart of the user that has been loged in
export const getCart = async (req, res, next) => {
    try {
      const userId = req.user.id;
        
      // Find the user's cart and populate the product details
      const cart = await Cart.findOne({ userId }).populate('items.product','name price description');
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      res.json(cart);
    } catch (error) {
      next(error);
    }
  };


//   remove specific product from the 
export const removeProduct = async(req,res,next)=>{
    try {
        const userId = req.user.id;
        const productId = req.params.id;
        const cart = await Cart.findOne({userId});
        if(!cart){
            return res.status(401).json({message:"nothing here"})
        }
        let newCart = cart.items.filter((item)=>item.product.toString() != productId);
        cart.items = newCart;
        await cart.save();
        return res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}

// empty the entire cart 
export const emptyCart = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const cart = await Cart.findById(id);
        if(!cart){
            return res.status(401).json({message:"Not found"})
        }
        await Cart.findByIdAndDelete(id);
        return res.status(200).json({message:"Cart is empty now"})
    } catch (error) {
        next(error);
    }
}