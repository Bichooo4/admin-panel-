import React from 'react';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/DashBoard';
import Statistics from '../pages/Statistics';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouters  = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouters;