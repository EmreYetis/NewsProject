import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          BATEM News
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/spor" className="text-white hover:underline">
              Spor
            </a>
          </li>
          <li>
            <a href="/finans" className="text-white hover:underline">
              Finans
            </a>
          </li>
          <li>
            <a href="/politika" className="text-white hover:underline">
              Politika
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
