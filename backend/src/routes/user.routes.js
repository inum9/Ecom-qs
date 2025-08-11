import {Router} from "express"
import { loginUser, registerUser } from "../controller/user.controller.js";

const userRoutes= Router();
userRoutes.route("/register").post(registerUser);
userRoutes.route("/login").get(loginUser);
export {userRoutes};