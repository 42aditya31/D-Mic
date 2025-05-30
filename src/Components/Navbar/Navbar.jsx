import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/D-MIC Logo.png";

const Navbar = () => {
  return (
    <nav className="w-full top-0 bg-white shadow-md px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Logo and Branding */}
      <div className="flex items-center justify-between">
        <div className="text-3xl flex items-center gap-3 font-bold text-gray-700 tracking-wide">
          <img className="h-12" src={logo} alt="logo" />D
          <span className="text-black">-Mic</span>
        </div>
      </div>

      {/* Navigation Links and Button */}
      <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-6">
        <ul className="flex flex-col md:flex-row items-center gap-6 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600 transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600 transition"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600 transition"
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>

        {/* Improved Button */}
        <Link to="/signup">
          <button className="mt-3 md:mt-0 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold text-sm shadow-md hover:bg-blue-700 transition">
            Log Out
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
