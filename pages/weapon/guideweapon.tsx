import React from "react";
import Nav from "../../components/Nav";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";


 function Guideweapon() {
  return (

    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>แนะนำการตีบวกอุปกรณ์- MorningMoon Village</title>
      </Head> 
      <Nav />
      <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
      
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className=" w-72 h-120 shadow-md border-2 rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold">BRONZE HATCHET</h2>
    <div className="badge badge-primary">Common</div>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/BRONZE HATCHET.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="card-body">
      <div className=" text-center">
      <h2 className="font-semibold">THE MAYOR</h2>
      <Link href="/weapon/PremiumAxe" passHref>
      <button className="btn btn-primary">ดูไอเท็มที่ใช้ตีบวก [Lv.1-Lv.7]</button>
      </Link>
      </div>
      </div>
 </div>
</div>
<div className="w-72 h-130 shadow-md border-2 rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold">BRONZE MAUL</h2>
    <div className="badge badge-primary">Common</div>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/BRONZE MAUL.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="card-body">
      <div className=" text-center">
      <h2 className="font-semibold">THE MAYOR</h2>
      <Link href="/weapon/PremiumHammer" passHref>
      <button className="btn btn-primary">ดูไอเท็มที่ใช้ตีบวก [Lv.1-Lv.7]</button>
      </Link>
      </div>
      </div>
 </div>
</div>
<div className="w-72 h-130 shadow-md  border-2 rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold">BRONZE MACE</h2>
    <div className="badge badge-primary">Common</div>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/BRONZE MACE.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="card-body">
      <div className=" text-center">
      <h2 className="font-semibold">THE MAYOR</h2>
      <Link href="/weapon/PremiumClub" passHref>
      <button className="btn btn-primary">ดูไอเท็มที่ใช้ตีบวก [Lv.1-Lv.7]</button>
      </Link>
      </div>
      </div>
 </div>
</div>
<div className="w-72 h-130 shadow-md  border-2 rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold">SIMPLE CAPE</h2>
    <div className="badge badge-primary">Rare</div>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/SIMPLE CAPE.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="card-body">
      <div className=" text-center">
      <h2 className="font-semibold">THE MAYOR[200LUMI]</h2>
      <Link href="/weapon/PremiumCloak" passHref>
      <button className="btn btn-primary">ดูไอเท็มที่ใช้ตีบวก [Lv.1-Lv.7]</button>
      </Link>
      </div>
      </div>
 </div>
</div>
<div className="w-72 h-130 shadow-md  border-2 rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold">Leather Boots</h2>
    <div className="badge badge-primary">Rare</div>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/Leather Boots.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="card-body">
      <div className=" text-center">
      <h2 className="font-semibold">THE MAYOR[200LUMI]</h2>
      <Link href="/weapon/PremiumLeatherBoots" passHref>
      <button className="btn btn-primary">ดูไอเท็มที่ใช้ตีบวก [Lv.1-Lv.7]</button>
      </Link>
      </div>
      </div>
 </div>
</div>
<div className="w-72 h-130 shadow-md  border-2 rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold">Steel Treads</h2>
    <div className="badge badge-primary">Epice</div>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/Steel Treads.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="card-body">
      <div className=" text-center">
      <h2 className="font-semibold">THE MAYOR[200LUMI]</h2>
      <Link href="/weapon/SteelTreads" passHref>
      <button className="btn btn-primary">ดูไอเท็มที่ใช้ตีบวก [Lv.1-Lv.7]</button>
      </Link>
      </div>
      </div>
 </div>
</div>
<div className="w-72 h-130 shadow-md  border-2 rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold">Iron Gauntlets</h2>
    <div className="badge badge-primary">Rare</div>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/Iron Gauntlets.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="card-body">
      <div className=" text-center">
      <h2 className="font-semibold">THE MAYOR[200LUMI]</h2>
      <Link href="/weapon/IronGauntlets" passHref>
      <button className="btn btn-primary">ดูไอเท็มที่ใช้ตีบวก [Lv.1-Lv.7]</button>
      </Link>
      </div>
      </div>
 </div>
</div>
<div className="w-72 h-130 shadow-md  border-2 rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold">Leather Mitts</h2>
    <div className="badge badge-primary">Rare</div>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/Leather Mitts.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="card-body">
      <div className=" text-center">
      <h2 className="font-semibold">THE MAYOR[200LUMI]</h2>
      <Link href="/weapon/LeatherMitts" passHref>
      <button className="btn btn-primary">ดูไอเท็มที่ใช้ตีบวก [Lv.1-Lv.7]</button>
      </Link>
      </div>
      </div>
 </div>
</div>
<div className="w-72 h-130 shadow-md  border-2 rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold">ตีบวกเบ็ดตกปลา</h2>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/Bait/Bait.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="card-body">
      <div className=" text-center">
      <h2 className="font-semibold">Bait</h2>
      <Link href="/Bait/Weaponfish" passHref>
      <button className="btn btn-primary">ดูไอเท็มที่ใช้ตีบวก [Lv.1-Lv.7]</button>
      </Link>
      </div>
      </div>
 </div>
</div>
 








         </div> 
             </div>   
                </div>
  );
};
export default Guideweapon;
