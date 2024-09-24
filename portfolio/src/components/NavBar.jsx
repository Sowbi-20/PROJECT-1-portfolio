import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom

const Navbar = ({ appname }) => {
  console.log(appname);
  return (
    <>
      <div className="w-full h-[10vh] grad-blue-bg p-6 text-white md:font-extrabold flex justify-start items-center gap-4">
        {appname}
        <div className="flex gap-4"></div>
        {/* Navigation Links */}
        <nav className="flex gap-5 ml-auto">
          <div className="w-full h-[3vh] grad-blue-bg p-6 text-white flex justify-start items-center gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `grad-blue-bg text-white px-4 py-2 rounded ${
                  isActive ? "border-b-2  border-white" : ""
                } hover:grad-blue-bg`
              }
            >
              Profile
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `grad-blue-bg text-white px-4 py-2 rounded ${
                  isActive ? "border-b-2 border-white" : ""
                } hover:grad-blue-bg`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `grad-blue-bg text-white px-4 py-2 rounded ${
                  isActive ? "border-b-2 border-white" : ""
                } hover:grad-blue-bg`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `grad-blue-bg text-white px-4 py-2 rounded ${
                  isActive ? "border-b-2 border-white" : ""
                } hover:grad-blue-bg`
              }
            >
              Login
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
