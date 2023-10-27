import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [handleMenu, setHandleMenu] = useState(false);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center gap-2">
        <Link to="/" className="text-white text-2xl">
          <div className="flex">
            <div>
              <button
                className="btn pr-2"
                onClick={() => setHandleMenu(!handleMenu)}
              >
                <i className="fa fa-bars"></i>
              </button>
              <aside
                className={`bg-blue-500  text-white p-6 min-h-screen lg:w-64 lg:block fixed top-0 left-0 transition-transform transform ${
                  handleMenu ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <i
                  className="fa fa-bars mb-7 "
                  onClick={() => setHandleMenu(!handleMenu)}
                ></i>
                <ul>
                  <Link to="/" className="text-white hover:underline">
                    GENERAL
                  </Link>
                  <li className="mb-2">BUSINESS</li>
                  <li className="mb-2">SPORTS</li>
                  <li className="mb-2">TECHNOLOGY</li>
                  <li className="mb-2">HEALTH</li>
                  <li className="mb-2">SCIENCE</li>
                  <li>ENTERTAINMENT</li>
                </ul>
              </aside>
            </div>
            <h1>BATEM News</h1>
          </div>
        </Link>
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
        <ul className="flex gap-4 text-white">
          <li>
            <div className="button-special text-black font-mono w-20 h-7 border rounded-full text-center bg-white border-indigo-800">
              <Link to="/pages/Login">LOGİN</Link>
            </div>
          </li>
          <li>
            <div className="button-special text-black font-mono hover:underline w-20 h-7 border rounded-full text-center bg-white border-indigo-800">
              <Link to="/signup">SİGN UP</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
