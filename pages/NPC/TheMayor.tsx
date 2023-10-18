import React from "react";
import NavNpc from "../../components/NavNpc";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Space, Tooltip } from "antd";


function TheMayor() {
    const colors = [
        "pink",
      ];
  return (
    <div className="bg-npc bg-cover flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>แนะนำ NPC</title>
      </Head> 
      <NavNpc />
      <div className="xl:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className= "p-2 text-2xl  flex items-center justify-center">
            <Image 
             width={150}
             height={150}
             src="/npc/Themayor.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
          /> 
        </div>
        <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">ยินดีต้อนรับเข้าสู่ร้าน THE Mayor Shop</h1>
      </div>
        <div className="grid  grid-cols-2 gap-2 min-h-screen">
  <div className="flex-1">
  <div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-1">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Empty Bottle.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-1" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor หรือ จากการตกปลา</p>
    <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
    <p className="text-yellow-600">ใช้สำหรับทำยา</p>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/Empty Bottle.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Empty Bottle</p>   
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-2">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Health Potion.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-2" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 50 HP</p>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/Health Potion.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Health Potion</p>   
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-3">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Magic Solution.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ได้จากการตกปลา</p>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/Magic Solution.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Magic Solution</p>   
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-4">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Bulky.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor</p>
    <button className="btn">
        <Link href="/tutorials/egg">
        <a target="_blank">ไอเท็มดรอปจากไข่
        </a>
        </Link>
    </button>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/Bulky.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
    </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Bulky EGG</p>
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-5">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/MorningBox.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor</p>
    <button className="btn">
        <Link href="/GiftBox/box">
        <a target="_blank">ไอเท็มดรอปจากกล่อง
        </a>
        </Link>
    </button>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/MorningBox.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Morning Box</p>   
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-6">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Breeding foam.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
    <p className="text-yellow-600">ใช้เพื่อผสม Ozzy Ozzy</p>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/Breeding foam.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Breeding foam</p>   
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-7">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/BRONZE HATCHET.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-7" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor</p>
    <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Wood chopping Damage +2 to +3</p>
    <button className="btn">
        <Link href="/weapon/PremiumAxe">
        <a target="_blank">การตีบวกอุปกรณ์
        </a>
        </Link>
    </button>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/BRONZE HATCHET.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">BRONZE HATCHET</p>   
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-8">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/BRONZE MACE.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-8" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-8" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor</p>
    <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Smashing  Damage +2 to +3</p>
    <button className="btn">
        <Link href="/weapon/PremiumClub">
        <a target="_blank">การตีบวกอุปกรณ์
        </a>
        </Link>
    </button>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/BRONZE MACE.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">BRONZE MACE</p>   
</div>

      </div>
  <div className="flex-1">
  <div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-9">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Lesser Health Potion.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-9" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-9" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 20 HP</p>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/Lesser Health Potion.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Lesser Health Potion</p>
                
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-10">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/key.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-10" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-10" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
    <p className="text-yellow-600">เปิดกล่องที่พบในป่า</p>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/key.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Silver Key</p>
                
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-11">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/AngelicBox.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-11" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-11" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor</p>
    <button className="btn">
        <Link href="/GiftBox/box">
        <a target="_blank">ไอเท็มดรอปจากกล่อง
        </a>
        </Link>
    </button>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/AngelicBox.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Angelic Box</p>
                
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-12">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/GemstoneBox.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-12" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-12" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor</p>
    <button className="btn">
        <Link href="/GiftBox/box">
        <a target="_blank">ไอเท็มดรอปจากกล่อง
        </a>
        </Link>
    </button>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/GemstoneBox.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Gemstone Box</p>
                
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-13">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/mangosteen.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-13" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-13" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor หรือ หาได้จากในป่า</p>
    <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600"> ฟื้นฟู 30 Energy</p>
   
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/mangosteen.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Mangosteen</p>
                
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-14">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Breeding Elixir.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-14" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-14" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor</p>
    <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
    <p className="text-yellow-600">ใช้เพื่อผสม Logky-Logy</p>
   
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/Breeding Elixir.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">Breeding Elixir</p>
                
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-15">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/BRONZE MAUL.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-15" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-15" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor</p>
    <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Rock Breaking Damage +2 to +3</p>
    <button className="btn">
        <Link href="/weapon/PremiumHammer">
        <a target="_blank">การตีบวกอุปกรณ์
        </a>
        </Link>
    </button>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/BRONZE MAUL.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">BRONZE MAUL</p>
                
</div>
<div className="flex items-center p-3 bg-slate-200 hover:bg-gray-800 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-yellow-500">
          <label htmlFor="my-modal-16">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/SIMPLE CAPE.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-16" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-16" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">แหล่งที่มา</h3>
    <p className="text-yellow-600">ซื้อได้ที่ The Mayor</p>
    <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">All Energy cost -4% to -2%</p>
    <button className="btn">
        <Link href="/weapon/PremiumCloak">
        <a target="_blank">การตีบวกอุปกรณ์
        </a>
        </Link>
    </button>
    <p className="py-4"> 
    <Image 
             width={150}
             height={150}
             src="/token/SIMPLE CAPE.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
            </p>
    </div>
  </div>   
  </div>
  <p className="p-6 truncate hover:text-clip text-black">SIMPLE CAPE</p>
                
</div>

</div>
</div>
            </div>
            </div>

  )
}

export default TheMayor
