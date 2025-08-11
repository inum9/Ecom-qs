// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const { authUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">eComApp</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {authUser ? (
                        <>
                            <li><span>Hi, {authUser.name}</span></li>
                            {authUser.role === 'merchant' && (
                                <li><Link to="/dashboard">Merchant Dashboard</Link></li>
                            )}
                            <li><button onClick={handleLogout} className="btn btn-ghost">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Header;