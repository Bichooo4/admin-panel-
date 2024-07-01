import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState('');

  const navLinks = [
    { path: '/dashboard', name: 'Dashboard', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
    { path: '/statistics', name: 'Statistics', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6ZM13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg> },
    { path: '/contact', name: 'Contact', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242M19.75 5.25a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951M19.75 5.25V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg> },
  ];

  return (
    <div className='flex flex-col justify-between h-screen'>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center h-20 bg-[#08619b] rounded-full mb-[15px]'>
          <img
            src='/logo.png'
            alt='logo'
            className='w-90p h-full object-cover mx-5 my-10'
          />
        </div>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            name={link.name}
            to={link.path}
            className={({ isActive }) => {
              isActive && setActiveRoute(link.name);
              return `relative flex justify-center items-center h-16 rounded-l-[100px] mb-2 ${isActive
                  ? 'bg-white ml-7'
                  : ''
                }`
            }}
          >
            {link.icon && (
              <div className='mr-2'>{link.icon}</div>
            )}
            {activeRoute === link.name && (
              <>
                <div className='before:absolute before:top-[-30px] before:right-0 before:w-[30px] before:h-[30px] before:bg-[#08619b]  before:rounded-br-[15px] before:shadow-[10px_5px_0px_0px_rgba(255,255,255,1)]'></div>
                <div className='after:absolute after:bottom-[-30px] after:right-0 after:w-[30px] after:h-[30px] after:bg-[#08619b] after:rounded-tr-[15px] after:shadow-[10px_-5px_0px_0px_rgba(255,255,255,1)]'></div>
              </>
            )}
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className='flex justify-center items-center h-16 bg-[#08619b]'>
        <h1 className='text-white text-2xl'>Footer</h1>
      </div>
    </div>
  );
};

export default Navbar;
