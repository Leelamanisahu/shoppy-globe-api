import express from 'express';
import { login, register } from '../controllers/user.js';


const userRouter = new express();

userRouter.post("/register",register)
userRouter.post("/login",login)

export default userRouter;