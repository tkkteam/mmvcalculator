import React from "react";
import Nav from "../../components/Nav";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Space, Tooltip } from "antd";


function levelup() {

  const colors = [
    'purple',
  ];
    return (

        <div className="bg-npc bg-cover flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
        <Head>
            <title>Companion Level Up</title>
          </Head> 
          <Nav />
          
          <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
          <div className= "p-2 text-2xl  flex items-center justify-center">

          <Link href="https://bit.ly/3Lg9mpP">
  <a target="_blank">
  <Space wrap>
      {colors.map((color) => (
        <Tooltip title="Companion" color={color} key={color}>
           <Image 
             width={150}
             height={150}
             src="/npc/PET.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
        </Tooltip>
      ))}
    </Space>
    </a>
        </Link> 
            </div>
            <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
              <h1 className="text-lg font-medium text-center">Companion Level Up</h1>
          </div>
          <Link href="https://bit.ly/3Lg9mpP">
          <a target="_blank">
          <button className="text-lg btn btn-primary">
            คลิกดู ตารางอัพเวเวลสัตว์เลี้ยง
            </button>
            </a>
            </Link>
          <div className="flex flex-col">
        <div className="flex-1 text-center">
            <Image 
            width={1920}
            height={1920}
            src="https://commumorning.firebaseapp.com/images/petup01.jpg"
            objectFit="cover"
            alt="Companion"
            className=" max-w-full h-auto rounded-lg"
          />
           <Image 
            width={1920}
            height={1920}
            src="https://commumorning.firebaseapp.com/images/petup02.jpg"
            objectFit="cover"
            alt="Companion"
            className=" max-w-full h-auto rounded-lg"
          />
           <Image 
            width={1920}
            height={1920}
            src="https://commumorning.firebaseapp.com/images/petup03.jpg"
            objectFit="cover"
            alt="Companion"
            className=" max-w-full h-auto rounded-lg"
          />
          </div>
          </div>


          </div>
          </div>
  );
};

export default levelup;