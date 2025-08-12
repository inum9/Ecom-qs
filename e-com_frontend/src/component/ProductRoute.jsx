
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
    const { authUser } = useAuth();

    if (!authUser || authUser.role !== role) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;