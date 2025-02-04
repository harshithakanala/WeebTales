import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--primary-bg)]">
      <div className="bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-md w-[400px]">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Panel</h1>
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="bg-blue-500 text-white py-2 rounded-lg">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
