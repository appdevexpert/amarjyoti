
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">MRS WOODCRAFT</Link>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-600 hover:text-amber-800">HOME</Link>
          <Link href="/about" className="text-gray-600 hover:text-amber-800">ABOUT US</Link>
          <div className="relative group">
            <button className="text-gray-600 hover:text-amber-800 flex items-center">
              PRODUCTS
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48">
              <Link href="/products/block-board" className="block px-4 py-2 text-gray-600 hover:bg-amber-100">Block Board</Link>
              <Link href="/products/flush-door" className="block px-4 py-2 text-gray-600 hover:bg-amber-100">Flush Door</Link>
              <Link href="/products/plywood" className="block px-4 py-2 text-gray-600 hover:bg-amber-100">Plywood</Link>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-600 hover:text-amber-800 flex items-center">
              SERVICES
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-56">
              <Link href="/services/veneer-customization" className="block px-4 py-2 text-gray-600 hover:bg-amber-100">Veneer Customization</Link>
              <Link href="/services/complete-interiors-solution" className="block px-4 py-2 text-gray-600 hover:bg-amber-100">Complete Interiors Solution</Link>
            </div>
          </div>
          <Link href="/gallery" className="text-gray-600 hover:text-amber-800">GALLERY</Link>
          <Link href="/testimonials" className="text-gray-600 hover:text-amber-800">TESTIMONIALS</Link>
          <Link href="/brands" className="text-gray-600 hover:text-amber-800">BRANDS</Link>
          <Link href="/contact" className="text-gray-600 hover:text-amber-800">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
