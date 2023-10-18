import React from "react";
import NavNpc from "../../components/NavNpc";
import Image from "next/image";
import Head from "next/head";


 function upgrade() {
  return (

    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ตารางการตีบวกอาวุธ</title>
      </Head> 
      <NavNpc />
      <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
      
        <div className= "text-1xl overline flex items-center justify-center">
        <p>ตารางการตีบวกไอเทมตั้งแต่ ธรรมดาไปถึงพรีเมี่ยม</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Stone Aex</h2>
    <h1 className="font-semibold text-blue-800">Wood chopping Energy Cost</h1>
    <h1 className="font-semibold text-blue-800"> -6% to -10%</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/Stone Aex.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ขวานธรรมดา</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <p className="font-semibold text-black">ความเสียหายในการตัดไม้ +6%</p>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <p className="font-semibold text-black">พลังงานในการตัดไม้ -4%</p> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <p className="font-semibold text-black">Open Socket +1</p> 
        </div>
         </div>
          </div>                            
      </div>
      </div>
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <p className="font-semibold text-gray-800">Stone Hammer</p>
    <h1 className="font-semibold text-blue-800">Rock Breaking Energy Cost</h1>
    <h1 className="font-semibold text-blue-800"> -6% to -10% </h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/Stone Hammer.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ค้อนธรรมดา</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <p className="font-semibold text-black">ความเสียหายในการทำลายหิน +6%</p>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <p className="font-semibold text-black">พลังงานในการทำลายหิน -4%</p> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <p className="font-semibold text-black">Open Socket +1</p> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Stone Sickle</h2>
    <h1 className="font-semibold text-blue-800">Plant cutting Energy Cost</h1>
    <h1 className="font-semibold text-blue-800"> -6% to -10% </h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/Stone Sickle.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">เคียวและมีดธรรมดา</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <p className="font-semibold text-black">ความเสียหายทั้งหมด +3%</p>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <p className="font-semibold text-black">การสร้างความเสียหายทั้งหมด -2%</p> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <p className="font-semibold text-black">Open Socket +1</p> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Wooden Club</h2>
    <h1 className="font-semibold text-blue-800">Smashing Energy Cost</h1>
    <h1 className="font-semibold text-blue-800"> -6% to -10% </h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/Wooden Club.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">กระบองธรรมดา</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">ความเสียหายในการทุบ +6%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">พลังงานในการทุบ -4%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">MATHILDA'S WOODCUTTER GLOVES</h2>
    <h1 className="font-semibold text-blue-800">Increase quantity of Wood Gained</h1>
    <h1 className="font-semibold text-blue-800"> +8% to +10%</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/Gloves.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ถุงมือธรรมดา</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">เพิ่มปริมาณไม้ที่ได้รับ +5%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">เพิ่มปริมาณหินที่ได้รับ +5%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">MATHILDA'S SILKSLIPPER</h2>
    <h1 className="font-semibold text-blue-800">Avoiding Exhaust</h1>
    <h1 className="font-semibold text-blue-800"> +20% to +25%</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/Silkslipper.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">รองเท้าธรรมดา</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">โอกาสหลีกเลี่ยงสถานะเหนื่อย +6%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Reduce effect of Maim by %6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">MATHILDA'S IRON GREAVES</h2>
    <h1 className="font-semibold text-blue-800">Reducing Maim effect</h1>
    <h1 className="font-semibold text-blue-800"> +10% to +12%</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/boots.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">รองเท้าธรรมดา</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">โอกาสหลีกเลี่ยงสถานะเหนื่อย +6%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Reduce effect of Maim by %6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">MATHILDA'S BRONZE HATCHET</h2>
    <h1 className="font-semibold text-blue-800">Wood chopping Damage +1</h1>
    <h1 className="font-semibold text-blue-800">Wood chopping Energy cost </h1>
    <h1 className="font-semibold text-blue-800">-5% to -8%</h1>
    
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/BRONZE HATCHET.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ขวานธรรมดา</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">ความเสียหายในการทำลายหิน +6%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">พลังงานในการทำลายหิน -4%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">MATHILDA'S BRONZE MAUL</h2>
    <h1 className="font-semibold text-blue-800">Rock Breaking Damage +1</h1>
    <h1 className="font-semibold text-blue-800">Rock Breaking Energy cost</h1>
    <h1 className="font-semibold text-blue-800">-5% to -8%</h1>
    
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/BRONZE MAUL.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ค้อนธรรมดา</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">ความเสียหายในการตัดไม้ +6%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">พลังงานในการตัดไม้ -4%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">MATHILDA'S BRONZE MACE</h2>
    <h1 className="font-semibold text-blue-800">Smashing Damage +1</h1>
    <h1 className="font-semibold text-blue-800">Smashing Energy cost</h1>
    <h1 className="font-semibold text-blue-800">-5% to -8%</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/BRONZE MACE.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">กระบองธรรมดา</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">ความเสียหายในการทุบ +6%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">พลังงานในการทุบ -4%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">THE MAYOR BRONZE HATCHET</h2>
    <h1 className="font-semibold text-blue-800">Wood chopping Damage +2 to +3</h1>
    
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/BRONZE HATCHET.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ขวานพรีเมี่ยม</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">Wood Chopping Damage +12%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">All Damage Taken -6%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+4</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">Wood Chopping Damage +12%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+5</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">All Damage Taken -6%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+6</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+7</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Wood Chopping Damage +2</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">THE MAYOR BRONZE MAUL</h2>
    <h1 className="font-semibold text-blue-800">Rock Breaking Damage +2 to +3</h1>
    
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/BRONZE MAUL.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ค้อนพรีเมี่ยม</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">Rock Breaking Damage +12%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">All Damage Taken -6%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+4</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">Rock Breaking Damage +12%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+5</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">All Damage Taken -6%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+6</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+7</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Rock Breaking Damage +2</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">THE MAYOR BRONZE MACE</h2>
    <h1 className="font-semibold text-blue-800">Smashing Damage +2 to +3</h1>
    
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/BRONZE MACE.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">กระบองพรีเมี่ยม</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">Smashing Damage +12%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">All Damage Taken -6%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+4</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">Smashing Damage +12%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+5</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">All Damage Taken -6%</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+6</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+7</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Smashing Damage +2</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">THE MAYOR SIMPLE CAPE</h2>
    <h1 className="font-semibold text-blue-800">All Energy cost -4% to -2%</h1>
    
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/SIMPLE CAPE.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ผ้าคลุมพรีเมี่ยม</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">All Energy cost -4%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+4</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">All Energy cost -4%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+5</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+6</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+7</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +8</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">THE MAYOR Adventurer Cloak</h2>
    <h1 className="font-semibold text-blue-800">AllEnergyCostPercent</h1>
    
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/AdventurerCloak.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ผ้าคลุมพรีเมี่ยม</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">All Energy cost -4%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+4</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">All Energy cost -4%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+5</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+6</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+7</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +8</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">THE MAYOR HunterMantle</h2>
    <h1 className="font-semibold text-blue-800">AllEnergyCostPercent</h1>
    
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/HunterMantle.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ผ้าคลุมพรีเมี่ยม</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">All Energy cost -4%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+4</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">All Energy cost -4%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+5</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+6</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+7</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +8</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">THE MAYOR Leather Boots</h2>
    <h1 className="font-semibold text-blue-800">ExhaustAvoidance</h1>
    
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/Leather Boots.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">รองเท้าพรีเมี่ยม</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">Chance Avoiding Exhaust +12%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+4</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">Reduce effect of Maim by %12</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+5</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+6</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+7</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">All Damage Taken -8%</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">THE MAYOR Steel Treads</h2>
    <h1 className="font-semibold text-blue-800">MaimEffectReduction</h1>
    
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/Steel Treads.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">รองเท้าพรีเมี่ยม</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">Chance Avoiding Exhaust +12%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+4</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">Reduce effect of Maim by %12</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+5</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+6</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+7</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">All Damage Taken -8%</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">THE MAYOR IRON Gauntlets</h2>
    <h1 className="font-semibold text-blue-800">StoneGainQuantityPercent</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/Iron Gauntlets.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ถุงมือพรีเมี่ยม</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">เพิ่มปริมาณไม้ที่ได้รับ +12%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+4</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">เพิ่มปริมาณหินที่ได้รับ %12</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+5</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+6</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+7</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">All Damage Taken -8%</h2> 
        </div>
         </div>
          </div>                            
      </div>
      </div>                            
      </div>
      <div className="bg-white w-72 h-100 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">THE MAYOR Leather Mitts</h2>
    <h1 className="font-semibold text-blue-800">WoodGainQuantityPercent</h1>
    <h1 className="font-semibold text-blue-800">StoneGainQuantityPercent</h1>
      <div className="h-1/1 w-full p-6">
      <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/weapon/Leather Mitts.png"
            objectFit="cover"
            alt="avatar"
          />
          
      </div>
      <div className="font-semibold badge badge-primary">ถุงมือพรีเมี่ยม</div>
      <div className="text-center mt-1">  
     <div className="px-2 py-2 bg-white text-sm">
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+1</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">เพิ่มปริมาณไม้ที่ได้รับ +12%</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+2</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+3</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+4</p>
       </div>
      <div className="ml-3">
     <h2 className="font-semibold text-black">เพิ่มปริมาณหินที่ได้รับ %12</h2>
        </div>
         </div>
      <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+5</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Max Health +6</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+6</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">Open Socket +1</h2> 
        </div>
         </div>
         <div className="flex items-center">
      <div className="flex-shrink-0 w-9 h-6">
      <p className="font-semibold badge badge-primary">+7</p>
       </div>
      <div className="ml-3">
      <h2 className="font-semibold text-black">All Damage Taken -8%</h2> 
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
export default upgrade;
