// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/A;

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role 'user'
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        try {
            const response = await authService.register(name, email, password, role);
            setMessage(response.data.message);
           
            navigate('/login');
        } catch (error) {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            setMessage(resMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200">
            <div className="card w-full max-w-sm bg-base-100 shadow-xl">
                <form className="card-body" onSubmit={handleRegister}>
                    <h2 className="card-title justify-center text-2xl">Register</h2>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
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
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Register as</span>
                        </label>
                        <select 
                            className="select select-bordered"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="merchant">Merchant</option>
                        </select>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary" disabled={loading}>
                            {loading && <span className="loading loading-spinner"></span>}
                            Register
                        </button>
                    </div>

                    {message && (
                        <div className="alert alert-info mt-4">
                            <span>{message}</span>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;