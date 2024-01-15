import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import Homepage from './pages/Homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import LoginPage from "./pages/LoginPage";
import AdminRegisterPage from './pages/admin/AdminRegisterPage';

function App() {

  const { currentRole } = useSelector(state => state.user);
  
  return (
    <Router>
      {/* Home */}
      {currentRole === null &&
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path='*' element={<Navigate to="/" />} />
          
          <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
          <Route path="/Adminregister" element={<AdminRegisterPage />} />

        </Routes>
      }

      {/* Admin */}
      {currentRole === "Admin" &&
        <AdminDashboard />
      }
      
    </Router>
  );
}

export default App;
