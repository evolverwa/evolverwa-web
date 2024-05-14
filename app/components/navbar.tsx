"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50   flex items-center justify-between bg-tertiary2 px-50 py-4 border-b border-tertiary2 text-secondary font-poppins text-xl w-full">
      <div className="w-44 py-1.5 mq450:pl-4 pl-10 ">
        <div className="relative h-6 bg-[url('/sitelogo-effects-transparent-1@2x.png')] bg-cover bg-no-repeat">
          <div className="absolute top-1 left-7 w-36 h-4 z-10" />
        </div>
      </div>

      <nav className="mq750:hidden flex items-center gap-8 pt-1.5 pr-10">
        <Link
          href="https://app.gitbook.com/invite/KKhZbH1TU6J2wkCLpbOz/gnOuhOmIiXOOne338PuV"
          className="cursor-pointer hover:text-primary transition-colors duration-200 no-underline  text-secondary "
        >
          Docs
        </Link>
        <span className="cursor-not-allowed hover:text-gray-200 transition-colors duration-200 no-underline text-gray-200 ">
          How to Buy
        </span>
      </nav>

      <button
        className="mq750:flex hidden focus:outline-none mr-4"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <nav className="absolute top-full left-0 right-0 mt-2 py-2 px-4 bg-tertiary2 shadow-lg md:hidden">
          <Link
            href="https://app.gitbook.com/invite/KKhZbH1TU6J2wkCLpbOz/gnOuhOmIiXOOne338PuV"
            className="block cursor-pointer hover:text-primary transition-colors duration-200  no-underline text-secondary"
          >
            Docs
          </Link>
          <Link
            href="https://app.gitbook.com/invite/KKhZbH1TU6J2wkCLpbOz/gnOuhOmIiXOOne338PuV"
            className="block mt-2 cursor-pointer hover:text-primary transition-colors duration-200 no-underline text-secondary"
          >
            How to Buy
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
