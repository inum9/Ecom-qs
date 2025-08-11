
import axios from 'axios';

// IMPORTANT: Use your live Render backend URL
const API_URL = "https://ecom-qs.onrender.com/api/v1/products";

const getAllProducts = () => {
    return axios.get(API_URL);
};
const createProduct = (productData, token) => {
    return axios.post(API_URL + "/create", productData, {
        headers: {
            Authorization: `Bearer ${token}` // Protected route ke liye token bhejna zaroori hai
        }
    });
};

const productService = {
    getAllProducts,createProduct
   
};

export default productService;