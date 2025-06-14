// import React from 'react'

// const Navbar = () => {
//   return (
//    <nav className="navbar">
//        <div className="navbar_container">
//           <Link to="/" className="navlogo">SultaN</Link>
           
//        </div>
//    </nav>
//   )
// }

// export default Navbar

import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full z-50">
      <Link to="/" className="text-2xl font-bold text-teal-600">SocialMate</Link>
      <div className="flex items-center gap-4">
        <FaSearch className="text-gray-600 cursor-pointer" />
        <FaBell className="text-gray-600 cursor-pointer" />
        <Link to="/profile"><FaUserCircle className="text-2xl text-gray-600" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
