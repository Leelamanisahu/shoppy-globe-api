import express from "express";
import mongoose from "mongoose";
import errorHandler from "./utils/errorHandler.js";


// import routers
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import cartRouter from "./routes/cart.js";


const app = new express();

app.use(express.json());

app.use(errorHandler);

app.use("/shopify/product",productRouter);
app.use("/shopify/user",userRouter);
app.use("/shopify/cart",cartRouter);

mongoose.connect('mongodb://localhost:27017/e-commerce')
.then(()=>console.log("Db is connected"))
.catch((err)=>console.log(err))


app.listen(5000,()=>{
    console.log(`Server is running in the port 5000`)
})