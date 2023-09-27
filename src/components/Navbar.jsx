import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          BATEM News
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/spor" className="text-white hover:underline font-bold">
              Spor
            </Link>
          </li>
          <li>
            <Link to="/finans" className="text-white hover:underline font-bold">
              Finans
            </Link>
          </li>
          <li>
            <Link
              to="/politika"
              className="text-white hover:underline font-bold"
            >
              Politika
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
