import React from "react";
import Image from "next/image";

function Footer() {


  return (

    
    <footer className="bg-Footer bg-cover bg-local footer-center p-3  text-primary-content">
       
    <div>
    <Image 
              width={80}
              height={80}
              src="/images/TUMLOGO.png"
              objectFit="cover"
              alt="logo"
              className="fill-current"
            />
      <p className="font-bold">
        T-Dragon design TH. <br/>Providing reliable tech since 2020
      </p> 
      <p>Copyright © 2023 - All right reserved</p>
    </div> 
    <div>
    </div>
  </footer>
  );
}

export default Footer;
