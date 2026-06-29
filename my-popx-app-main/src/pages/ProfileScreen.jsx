import React from 'react';
import { CameraIcon } from '../components/Icons';


const ProfileScreen = () => {
    return (
        <div className="bg-gray-100 h-full">
            <div className="p-6 bg-gray-100 h-full">
            <h1 className="text-3xl font-light mb-6 text-left bg-white p-4">Account Settings</h1>
            <div className="flex items-center mb-6">
                <div className="relative mr-4">
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-gray-200"
                    />
                    <div className="absolute bottom-1 right-1 bg-indigo-600 rounded-full p-1.5 cursor-pointer">
                        <CameraIcon />
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Marry Doe</h2>
                    <p className="text-gray-500">marry@gmail.com</p>
                </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.
            </p>
            <hr className="border-t border-dashed border-gray-300" />
        </div>
            <div className="flex items-center mb-6">
                <div className="relative mr-4">
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-gray-200"
                    />
                    <div className="absolute bottom-1 right-1 bg-indigo-600 rounded-full p-1.5 cursor-pointer">
                        <CameraIcon />
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Marry Doe</h2>
                    <p className="text-gray-500">marry@gmail.com</p>
                </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.
            </p>
            <hr className="border-t border-dashed border-gray-300" />
        </div>
    );
};

export default ProfileScreen;
