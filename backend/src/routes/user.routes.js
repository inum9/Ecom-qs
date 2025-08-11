import {Router} from "express"
import { loginUser, logoutUser, registerUser } from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/Auth.middleware.js";


const userRoutes= Router();
userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").post(loginUser);

///secured routes
///secured routes
userRoutes.route("/logout").post(verifyJWT, logoutUser);
export {userRoutes};