import { Schema, model } from 'mongoose';


const cartItemSchema = new Schema({
  product: { 
    type: Schema.Types.ObjectId, 
    ref: 'product', // Refers to the Product model
    required: true 
  },
  quantity: { 
    type: Number, 
    default:1,
    min: 1 
  }
});

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Refers to the User model
    required: true
  },
  items: [cartItemSchema], // Array of cart items
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Cart = model('Cart', cartSchema);
export default Cart;
