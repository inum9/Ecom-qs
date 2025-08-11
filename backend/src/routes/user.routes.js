import {Router} from "express"
import { loginUser, logoutUser, registerUser } from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/Auth.middleware.js";
import { app } from "../app.js";

const userRoutes= Router();
userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").get(loginUser);

///secured routes
userRoutes.route("/logout",verifyJWT,logoutUser)
export {userRoutes};