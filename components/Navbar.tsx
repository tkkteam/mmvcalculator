import React from "react";
import Themes from "./Themes";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    
    <nav className="navbar bg-base-100 sticky top-0 z-50 flex space-x-2 shadow-lg">
      <div className="flex flex-1 ml-2 space-x-2">
       <div className="aspect-square flex flex-col items-center justify-center w-10 h-10">
          <Image
            src="https://commumorning.firebaseapp.com/icons/mmv_logo.png"
            alt="mmv-logo"
            width={40}
            height={40}
          />
         
        </div>
        <span className="select-none font-[Anakotmai]">MMV Calculator Thailand</span>
      </div>
      <Themes/>
    </nav>
  );
};
export default Navbar;

