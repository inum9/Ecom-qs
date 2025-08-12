// src/App.jsx

import RegisterPage from './pages/Register';
import React from 'react';
import LoginPage from './pages/Login';
import HomePage from './pages/HomePage';
import CreateProductPage from './pages/CreateProductPage';
import ProtectedRoute from './component/ProductRoute';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route 
            path="/create-product" 
            element={
                <ProtectedRoute role="merchant">
                    <CreateProductPage />
                </ProtectedRoute>
            } 
        />
        <Route 
            path="/dashboard" 
            element={
                <ProtectedRoute role="merchant">
                    <CreateProductPage />
                </ProtectedRoute>
            } 
        />
      </Routes>
    </Router>
  );
}

export default App;