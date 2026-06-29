import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6">
            <h1 className="text-3xl font-medium font-bold mb-2 text-left">Signin to your<br /> PopX account</h1>
            <p className="text-gray-500 mb-8 text-left">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
            <form onSubmit={(e) => { e.preventDefault(); navigate('/profile'); }}>
                <div className="relative mb-5">
                    <label className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-indigo-600">Email Address</label>
                    <input type="email" placeholder="Enter email address" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <div className="relative mb-5">
                    <label className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-indigo-600">Password</label>
                    <input type="password" placeholder="Enter password" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold mt-4 transition hover:bg-indigo-700">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginScreen;
