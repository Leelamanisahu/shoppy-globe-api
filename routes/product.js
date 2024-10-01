import express from "express";
import { getOneProduct, getProduct, updateProduct, uploadProduct } from "../controllers/product.js";
import { authenticationUser } from "../middleware/Verification.js";

const productRouter = express.Router();

productRouter.get("/get",getProduct)
productRouter.get("/get-Product/:id",getOneProduct)
productRouter.post("/add",authenticationUser,uploadProduct)
productRouter.put("/update/:id",updateProduct);


export default productRouter;