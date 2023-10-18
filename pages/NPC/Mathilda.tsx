import React from "react";
import NavNpc from "../../components/NavNpc";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Space, Tooltip } from "antd";


function Mathilda() {
    const colors = [
        "green",
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
             src="/npc/Mathilda.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
          /> 
        </div>
        <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">ยินดีต้อนรับเข้าสู่ร้าน Mathilda Shop</h1>
      </div>
<div className="grid  grid-cols-2 gap-2 min-h-screen">
  <div className="flex-1">
<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-1">
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
<input type="checkbox" id="my-modal-1" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 20 HP</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Lesser Health Potion.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Lesser Health Potion</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <p className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-3 ">
      
      <div className="text-black">1X
      <div className="tooltip" data-tip="Empty Bottle">
      <Image width={35}height={35}src="/token/Empty Bottle.png"/></div>
      </div>  
      
      <div className="text-black">2X
      <div className="tooltip" data-tip="Red Herb">
      <Image width={35}height={35}src="/token/RedHerb.png"/></div>
      </div>
    
    
    </div>
    </p>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
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
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Health Potion.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Health Potion (MILK)</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-3">
      
      <div className="text-black">1X
      <div className="tooltip" data-tip="Empty Bottle">
      <Image width={35}height={35}src="/token/Empty Bottle.png"/></div>
      </div>  
      
      <div className="text-black">3X
      <div className="tooltip" data-tip="Milk">
      <Image width={35}height={35}src="/token/milklumi.png"/></div>
      </div>
    
      <div className="text-black">1X
      <div className="tooltip" data-tip="Honey">
      <Image width={35}height={35}src="/token/Honey.png"/></div>
      </div>
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-3">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/corn-soup.png"
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
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 20 Energy</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/corn-soup.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Corn Soup</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1 md:grid-cols-1 ">
      <div className="text-black">10X
      <div className="tooltip" data-tip="corn">
      <Image width={35}height={35}src="/token/corn.png"/></div>
      </div>  
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-4">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/DyeApple.png"
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
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 12 Energy</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/DyeApple.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Dye Apple</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2 ">
      
      <div className="text-black">1X
      <div className="tooltip" data-tip="Red Apple">
      <Image width={35}height={35}src="/token/Apple.png"/></div>
      </div>  
      
      <div className="text-black">1X
      <div className="tooltip" data-tip="Green Apple">
      <Image width={35}height={35}src="/token/GreenApple.png"/></div>
      </div>
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-5">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Honey.png"
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
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 25 Energy</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Honey.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">HONEY</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-4 ">
      
      <div className="text-black">2X
      <div className="tooltip" data-tip="HoneyComb">
      <Image width={35}height={35}src="/token/HoneyComb.png"/></div>
      </div>  
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-6">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Stone Hammer.png"
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
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Rock Breaking Energy cost สูงสุด -10%  ต่ำสุด -6%</p>
    <h3 className=" font-bold text-lg text-green-600">การตีบวก</h3>
    <p className="text-blue-600">+1 ความเสียหายในการทำลายหิน +6%</p>
    <p className="text-blue-600">+2 พลังงานในการทำลายหิน -4%</p>
    <p className="text-blue-600">+3 Open Socket +1</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Stone Hammer.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Stone Hammer</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2 ">
      
      <div className="text-black ">30X
      <div className="tooltip" data-tip="Wood">
      <Image width={35}height={35}src="/token/Wood.png"/></div>
      </div>  
      <div className="text-black">120X
      <div className="tooltip" data-tip="Stone">
      <Image width={35}height={35}src="/token/Stone.png"/></div>
      </div> 
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-7">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Wooden Club.png"
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
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Smashing Energy cost สูงสุด -10%  ต่ำสุด -6%</p>
    <h3 className=" font-bold text-lg text-green-600">การตีบวก</h3>
    <p className="text-blue-600">+1 ความเสียหายในการทุบ +6%</p>
    <p className="text-blue-600">+2 พลังงานในการทุบ -4%</p>
    <p className="text-blue-600">+3 Open Socket +1</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Wooden Club.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Wooden Club</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-4 ">
      
      <div className="text-black">120X
      <div className="tooltip" data-tip="Wood">
      <Image width={35}height={35}src="/token/Wood.png"/></div>
      </div>  
      
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-8">
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
<input type="checkbox" id="my-modal-8" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-8" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
    <p className="text-yellow-600">ใช้เพื่อผสม Ozzy Ozzy</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Breeding foam.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Breeding foam</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2 ">
      
      <div className="text-black">20X
      <div className="tooltip" data-tip="Bubble">
      <Image width={35}height={35}src="/token/Bubble.png"/></div>
      </div>  
      
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-9">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/OtherworldlyBox.png"
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
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
    <p className="text-yellow-600">สุ่มไอเทมต่างๆ สามารถเข้าไปดูได้ที่นี้</p>
    <button className="btn">
        <Link href="/GiftBox/box">
        <a target="_blank">ไอเท็มดรอปจากกล่อง
        </a>
        </Link>
    </button>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/OtherworldlyBox.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">OtherworldlyBox</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2 ">
      
      <div className="text-black">1X
      <div className="tooltip" data-tip="Conjuring Chest">
      <Image width={35}height={35}src="/token/conjuring_chest.png"/></div>
      </div>  
      <div className="text-black">5X
      <div className="tooltip" data-tip="Otherworldly Dust">
      <Image width={35}height={35}src="/token/otherworldly_dust.png"/></div>
      </div> 
    </div>
    </div>
  </div>
</div>
<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-35">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/AquariumII.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-35" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-35" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
    <p className="text-yellow-600">สุ่มไอเทมต่างๆ สามารถเข้าไปดูได้ที่นี้</p>
    <button className="btn">
        <Link href="/GiftBox/box">
        <a target="_blank">ไอเท็มดรอปจากกล่อง
        </a>
        </Link>
    </button>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/AquariumII.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Aquarium II</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2">
      
      <div className="text-black">3X
      <div className="tooltip" data-tip="Aquarium Ticket">
      <Image width={35}height={35}src="/token/aquarium ticket.png"/></div>
      </div> 
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-10">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/OrangeBox.png"
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
    <p className="text-yellow-600">สุ่มไอเทมต่างๆ สามารถเข้าไปดูได้ที่นี้</p>
    <button className="btn">
        <Link href="/GiftBox/box">
        <a target="_blank">ไอเท็มดรอปจากกล่อง
        </a>
        </Link>
    </button>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/OrangeBox.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">OrangeBox (Fish Food)</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2 ">
      
      <div className="text-black">1,000X
      <div className="tooltip" data-tip="Fish Food">
      <Image width={35}height={35}src="/token/fish_food.png"/></div>
      </div>  

    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-11">
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
<input type="checkbox" id="my-modal-11" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-11" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Wood chopping Damage +1</p>
    <p className="text-yellow-600">Wood chopping Energy cost สูงสุด -8% ต่ำสุด -5% </p>
    <h3 className=" font-bold text-lg text-green-600">การตีบวก</h3>
    <p className="text-blue-600">+1 ความเสียหายในการตัดไม้ +6%</p>
    <p className="text-blue-600">+2 พลังงานในการตัดไม้ -4%</p>
    <p className="text-blue-600">+3 Open Socket +1</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/BRONZE HATCHET.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">MATHILDA'S BRONZE HATCHET</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-3 ">
      
      <div className="text-black">200X
      <div className="tooltip" data-tip="Wood">
      <Image width={35}height={35}src="/token/Wood.png"/></div>
      </div>  
      <div className="text-black">30X
      <div className="tooltip" data-tip="Copper">
      <Image width={35}height={35}src="/token/CopperPiece.png"/></div>
      </div>  
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-12">
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
<input type="checkbox" id="my-modal-12" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-12" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Smashing Damage +1</p>
    <p className="text-yellow-600">Smashing Energy cost สูงสุด -8% ต่ำสุด -5% </p>
    <h3 className=" font-bold text-lg text-green-600">การตีบวก</h3>
    <p className="text-blue-600">+1 ความเสียหายในการทุบ +6%</p>
    <p className="text-blue-600">+2 พลังงานในการทุบ -4%</p>
    <p className="text-blue-600">+3 Open Socket +1</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/BRONZE MACE.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">MATHILDA'S BRONZE MACE</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-3 ">
      
      <div className="text-black">100X
      <div className="tooltip" data-tip="Wood">
      <Image width={35}height={35}src="/token/Wood.png"/></div>
      </div>  
      <div className="text-black">100X
      <div className="tooltip" data-tip="Stone">
      <Image width={35}height={35}src="/token/Stone.png"/></div>
      </div>  
      <div className="text-black">30X
      <div className="tooltip" data-tip="Copper">
      <Image width={35}height={35}src="/token/CopperPiece.png"/></div>
      </div>  
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-13">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Silkslipper.png"
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
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Avoiding Exhaust by ต่ำสุด +20%  สูงสุด +25%</p>
    <h3 className=" font-bold text-lg text-green-600">การตีบวก</h3>
    <p className="text-blue-600">+1 โอกาสในการหลีกเลี่ยงสถานะเหนื่อย +6%</p>
    <p className="text-blue-600">+2 Reduce effect of Maim by %6</p>
    <p className="text-blue-600">+3 Open Socket +1</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Silkslipper.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">MATHILDA'S Silk Slippers</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-3 ">
      
      <div className="text-black">30X
      <div className="tooltip" data-tip="Wood">
      <Image width={35}height={35}src="/token/Wood.png"/></div>
      </div>    
      <div className="text-black">30X
      <div className="tooltip" data-tip="leather">
      <Image width={35}height={35}src="/token/leather.png"/></div>
      </div>  
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-14">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Tree branch ring.png"
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
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Wood chopping Damage +1 to +2</p>
    <p className="text-yellow-600">Rock Breaking  Damage +1 to +2</p>
    <p className="text-yellow-600">Smashing Damage +1 to +2</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Tree branch ring.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">MATHILDA'S Tree Branch Ring</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-3 ">
      
      <div className="text-black">30X
      <div className="tooltip" data-tip="Wood">
      <Image width={35}height={35}src="/token/Wood.png"/></div>
      </div>    
      <div className="text-black">10X
      <div className="tooltip" data-tip="HoneyCombr">
      <Image width={35}height={35}src="/token/HoneyComb.png"/></div>
      </div>  
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-15">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/egg/Sky Dotted.png"
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
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
  <p className="text-yellow-600">Hatches info fatty chick</p>
    <p className="text-yellow-600">สุ่มลูกไก่ตัวอ้วน สามารถเข้าไปดูได้ที่นี้</p>
   
    <button className="btn">
        <Link href="/tutorials/egg">
        <a target="_blank">ไอเท็มดรอปจากไข่
        </a>
        </Link>
    </button>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/egg/Sky Dotted.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Sky Dotted Egg</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-6 ">
      
      <div className="text-black">400X
      <div className="tooltip" data-tip="Grass">
      <Image width={35}height={35}src="/token/Grass.png"/></div>
      </div>    
      <div className="text-black">25X
      <div className="tooltip" data-tip="Tomato">
      <Image width={35}height={35}src="/token/Tomato.png"/></div>
      </div> 
      <div className="text-black">50X
      <div className="tooltip" data-tip="corn">
      <Image width={35}height={35}src="/token/corn.png"/></div>
      </div> 
      <div className="text-black">10X
      <div className="tooltip" data-tip="Mangosteen">
      <Image width={35}height={35}src="/token/mangosteen.png"/></div>
      </div> 
      <div className="text-black">1X
      <div className="tooltip" data-tip="Milke Chick">
      <Image width={35}height={35}src="/token/MilkeChick.png"/></div>
      </div>   
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-16">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/egg/Gloomy Dotted.png"
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
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
  <p className="text-yellow-600">Hatches info fatty chick</p>
    <p className="text-yellow-600">สุ่มลูกไก่ตัวอ้วน สามารถเข้าไปดูได้ที่นี้</p>
   
    <button className="btn">
        <Link href="/tutorials/egg">
        <a target="_blank">ไอเท็มดรอปจากไข่
        </a>
        </Link>
    </button>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/egg/Gloomy Dotted.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Gloomy Dotted Egg</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-6 ">
      
      <div className="text-black">100X
      <div className="tooltip" data-tip="Tomato">
      <Image width={35}height={35}src="/token/Tomato.png"/></div>
      </div>    
      <div className="text-black">100X
      <div className="tooltip" data-tip="corn">
      <Image width={35}height={35}src="/token/corn.png"/></div>
      </div> 
      <div className="text-black">100X
      <div className="tooltip" data-tip="cabbage">
      <Image width={35}height={35}src="/token/cabbage.png"/></div>
      </div> 
      <div className="text-black">10X
      <div className="tooltip" data-tip="Mangosteen">
      <Image width={35}height={35}src="/token/mangosteen.png"/></div>
      </div> 
      <div className="text-black">1X
      <div className="tooltip" data-tip="Ebony Chick">
      <Image width={35}height={35}src="/token/Ebony chick.png"/></div>
      </div>   
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-17">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/images/white cupid.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-17" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-17" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
  <p className="text-yellow-600">Chance to Gain an additional Wood by +22% to +30%</p>
    <p className="text-yellow-600">Chance to Gain an additional Rock by +22% to +30%</p>
   
    <button className="btn">
        <Link href="https://bit.ly/3Lg9mpP">
        <a target="_blank">ตารางการอัพเวเวล </a>
        </Link>
    </button>
    <p>เลือกหัวข้อ Old Companion</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/images/white cupid.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">white Cupid</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-6 ">
      
      <div className="text-black">200X
      <div className="tooltip" data-tip="leather">
      <Image width={35}height={35}src="/token/leather.png"/></div>
      </div>    
      <div className="text-black">10X
      <div className="tooltip" data-tip="Mangosteen">
      <Image width={35}height={35}src="/token/mangosteen.png"/></div>
      </div> 
      <div className="text-black">50X
      <div className="tooltip" data-tip="Shiitake Mushroom">
      <Image width={35}height={35}src="/token/Shiitake.png"/></div>
      </div> 
      <div className="text-black">10X
      <div className="tooltip" data-tip="Angel Feather">
      <Image width={35}height={35}src="/token/Angel.png"/></div>
      </div> 
      <div className="text-black">1X
      <div className="tooltip" data-tip="Milke Chick">
      <Image width={35}height={35}src="/token/MilkeChick.png"/></div>
      </div>   
    </div>
    </div>
  </div>
</div>

      </div>
       {/*----------------------------------------TAB 2-------------------------- */}
  <div className="flex-1">
  <div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-18">
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
<input type="checkbox" id="my-modal-18" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-18" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 50 HP</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Health Potion.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Health Potion</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-4">
      
      <div className="text-black">1X
      <div className="tooltip" data-tip="Empty Bottle">
      <Image width={35}height={35}src="/token/Empty Bottle.png"/></div>
      </div>  
      <div className="text-black">2X
      <div className="tooltip" data-tip="Red Herb">
      <Image width={35}height={35}src="/token/RedHerb.png"/></div>
      </div>
      <div className="text-black">2X
      <div className="tooltip" data-tip="Green Herb">
      <Image width={35}height={35}src="/token/GreenHerb.png"/></div>
      </div>
      <div className="text-black">1X
      <div className="tooltip" data-tip="Honey">
      <Image width={35}height={35}src="/token/Honey.png"/></div>
      </div>
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-19">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Tomato Soup.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-19" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-19" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 20 Energy</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Tomato Soup.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Tomato Soup</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2">
      
      <div className="text-black">10X
      <div className="tooltip" data-tip="Tomato">
      <Image width={35}height={35}src="/token/Tomato.png"/></div>
      </div>  
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-20">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Stir Fried Cabbage.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-20" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-20" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 20 Energy</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Stir Fried Cabbage.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Stir Fried Cabbage</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2">
      
      <div className="text-black">10X
      <div className="tooltip" data-tip="Cabbage">
      <Image width={35}height={35}src="/token/cabbage.png"/></div>
      </div>  
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-21">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Salad.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-21" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-21" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 40 Energy</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Salad.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Salad</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-3">
      
      <div className="text-black">4X
      <div className="tooltip" data-tip="corn">
      <Image width={35}height={35}src="/token/corn.png"/></div>
      </div> 
      <div className="text-black">4X
      <div className="tooltip" data-tip="Cabbage">
      <Image width={35}height={35}src="/token/cabbage.png"/></div>
      </div>  
      <div className="text-black">1X
      <div className="tooltip" data-tip="Honey">
      <Image width={35}height={35}src="/token/Honey.png"/></div>
      </div> 
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-22">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Stone Aex.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-22" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-22" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Wood chopping Energy cost สูงสุด -10%  ต่ำสุด -6%</p>
    <h3 className=" font-bold text-lg text-green-600">การตีบวก</h3>
    <p className="text-blue-600">+1 ความเสียหายในการตัดไม้ +6%</p>
    <p className="text-blue-600">+2 พลังงานในการตัดไม้ -4%</p>
    <p className="text-blue-600">+3 Open Socket +1</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Stone Aex.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Stone AXE</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2 ">
      
      <div className="text-black ">120X
      <div className="tooltip" data-tip="Wood">
      <Image width={35}height={35}src="/token/Wood.png"/></div>
      </div>  
      <div className="text-black">30X
      <div className="tooltip" data-tip="Stone">
      <Image width={35}height={35}src="/token/Stone.png"/></div>
      </div> 
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-23">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Stone Sickle.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-23" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-23" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Plant cutting Energy cost สูงสุด -10%  ต่ำสุด -6%</p>
    <h3 className=" font-bold text-lg text-green-600">การตีบวก</h3>
    <p className="text-blue-600">+1 ความเสียหายทั้งหมด +3%</p>
    <p className="text-blue-600">+2 พลังงานในการสร้างความเสียหายทั้งหมด -2%</p>
    <p className="text-blue-600">+3 Open Socket +1</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Stone Sickle.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Stone Sickle</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2 ">
      
      <div className="text-black ">60X
      <div className="tooltip" data-tip="Wood">
      <Image width={35}height={35}src="/token/Wood.png"/></div>
      </div>  
      <div className="text-black">60X
      <div className="tooltip" data-tip="Stone">
      <Image width={35}height={35}src="/token/Stone.png"/></div>
      </div> 
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-24">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Fruit Salad.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-24" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-24" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">ความสามารถ</h3>
    <p className="text-yellow-600">ฟื้นฟู 70 Energy</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Fruit Salad.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Fruit Salad</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-4">
      
      <div className="text-black">2X
      <div className="tooltip" data-tip="Red Apple">
      <Image width={35}height={35}src="/token/Apple.png"/></div>
      </div> 
      <div className="text-black">2X
      <div className="tooltip" data-tip="GreenApple">
      <Image width={35}height={35}src="/token/GreenApple.png"/></div>
      </div>  
      <div className="text-black">1X
      <div className="tooltip" data-tip="Banana">
      <Image width={35}height={35}src="/token/Banana.png"/></div>
      </div> 
      <div className="text-black">1X
      <div className="tooltip" data-tip="Honey">
      <Image width={35}height={35}src="/token/Honey.png"/></div>
      </div> 
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-25">
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
<input type="checkbox" id="my-modal-25" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-25" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
    <p className="text-yellow-600">ใช้เพื่อผสม Logky-Logy</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Breeding Elixir.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Breeding Elixir</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2">
      
      <div className="text-black">20X
      <div className="tooltip" data-tip="teardrop">
      <Image width={35}height={35}src="/token/teardrop.png"/></div>
      </div> 
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-26">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Aquarium.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-26" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-26" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
    <p className="text-yellow-600">สุ่มไอเทมต่างๆ สามารถเข้าไปดูได้ที่นี้</p>
    <button className="btn">
        <Link href="/GiftBox/box">
        <a target="_blank">ไอเท็มดรอปจากกล่อง
        </a>
        </Link>
    </button>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Aquarium.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Aquarium I</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2">
      
      <div className="text-black">3X
      <div className="tooltip" data-tip="Aquarium Ticket">
      <Image width={35}height={35}src="/token/aquarium ticket.png"/></div>
      </div> 
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-27">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/OrangeBox.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-27" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-27" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
    <p className="text-yellow-600">สุ่มไอเทมต่างๆ สามารถเข้าไปดูได้ที่นี้</p>
    <button className="btn">
        <Link href="/GiftBox/box">
        <a target="_blank">ไอเท็มดรอปจากกล่อง
        </a>
        </Link>
    </button>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/OrangeBox.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">OrangeBox</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-3">
      
      <div className="text-black">600X
      <div className="tooltip" data-tip="Fish Food">
      <Image width={35}height={35}src="/token/fish_food.png"/></div>
      </div>  
      <div className="text-black">50X
      <div className="tooltip" data-tip="Living Branch">
      <Image width={35}height={35}src="/token/Living Branch.png"/></div>
      </div>  
      <div className="text-black">10X
      <div className="tooltip" data-tip="Tainted Leaf">
      <Image width={35}height={35}src="/token/Tainted Leaf.png"/></div>
      </div>  
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-28">
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
<input type="checkbox" id="my-modal-28" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-28" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Rock Breaking Damage +1</p>
    <p className="text-yellow-600">Rock Breaking Energy cost สูงสุด -8% ต่ำสุด -5% </p>
    <h3 className=" font-bold text-lg text-green-600">การตีบวก</h3>
    <p className="text-blue-600">+1 ความเสียหายในการทำลายหิน +6%</p>
    <p className="text-blue-600">+2 พลังงานในการทำลายหิน -4%</p>
    <p className="text-blue-600">+3 Open Socket +1</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/BRONZE MAUL.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">MATHILDA'S BRONZE MAUL</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div  className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-3 ">
      
      <div className="text-black">200X
      <div className="tooltip" data-tip="Stone">
      <Image width={35}height={35}src="/token/Stone.png"/></div>
      </div>    
      <div className="text-black">30X
      <div className="tooltip" data-tip="Copper">
      <Image width={35}height={35}src="/token/CopperPiece.png"/></div>
      </div>  
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-29">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Gloves.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-29" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-29" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Increase quantity of Wood gained by +8% to +10%</p>
    <h3 className=" font-bold text-lg text-green-600">การตีบวก</h3>
    <p className="text-blue-600">+1 เพิ่มปริมาณไม้ที่ได้รับ +5%</p>
    <p className="text-blue-600">+2 เพิ่มปริมาณหินที่ได้รับ +5%</p>
    <p className="text-blue-600">+3 Open Socket +1</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Gloves.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">MATHILDA'S Woodcutter Gloves</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-2">
      
      <div className="text-black">50X
      <div className="tooltip" data-tip="leather">
      <Image width={35}height={35}src="/token/leather.png"/></div>
      </div>    
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-30">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/boots.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-30" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-30" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
    <p className="text-yellow-600">Reducing Maim effect by +10% to +12%</p>
    <h3 className=" font-bold text-lg text-green-600">การตีบวก</h3>
    <p className="text-blue-600">+1 โอกาสในการหลีกเลี่ยงสถานะเหนื่อย +6% </p>
    <p className="text-blue-600">+2 Reduce effect of Maim by %6</p>
    <p className="text-blue-600">+3 Open Socket +1</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/boots.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">MATHILDA'S IRON Greaves</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-3 ">
      
      <div className="text-black">30X
      <div className="tooltip" data-tip="leather">
      <Image width={35}height={35}src="/token/leather.png"/></div>
      </div>  
      <div className="text-black">50X
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/></div>
      </div>   
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-31">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/egg/Cherry Dotted.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-31" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-31" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
  <p className="text-yellow-600">Hatches info fatty chick</p>
    <p className="text-yellow-600">สุ่มลูกไก่ตัวอ้วน สามารถเข้าไปดูได้ที่นี้</p>
   
    <button className="btn">
        <Link href="/tutorials/egg">
        <a target="_blank">ไอเท็มดรอปจากไข่
        </a>
        </Link>
    </button>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/egg/Cherry Dotted.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Cherry Dotted Egg</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-4 ">
      
      <div className="text-black">400X
      <div className="tooltip" data-tip="Grass">
      <Image width={35}height={35}src="/token/Grass.png"/></div>
      </div>    
      <div className="text-black">10X
      <div className="tooltip" data-tip="Apple">
      <Image width={35}height={35}src="/token/Apple.png"/></div>
      </div> 
      <div className="text-black">5X
      <div className="tooltip" data-tip="Mangosteen">
      <Image width={35}height={35}src="/token/mangosteen.png"/></div>
      </div> 
      <div className="text-black">1X
      <div className="tooltip" data-tip="Milke Chick">
      <Image width={35}height={35}src="/token/MilkeChick.png"/></div>
      </div>   
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-32">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/egg/Grassy Dotted.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-32" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-32" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">การใช้งาน</h3>
  <p className="text-yellow-600">Hatches info fatty chick</p>
    <p className="text-yellow-600">สุ่มลูกไก่ตัวอ้วน สามารถเข้าไปดูได้ที่นี้</p>
   
    <button className="btn">
        <Link href="/tutorials/egg">
        <a target="_blank">ไอเท็มดรอปจากไข่
        </a>
        </Link>
    </button>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/egg/Grassy Dotted.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Grassy Dotted Egg</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-6 ">
      
      <div className="text-black">400X
      <div className="tooltip" data-tip="Grass">
      <Image width={35}height={35}src="/token/Grass.png"/></div>
      </div>    
      <div className="text-black">25X
      <div className="tooltip" data-tip="Tomato">
      <Image width={35}height={35}src="/token/Tomato.png"/></div>
      </div> 
      <div className="text-black">50X
      <div className="tooltip" data-tip="cabbage">
      <Image width={35}height={35}src="/token/cabbage.png"/></div>
      </div>
      <div className="text-black">10X
      <div className="tooltip" data-tip="Mangosteen">
      <Image width={35}height={35}src="/token/mangosteen.png"/></div>
      </div> 
      <div className="text-black">1X
      <div className="tooltip" data-tip="Milke Chick">
      <Image width={35}height={35}src="/token/MilkeChick.png"/></div>
      </div>   
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-33">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/rakalai.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-33" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-33" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
  <p className="text-yellow-600">MAX Energy +12 to +16</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/rakalai.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">RAKALAI</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-6 ">
      
      <div className="text-black">5X
      <div className="tooltip" data-tip="Gilded Chick">
      <Image width={35}height={35}src="/token/gilded chick.png"/></div>
      </div>    
    </div>
    </div>
  </div>
</div>

<div className="flex items-center p-3 bg-green-200 hover:bg-yellow-200 font-bold rounded-lg overflow-hidden shadow-lg  border-t-4 border-blue-500">
          <label htmlFor="my-modal-34">
          <Space wrap>
      {colors.map((color) => (
        <Tooltip title="คลิกดูข้อมูล" color={color} key={color}>
         <Image 
             width={90}
             height={90}
             src="/token/Dark cupid.png"
             className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
          />
        </Tooltip>
      ))}
    </Space>
          </label>
<input type="checkbox" id="my-modal-34" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-34" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className="border-dashed border-2 border-indigo-600 text-center mt-2">
  <h3 className=" font-bold text-lg text-red-600">โอกาสคราฟได้</h3>
  <p className="text-yellow-600">Chance to Gain an additional Wood by +32% to +40%</p>
  <p className="text-yellow-600">Chance to Gain an additional Rock by +32% to +40%</p>
  <button className="btn">
        <Link href="https://bit.ly/3Lg9mpP">
        <a target="_blank">ตารางการอัพเวเวล </a>
        </Link>
    </button>
    <p>เลือกหัวข้อ Old Companion</p>
    <p className="py-4 "> 
    <Image 
             width={150}
             height={150}
             src="/token/Dark cupid.png"
             className="md:sm hover:scale-110 transition duration-500 cursor-pointer object-cover"
             
          />
      </p>
    </div>
  </div>   
  </div>  
  
  <div className="flex flex-col justify-start ">
  <p className=" text-black text-sm md:text-base md:truncate">Dark Cupid</p>
  <p className=" text-red-600 text-sm md:text-base md:truncate">ไอเทมที่ใช้คราฟ</p>
    <div className="text-base text-neutral-600 dark:text-neutral-200 flex justify-center">
    <div className="grid  grid-cols-1  md:grid-cols-6 ">
      
    <div className="text-black">200X
      <div className="tooltip" data-tip="Copper">
      <Image width={35}height={35}src="/token/CopperPiece.png"/></div>
      </div>    
      <div className="text-black">10X
      <div className="tooltip" data-tip="Mangosteen">
      <Image width={35}height={35}src="/token/mangosteen.png"/></div>
      </div> 
      <div className="text-black">50X
      <div className="tooltip" data-tip="KingTrumpet">
      <Image width={35}height={35}src="/token/KingTrumpet.png"/></div>
      </div> 
      <div className="text-black">10X
      <div className="tooltip" data-tip="Angel Feather">
      <Image width={35}height={35}src="/token/Angel.png"/></div>
      </div> 
      <div className="text-black">1X
      <div className="tooltip" data-tip="Ebony Chick">
      <Image width={35}height={35}src="/token/Ebony chick.png"/></div>
      </div>     
    </div>
    </div>
  </div>
</div>



</div>

</div>
            </div>
            </div>

  )
}

export default Mathilda