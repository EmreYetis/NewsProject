import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto ">
      <div className="grid-rows-1 grid-cols-3 flex justify-between items-center">
      <div>  <Link to="/" className="text-white text-2xl">
          BATEM News
        </Link></div>
        <div className="hidden md:block">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:underline">
              GENERAL
            </Link>
          </li>
          <li>
            <Link to="/business" className="text-white hover:underline">
              BUSINESS
            </Link>
          </li>
          <li>
            <Link to="/spor" className="text-white hover:underline">
              SPORTS
            </Link>
          </li>
          <li>
            <Link to="/technology" className="text-white hover:underline">
              TECHNOLOGY
            </Link>
          </li>
          <li>
            <Link to="/health" className="text-white hover:underline">
              HEALTH
            </Link>
          </li>
          <li>
            <Link to="/science" className="text-white hover:underline">
              SCIENCE
            </Link>
          </li>
          <li>
            <Link to="/entertainment" className="text-white hover:underline">
              ENTERTAINMENT
            </Link>
          </li>
        </ul>
        </div>
        <div>
        <ul className="flex gap-4 text-white">
          <li>
            <div className="button-special text-black font-mono w-20 h-7 border rounded-full text-center bg-white border-indigo-800">
              <Link to="/pages/Login">
                LOGİN
              </Link>
            </div>
          </li>
          <li>
            <div className="button-special text-black font-mono hover:underline w-20 h-7 border rounded-full text-center bg-white border-indigo-800">
              <Link to="/signup">
                SİGN UP
              </Link>
            
            </div>
          </li>
        </ul>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
