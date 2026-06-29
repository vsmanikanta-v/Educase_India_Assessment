import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import the main layout/frame component from App.jsx
import App from './App.jsx';

// Import all the page components
import LandingScreen from './pages/LandingScreen.jsx';
import LoginScreen from './pages/LoginScreen.jsx';
import SignupScreen from './pages/SignupScreen.jsx';
import ProfileScreen from './pages/ProfileScreen.jsx';

// Import the main CSS file
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* This tells the router to use your App component as the layout for all nested pages */}
        <Route path="/" element={<App />}>
          {/* This is the default page that will show up inside the frame */}
          <Route index element={<LandingScreen />} />

          {/* These are the other pages you can navigate to */}
          <Route path="login" element={<LoginScreen />} />
          <Route path="signup" element={<SignupScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

