import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-end h-full p-6 text-left">
            <div className="flex-grow"></div>
            <h1 className="text-3xl font-bold mb-2">Welcome to PopX</h1>
            <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
            <button
                onClick={() => navigate('/signup')}
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold mb-3 transition hover:bg-indigo-700"
            >
                Create Account
            </button>
            <button
  onClick={() => navigate('/login')}
  className="w-full bg-purple-700 text-white py-3 rounded-md font-semibold transition hover:bg-purple-800"
>
  Already Registered? Login
</button>

        </div>
    );
};

export default LandingScreen;
