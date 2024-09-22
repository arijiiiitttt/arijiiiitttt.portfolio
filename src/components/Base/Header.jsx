"use client";
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='items-center p-6 flex justify-between' id='homePg'>
        <div className='flex flex-1 justify-start p-0'>
          <a className='flex flex-row '>
            <img
              src='./Logos/a.svg'
              className='h-12'
              alt='logo'
              onClick={handleImageClick}
            /><h2 className='flex text-center popBlack text-2xl'>rijit</h2>
          </a>
         <a className='flex flex-row'>
          <img src='/Logos/hi.png' className='h-9'></img>
          <p>Hello</p>
         </a>
        </div>

        <ul className='flex flex-row gap-7 text-[20px] font-light'>
          <li><a href='#homePg'>Home</a></li>
          <li><a href='#aboutPg'>About</a></li>
          <li><a href='blog'>Blog</a></li>
          <li><a href='#projectPg'>Projects</a></li>
          <li>
            <a
              href='#contactPg'
              className='hover:bg-black hover:text-white bg-[#ff0000] px-5 py-1 rounded-lg text-white popBold font-normal'>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Header;
