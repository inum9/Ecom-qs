// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/Auth.services';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const { login } = useAuth(); // AuthContext se login function lein

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        try {
            const data = await AuthService.login(email, password);
            login(data.user, data.accessToken); // Context ko update karein
            // Login hone ke baad, user ko home page par bhej dein
            navigate('/');
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setMessage("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card w-full max-w-sm bg-base-100 shadow-xl">
                <form className="card-body" onSubmit={handleLogin}>
                    <h2 className="card-title justify-center text-2xl">Login</h2>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" disabled={loading}>
                            {loading && <span className="loading loading-spinner"></span>}
                            Login
                        </button>
                    </div>
                    {message && <p className="text-red-500 mt-4 text-center">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default LoginPage;