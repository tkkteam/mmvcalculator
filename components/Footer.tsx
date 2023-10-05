import React from "react";
import Image from "next/image";
import {  Button, Modal } from "flowbite-react";
import {useState } from "react";

function Footer() {

  const [openModal, setOpenModal] = useState<string | undefined>();
  const [modalSize, setModalSize] = useState<string>("sm");
  const props = { modalSize, openModal, setModalSize, setOpenModal };

  return (

    
    <footer className="bg-Footer bg-cover bg-local footer-center p-3  text-primary-content">
       
    <div>
    <Image 
              width={150}
              height={150}
              src="/images/TKKSERVICE.png"
              objectFit="cover"
              alt="logo"
              className="fill-current"
            />
             <div className="flex flex-wrap gap-4  items-center justify-center">
        
        <Button className="text-yellow-400 bg-black" onClick={() => props.setOpenModal("size")}>สนับสนุนนักพัฒนา.</Button>
      </div>
      <Modal show={props.openModal === "size"} size={props.modalSize} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header className="text-black" >ขอบคุณสำหรับ Donate.</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6  ">
          <p className="border-2 border-indigo-600 text-lg text-center leading-relaxed text-red-400 "> ต้องการสนับสนุนนักพัฒนาเว็บไซต์ MMV Calculator  </p>
             <p className=" leading-relaxed text-green-600" >BitkubNEXT Wallet : 0831100612 </p>
             <p className=" leading-relaxed text-blue-600">KUB -LUMI -USDT -TOKEN -NFT</p>
          
          </div>
        </Modal.Body>
      </Modal>
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
