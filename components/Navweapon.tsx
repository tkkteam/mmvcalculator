import React from "react";
import Themes from "./Themes";
import Link from "next/link";

const Navweapon = () => {
  return (
    
    <nav className="navbar bg-base-100 sticky top-0 z-50 flex space-x-2 shadow-lg">
    <div className="hover:opacity-50">
       <Link href="/weapon/guideweapon" passHref>
       <div className="flex select-none space-x-1 text-gray-700">
        <button className="rounded-md bg-gray-200 px-4 py-2 transition duration-300 hover:bg-gray-400"> Previous </button>
      </div>
              </Link>
              </div>
              
              <div className="flex flex-1 ml-2 space-x-2">
        <span className="select-none font-medium  text-center ">MMV Calculator Thailand</span>
      </div>
      <Themes/>
        </nav>
  );
};
export default Navweapon;

