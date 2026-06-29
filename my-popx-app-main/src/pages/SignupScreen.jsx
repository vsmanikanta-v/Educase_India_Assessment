import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupScreen = () => {
    const navigate = useNavigate();
    const [isAgency, setIsAgency] = useState('Yes');

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-left">Create your PopX account</h1>
            <form onSubmit={(e) => { e.preventDefault(); navigate('/profile'); }}>
                <div className="relative mb-5">
                    <label className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-indigo-600">Full Name<span className="text-red-600">*</span></label>
                    <input type="text" placeholder="Marry Doe" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <div className="relative mb-5">
                    <label className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-indigo-600">Phone number<span className="text-red-600">*</span></label>
                    <input type="tel" placeholder="Marry Doe" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <div className="relative mb-5">
                    <label className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-indigo-600">Email address<span className="text-red-600">*</span></label>
                    <input type="email" placeholder="Marry Doe" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <div className="relative mb-5">
                    <label className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-indigo-600">Password<span className="text-red-600">*</span></label>
                    <input type="password" placeholder="Marry Doe" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                </div>
                <div className="relative mb-5">
                    <label className="absolute -top-2.5 left-2 bg-white px-1 text-xs text-indigo-600">Company name</label>
                    <input type="text" placeholder="Marry Doe" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="mb-5">
                    <p className="text-sm text-gray-700 mb-2 text-left">Are you an Agency?<span className="text-red-600">*</span></p>
                    <div className="flex items-center">
                        <label className="flex items-center mr-4">
                            <input type="radio" name="agency" value="Yes" checked={isAgency === 'Yes'} onChange={() => setIsAgency('Yes')} className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                            <span className="ml-2 text-sm">Yes</span>
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="agency" value="No" checked={isAgency === 'No'} onChange={() => setIsAgency('No')} className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                            <span className="ml-2 text-sm">No</span>
                        </label>
                    </div>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold mt-2 transition hover:bg-indigo-700">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignupScreen;
