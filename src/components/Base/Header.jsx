"use client";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between lg:p-6 p-4" id="homePg">
        <div className="flex items-center justify-start flex-1">
          <a className="flex flex-row items-center">
            <img
              src="./Logos/a.svg"
              className="h-12"
              alt="logo"
              onClick={handleImageClick}
            />
            <h2 className="text-2xl popBlack">rijit</h2>
          </a>
          <a className="flex flex-row items-center ml-4">
            <img src="/Logos/hi.png" className="h-9" alt="hi" />
            <p>Hello</p>
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={handleImageClick}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <ul
          className={`flex-col lg:flex lg:flex-row lg:gap-7 lg:text-[20px] font-light absolute lg:static left-0 w-full lg:w-auto lg:h-auto lg:bg-transparent bg-white transition-transform transform ${
            isOpen ? "translate-y-16" : "-translate-y-full"
          } lg:translate-y-0 p-5 lg:p-0 top-0 lg:top-auto lg:justify-end`}
          style={{ justifyContent: isOpen ? "flex-start" : "flex-end" }}
        >
          <li className="my-2 lg:my-0">
            <a href="#homePg">Home</a>
          </li>
          <li className="my-2 lg:my-0">
            <a href="#aboutPg">About</a>
          </li>
          <li className="my-2 lg:my-0">
            <a href="blog">Blog</a>
          </li>
          <li className="my-2 lg:my-0">
            <a href="#projectPg">Projects</a>
          </li>
          <li className="my-2 lg:my-0">
            <a
              href="#contactPg"
              className="hover:bg-black hover:text-white bg-[#ff0000] lg:px-5 lg:py-1 px-3 py-1 rounded-lg text-white popBold font-normal"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
