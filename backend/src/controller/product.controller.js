import Product from '../model/product.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';

// Sirf merchant hi product create kar sakta hai
const createProduct = asyncHandler(async (req, res) => {
    const { name, category, price, location } = req.body;
   if(!(name||category||price||location))
   {
    throw new ApiError(401,"fill all the details  ");
   }
    const merchantId = req.user._id;
    if(!merchantId)
    {
        throw new ApiError(401,"merchantid is not valid!!");
    }

    const product = await Product.create({
        name,
        category,
        price,
        location,
        merchant: merchantId
    });

    return res.status(201).json(new ApiResponse(201, product, "Product created successfully"));
});

// Har koi products dekh sakta hai
const getAllProducts = asyncHandler(async (req, res) => {
    // Abhi ke liye, hum filtering ko simple rakhte hain
    const products = await Product.find({});
    return res.status(200).json(new ApiResponse(200, products, "Products fetched successfully"));
});

export { createProduct, getAllProducts };