import React from 'react';
import { Outlet } from 'react-router-dom';

// This component provides the mobile phone frame for all pages
const Layout = () => {
  return (
    <center>
    <div className="bg-gray-200 min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-[428px] h-[926px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        <main className="flex-grow overflow-y-auto">
          {/* Child routes (your pages) will be rendered here */}
          <Outlet />
        </main>
      </div>
    </div>
    </center>
  );
};

export default Layout;
