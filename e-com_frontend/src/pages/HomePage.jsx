// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import productService from '../services/product.service.js';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productService.getAllProducts();
                setProducts(response.data.data);
            } catch (error) {
                console.error("Failed to fetch products", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <Header />
            <div className="container mx-auto p-8">
                <h1 className="text-3xl font-bold mb-6">Products</h1>
                {loading ? (
                    <div className="text-center">
                        <span className="loading loading-lg loading-spinner"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            // This is a simple product card using daisyUI
                            <div key={product._id} className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p>{product.category}</p>
                                    <p className="text-lg font-semibold">₹{product.price}</p>
                                    <p className="text-sm text-gray-500">{product.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;