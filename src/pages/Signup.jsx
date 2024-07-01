import axios from 'axios';
import validator from 'validator';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all the fields');
    } else if (!validator.isEmail(email)) {
      setError('Please enter a valid email address');
    } else if (password !== confirmPassword) {
      setError(`Password and confirm password don't match`);
    } else {
      try {
        const response = await axios.post('http://localhost:3000/adminSignup', {
          firstName,
          lastName,
          email,
          password
        });
        console.log(response.data);
        const { user, token } = response.data;
        navigate('/dashboard');
      } catch (error) {
        if (error.response && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError('An unknown error occurred. Please try again');
        }
      }
    }
  };

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(/background.jpg)` }}>
      <div className="absolute top-0 left-0 h-full w-full bg-gray-900 bg-opacity-50 bg-blur-md flex justify-center items-center">
        <div className="p-10 bg-transparent rounded-lg shadow-lg text-white">
          <div className="h-96 flex justify-center items-center">
            <div className="w-full max-w-md rounded-lg overflow-hidden">
              <div className="flex justify-center items-center mb-6">
                <img src="/logo.png" alt="Logo" className="h-20 w-full mr-2" />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="w-full placeholder-white bg-transparent border-b border-gray-400 text-white py-2 px-1 focus:border-indigo-500 focus:outline-none input-field"
                    required
                  />
                </div>
                <div className='mb-4'>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="w-full placeholder-white bg-transparent border-b border-gray-400 text-white py-2 px-1 focus:border-indigo-500 focus:outline-none input-field"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full placeholder-white bg-transparent border-b border-gray-400 text-white py-2 px-1 focus:border-indigo-500 focus:outline-none input-field"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full placeholder-white bg-transparent border-b border-gray-400 text-white py-2 px-1 focus:border-indigo-500 focus:outline-none input-field"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="w-full placeholder-white bg-transparent border-b border-gray-400 text-white py-2 px-1 focus:border-indigo-500 focus:outline-none input-field"
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-xs italic box-border m-2">{error}</p>}
                <div className="mt-6 pb-11">
                  <button
                    type="submit"
                    style={{
                      backdropFilter: 'blur(2px)',
                      transition: 'background-color 0.5s ease',
                    }}
                    className="w-full py-3 px-6 border border-white rounded-md shadow-sm text-white bg-transparent hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Signup
                  </button>
                  <div className="w-full h-0.5 bg-transparent mt-4" style={{ width: '321.300px' }}></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
