import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container- mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl">
          BATEM News
        </a>
        <ul className="flex space-x-4">
          
          <li>
            <a href="/" className="text-white hover:underline">
              GENERAL
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:underline">
              BUSİNESS
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:underline">
              SPORTS
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:underline">
              TECHNOLOGY
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:underline">
              HEALTH
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:underline">
              SCİENCE
            </a>
          </li>
          <li>
            <a href="/" className="text-white hover:underline">
            ENTERTAİNMENT
            </a>
          </li>
        </ul>
        <ul className="flex gap-4 text-white">
        <li>
        <div className="button-special text-black font-mono  w-24 h-50 border rounded-full ... text-center bg-white border-b-indigo-800">
        <a href="/" >
         GİRİŞ YAP
          </a>
        </div>
       
        </li>  
        <li>     
        <div className="button-special text-black font-mono hover:underline w-20 h-50 border rounded-full ... text-center bg-white border-b-indigo-800">
        <a href="/Sign" >
         ÜYE OL
          </a>
        </div>
        </li> 
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
