import React from "react";
import Themes from "./Themes";
import Image from "next/image";
import Link from "next/link";
const Navbarback = () => {
  return (
    
    <nav className="navbar bg-base-100 sticky top-0 z-50 flex space-x-2 shadow-lg">
       <div className="flex flex-1 ml-2 space-x-2">
       <div className="aspect-square flex flex-col items-center justify-center w-10 h-10">
        <Link href="/" passHref>
          <Image
            src="https://commumorning.firebaseapp.com/icons/home.png"
            alt="mmv-logo"
            width={40}
            height={40}
          />
          </Link>
        </div>
        <span className="select-none font-[Anakotmai]">โปรแกรมคำนวณผลผลิตในฟาร์ม MorningMoon Village</span>
      </div>
      <Themes/>
    </nav>
  );
};
export default Navbarback;

