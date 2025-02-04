import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import AddBlog from './pages/Add';
import ListBlogs from './pages/List';
import Subscribers from './pages/Subscribers';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <ToastContainer />
      <Navbar setToken={setToken} />
      
      {/* Fixed margin-top so pages don't overlap navbar */}
      <div className="mt-[100px] px-6 md:px-12 lg:px-24">
        {token === '' ? (
          <Login setToken={setToken} />
        ) : (
          <Routes>
            <Route path="/add" element={<AddBlog token={token} />} />
            <Route path="/list" element={<ListBlogs token={token} />} />
            <Route path="/sub" element={<Subscribers token={token} />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
