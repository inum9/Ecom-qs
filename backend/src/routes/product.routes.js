import { Router } from "express";
import { verifyJWT } from "../middleware/Auth.middleware.js";
import { createProduct,getAllProducts } from "../controller/product.controller.js";
const productRoutes=Router();
productRoutes.route("/create-product").post(verifyJWT,createProduct);
productRoutes.route("/").get(verifyJWT,getAllProducts);

export {productRoutes};