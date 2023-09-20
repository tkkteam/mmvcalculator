import React from "react";
import Navweapon from "../../components/Navweapon";
import Image from "next/image";
import Head from "next/head";


 function PremiumAxe() {
  return (

    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ตีบวกอาวุธ THE MAYOR</title>
      </Head> 
      <Navweapon />
      <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
      
        <div className= "text-1xl overline flex items-center justify-center">
        <p>ไอเทมตีบวก-หาซื้อได้จากร้านค้าในเพจ MorningMoon Village</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">SIMPLE CAPE</h2>
    <div className="font-semibold badge badge-primary">+1</div>
    <h2 className="font-semibold text-blue-800">All Energy cost -4%</h2>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/SIMPLE CAPE.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้ตีบวก</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/tool-fragment.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-red-500">tool-fragment : 60 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/rag.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">rag : 60 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/scrap-metal.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">scrap-metal : 18 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/leather-piece.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">leather-piece : 18 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/lumi.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">LUMI : 5 </h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">SIMPLE CAPE</h2>
    <div className="font-semibold badge badge-primary">+2</div>
    <h2 className="font-semibold text-blue-800">Max Health +6</h2>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/SIMPLE CAPE.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้ตีบวก</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/tool-fragment.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-red-500">tool-fragment : 110 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/rag.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">rag : 110 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/scrap-metal.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">scrap-metal : 33 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/leather-piece.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">leather-piece : 33 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/lumi.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">LUMI : 8 </h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">SIMPLE CAPE</h2>
    <div className="font-semibold badge badge-primary">+3</div>
    <h2 className="font-semibold text-blue-800">Open Socket +1</h2>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/SIMPLE CAPE.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้ตีบวก</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/tool-fragment.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-red-500">tool-fragment : 180 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/rag.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">rag : 180 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/scrap-metal.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">scrap-metal : 54 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/leather-piece.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">leather-piece : 54 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/runic-essence.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">RUNIC : 2 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/mystic-oil.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">mystic-oil : 2 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/arcane-powder.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">arcane-powder : 2 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/lumi.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">LUMI : 12 </h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">SIMPLE CAPE</h2>
    <div className="font-semibold badge badge-primary">+4</div>
    <h2 className="font-semibold text-blue-800">All Energy cost -4%</h2>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/SIMPLE CAPE.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้ตีบวก</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/tool-fragment.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-red-500">tool-fragment : 270 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/rag.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">rag : 270 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/scrap-metal.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">scrap-metal : 81 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/leather-piece.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">leather-piece : 81 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/runic-essence.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">RUNIC : 5 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/mystic-oil.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">mystic-oil : 5 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/arcane-powder.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">arcane-powder : 5 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/lumi.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">LUMI : 17 </h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">SIMPLE CAPE</h2>
    <div className="font-semibold badge badge-primary">+5</div>
    <h2 className="font-semibold text-blue-800">Max Health +6%</h2>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/SIMPLE CAPE.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้ตีบวก</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/tool-fragment.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-red-500">tool-fragment : 380 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/rag.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">rag : 380 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/scrap-metal.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">scrap-metal : 114 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/leather-piece.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">leather-piece : 114 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/runic-essence.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">RUNIC : 10 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/mystic-oil.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">mystic-oil : 10 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/arcane-powder.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">arcane-powder : 10 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/lumi.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">LUMI : 24 </h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">SIMPLE CAPE</h2>
    <div className="font-semibold badge badge-primary">+6</div>
    <h2 className="font-semibold text-blue-800">Open Socket +1</h2>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/SIMPLE CAPE.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้ตีบวก</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/tool-fragment.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-red-500">tool-fragment : 510 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/rag.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">rag : 510 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/scrap-metal.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">scrap-metal : 153 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/leather-piece.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">leather-piece : 153 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/runic-essence.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">RUNIC : 18 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/mystic-oil.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">mystic-oil : 18 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/arcane-powder.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">arcane-powder : 18 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/lumi.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">LUMI : 34 </h2> 
        </div>
         </div>
          </div>                            
      </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">SIMPLE CAPE</h2>
    <div className="font-semibold badge badge-primary">+7</div>
    <h2 className="font-semibold text-blue-800">Max Health +8</h2>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="/weapon/SIMPLE CAPE.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <div className="font-semibold badge badge-primary">ไอเทมที่ใช้ตีบวก</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/tool-fragment.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-red-500">tool-fragment : 660 ชิ้น</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/rag.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">rag : 660 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/scrap-metal.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">scrap-metal : 198 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/leather-piece.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">leather-piece : 198 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/runic-essence.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">RUNIC : 30 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/mystic-oil.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">mystic-oil : 30 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/arcane-powder.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">arcane-powder : 30 ชิ้น</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-9">
      <Image width={50} height={50}src="/item/lumi.png"objectFit="cover"alt="Picture of the author"/>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-red-500">LUMI : 50 </h2> 
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
export default PremiumAxe;
