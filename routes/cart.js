import express from "express";
import { addToCart, emptyCart, getCart, increaseCart, removeProduct } from "../controllers/cart.js";
import { authenticationUser } from "../middleware/Verification.js";

const cartRouter = express.Router();


cartRouter.post("/add-cart",authenticationUser,addToCart)
cartRouter.put("/increase",authenticationUser,increaseCart)
cartRouter.get("/get",authenticationUser,getCart)
cartRouter.delete("/remove/:id",authenticationUser,removeProduct)
cartRouter.delete("/delete/:id",authenticationUser,emptyCart)



export default cartRouter;