// src/pages/CreateProductPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productService from '../services/product.service.js';
import Header from '../component/Header';

const CreateProductPage = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                setMessage("You must be logged in to create a product.");
                return;
            }
            await productService.createProduct({ name, category, price, location }, token);
            navigate('/'); 
        } catch (error) {
            setMessage("Failed to create product. Please try again.");
            console.error(error);
        }
    };

    return (
        <div>
            <Header />
            <div className="flex items-center justify-center min-h-screen bg-base-200">
                <div className="card w-full max-w-lg bg-base-100 shadow-xl">
                    <form className="card-body" onSubmit={handleCreateProduct}>
                        <h2 className="card-title justify-center text-2xl">Create New Product</h2>
                        <input type="text" placeholder="Product Name" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="text" placeholder="Category" className="input input-bordered" value={category} onChange={(e) => setCategory(e.target.value)} required />
                        <input type="number" placeholder="Price" className="input input-bordered" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        <input type="text" placeholder="Location" className="input input-bordered" value={location} onChange={(e) => setLocation(e.target.value)} required />
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create Product</button>
                        </div>
                        {message && <p className="text-red-500 mt-2 text-center">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateProductPage;