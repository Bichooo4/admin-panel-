import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
    return (
        <div className='flex bg-[#08619b] overflow-hidden'>
          <div className='w-1/6 h-screen bg-[#08619b]'>
            <Navbar />
          </div>
          <div className='flex-1 bg-white rounded-l-[30px]'>
            welcome to contact
          </div>
        </div>
      );
};

export default Contact;
