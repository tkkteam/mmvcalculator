import React from "react";
import NavNpc from "../../components/NavNpc";
import Image from "next/image";
import Head from "next/head";

function Mira() {

  return (

    <div className="bg-npc bg-cover flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>แนะนำ NPC</title>
      </Head> 
      <NavNpc />
      
      <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className= "p-2 text-2xl  flex items-center justify-center">
            <Image 
             width={150}
             height={150}
             src="/npc/Mira.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
          /> 
        </div>
        <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">ยินดีต้อนรับเข้าสู่ร้าน Mira Shop Jewels</h1>
      </div>
      
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Lumber Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่มดาเมจการตัดไม้  1 - 2%</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Lumber_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Amber">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Amber.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">2 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Copper">
      <Image width={35}height={35}src="/token/CopperPiece.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">5 Lumi</h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Rock Picker Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่มดาเมจการตีหิน 1 - 2%</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Rock Picker Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Pearl">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Pearl.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">2 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Copper">
      <Image width={35}height={35}src="/token/CopperPiece.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">5 Lumi</h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Smasher Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่มดาเมจการทุบ 1 - 2%</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Smasher_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Pearl">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Jade.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">2 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Copper">
      <Image width={35}height={35}src="/token/CopperPiece.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">5 Lumi</h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Miner Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่มดาเมจการขุดแร่ 1 - 2%</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
  
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Miner_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="onyx">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/onyx.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">2 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Copper">
      <Image width={35}height={35}src="/token/CopperPiece.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">5 Lumi</h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Orchid Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่มดาเมจ Chaos 1 - 3 หน่วย</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Orchid_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="onyx">
      <Image width={35}height={35}objectFit="contain"src="https://commumorning.firebaseapp.com/Jewels/Amethyst.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="onyx">
      <Image width={35}height={35}objectFit="contain"src="https://commumorning.firebaseapp.com/Jewels/onyx.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Silver">
      <Image width={35}height={35}objectFit="contain"src="/token/SilverPiece.png"/>
     
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">12 Lumi</h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Arctic Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่มดาเมจ Cold 1 - 3 หน่วย</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Arctic_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Aquamarine">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Aquamarine.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="onyx">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Jade.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Silver">
      <Image width={35}height={35}objectFit="contain"src="/token/SilverPiece.png"/>
     
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">12 Lumi</h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Electric Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่มดาเมจ Lighting 1 - 3 หน่วย</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Electric_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Topaz">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Topaz.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Pearl">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Pearl.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Silver">
      <Image width={35}height={35}objectFit="contain"src="/token/SilverPiece.png"/>
     
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">12 Lumi</h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Rejuvenate Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่ม Max energy 1 - 3 หน่วย</h1>
    <h1 className="font-semibold text-blue-800">Physiccal Damage against Monters </h1>
    <p className="font-semibold text-blue-800">leeched as Health +2% to +4%</p>
    <h1 className="font-semibold text-black">Random Modifier</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Rejuvenate_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Sapphire">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Sapphire.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Amber">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Amber.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Pearl">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Pearl.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Gold">
      <Image width={35}height={35}objectFit="contain"src="/token/Gold.png"/>
     
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">35 Lumi</h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Fortune Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">ลดพลังงานทั้งหมด 1% - 2%</h1>
    <h1 className="font-semibold text-blue-800">Add 1% to 2% base chance to Drop</h1>
    <div className="tooltip" data-tip="Noxious Fang">
      <Image width={80}height={80}src="/token/Noxious Fang.png"/>
       </div>
       <div className="tooltip" data-tip="Golem Heart">
      <Image width={80}height={80}src="/token/Golem Heart.png"/>
       </div>
       <div className="tooltip" data-tip="Treant Spirit">
      <Image width={80}height={80}src="/token/Treant Spirit.png"/>
       </div>

    <h1 className="font-semibold text-black">Random Modifier</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Fortune_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Emerald">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Emerald.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Amber">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Amber.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Jade">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Jade.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Gold">
      <Image width={35}height={35}objectFit="contain"src="/token/Gold.png"/>
     
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">35 Lumi</h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Inferno Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่มดาเมจ Fire 1 - 2 หน่วย</h1>
    <h1 className="font-semibold text-blue-800">Fire Comet</h1>
    <p className="font-semibold text-blue-800"> Level+1 to +2</p>
    <h1 className="font-semibold text-black">Random Modifier</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Inferno_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Ruby">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Ruby.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Jade">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Jade.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="onyx">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/onyx.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Gold">
      <Image width={35}height={35}objectFit="contain"src="/token/Gold.png"/>
     
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">35 Lumi</h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Brutal Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่มพลังดาเมจทั้งหมด 1</h1>
    <h1 className="font-semibold text-blue-800">All Physiccal Attack Damage</h1>
    <p className="font-semibold text-blue-800"> +1% to +2%</p>
    <h1 className="font-semibold text-black">Random Modifier</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Brutal_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center ">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Diamond">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Diamond.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Amber">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Amber.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Pearl">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Pearl.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Jade">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Jade.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="onyx">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/onyx.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Iron">
      <Image width={35}height={35}src="/token/Iron.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Gold">
      <Image width={35}height={35}objectFit="contain"src="/token/Gold.png"/>
     
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">50 Lumi</h2> 
        </div>
         </div>

          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Quantic Jewel</h2>
    <div className="font-semibold badge badge-primary">คุณสมบัติหลัก</div>
    <h1 className="font-semibold text-blue-800">เพิ่มดาเมจ Lighting 3-5 หน่วย</h1>
    <h1 className="font-semibold text-blue-800">Crystal Shield</h1>
    <p className="font-semibold text-blue-800">Level+1 to +2</p>
    <h1 className="font-semibold text-black">Random Modifier</h1>
    <h1 className="font-semibold text-black">Random Modifier</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Quantic_Jewel.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้คราฟ</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center ">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Alexandrite">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Alexandrite.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Amber">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Amber.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Pearl">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Pearl.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Jade">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/Jade.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="onyx">
      <Image width={35}height={35}src="https://commumorning.firebaseapp.com/Jewels/onyx.png"/>
       </div>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">1 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Crystal">
      <Image width={35}height={35}src="/token/Crystal.png"/>
       </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="Gold">
      <Image width={35}height={35}objectFit="contain"src="/token/Gold.png"/>
     
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">50 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <div className="tooltip" data-tip="LUMI">
      <Image width={35}height={35}src="/item/lumi.png"/>
      </div>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-blue-600">50 Lumi</h2> 
        </div>
         </div>

          </div>                            
      </div>
 </div>
</div>




         </div> 
             </div>   
                </div>
  );
};
export default Mira;