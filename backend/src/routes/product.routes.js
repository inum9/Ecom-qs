import { Router } from 'express';
import { createProduct, getAllProducts } from '../controller/product.controller.js';
import { verifyJWT } from "../middleware/Auth.middleware.js";

const router = Router();

// PUBLIC ROUTE: Anyone can see products. No verifyJWT here.
router.route("/").get(getAllProducts);

// PROTECTED ROUTE: Only logged-in users can create. verifyJWT is here.
router.route("/create").post(verifyJWT, createProduct);

export { router as productRoutes };