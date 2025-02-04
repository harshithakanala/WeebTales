import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../context/BlogContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(BlogContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
  event.preventDefault();
  try {
    const endpoint = currentState === 'Sign Up' ? '/api/user/register' : '/api/user/login';
    const userData = currentState === 'Sign Up' ? { name, email, password } : { email, password };

    const response = await axios.post(backendUrl + endpoint, userData);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);

      // Redirect to the home page after successful login or signup
      navigate('/');
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};


  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <form
        onSubmit={onSubmitHandler}
        className="w-[90%] sm:max-w-[400px] bg-white/10 backdrop-blur-md border border-gray-700 p-8 rounded-lg shadow-lg flex flex-col gap-5"
      >
        {/* Header Title */}
        <h2 className="text-3xl font-bold text-center">{currentState}</h2>
        <hr className="w-10 mx-auto border-gray-400" />

        {/* Input Fields */}
        {currentState === 'Sign Up' && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-gray-500"
            placeholder="Name"
            required
          />
        )}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-gray-500"
          placeholder="Email"
          required
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-gray-500"
          placeholder="Password"
          required
        />

        {/* Forgot Password & Toggle Login/Signup */}
        <div className="flex justify-between text-sm">
          <p className="cursor-pointer text-gray-400 hover:text-white transition">Forgot Password?</p>
          {currentState === 'Login' ? (
            <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer text-gray-400 hover:text-white transition">
              Create Account
            </p>
          ) : (
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer text-gray-400 hover:text-white transition">
              Login Here
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          className="w-full bg-gradient-to-r from-gray-800 to-black py-3 rounded-md font-semibold text-white hover:scale-105 transition-all"
          type="submit"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
