import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Nav from "../../components/Nav";

 function guide() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>แนะนำเบ็ดตกปลา- MorningMoon Village</title>
      </Head> 
      <Nav />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"> 
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    
    <Link href="/Bait/fishingrod" passHref>
    <a>
    <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/DKZFP11/bait.png"
  
    objectFit="cover"
    alt="Picture of the author"
    className="object-cover w-full h-50 hover:opacity-50"
                />
                </a>
          </Link>
          </div>
      <div className="px-6 py-4">
        <div className="font-bold text-gray-700 text-xl mb-2">เบ็ดตกปลา</div>
        <p className="text-gray-700">ข้อมูลเบ็ดตกปลา คุณสมบัติต่างๆ และสถานที่ตกปลาของเบ็ดแต่ละประเภท</p>
      </div>
        <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#เบ็ดตกปลา</span>
      </div>
    </div>
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  <div className="flex flex-col xl:flex-row shadow hover:shadow-md w-full bg-white rounded-lg overflow-hidden cursor-pointer">
    
    <Link href="/Bait/Bait" passHref>
    <a>
    <Image 
    width={450}
    height={350}
    src="https://i.ibb.co/pdNyh0h/Fishing-Bait.png"
    
    objectFit="cover"
    alt="FishingBait"
    className="object-cover w-full h-50 hover:opacity-50"
                />
                </a>
          </Link>
          </div>
      <div className="px-6 py-4">
        <div className="font-bold text-gray-700 text-xl mb-2">เหยื่อตกปลา</div>
        <p className="text-gray-700">ข้อมูลเหยื่อตกปลา คุณสมบัติต่างๆของเหยื่อตกปลาแต่ละชนิด ตั้งแต่ระดับ Common ถึง Legendary</p>
      </div>
        <div className="px-6 pt-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#เหยื่อตกปลา</span>
      </div>
    </div>
      </div>
      </div>
  
  );
};
export default guide;
