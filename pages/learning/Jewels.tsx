
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navback from "../../components/Navback";


function Jewels() {
  return (
    <div className="bg-green-300 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Navback />
<div className="flex-1 flex flex-col sm:flex-row ">
    <main className="flex-1">
    <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">Jewels</h1>
      </div>
                    
<div className="overflow-x-auto rounded-lg border border-gray-200">
  <table className="w-full text-sm text-left text-gray-500 divide-y-2 divide-gray-200 bg-white dark:text-gray-400">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
         รูป
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          ชื่อ
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          คุณสมบัติหลัก
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          จำนวนของคุณสมบัติสุ่ม
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Lumber_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Lumber Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มดาเมจการตัดไม้  1 - 2%</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">1</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Rock Picker Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Rock Picker Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มดาเมจการตีหิน 1 - 2%</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">1</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Smasher_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Smasher Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มดาเมจการทุบ 1 - 2%</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">1</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Miner_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Miner Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มดาเมจการขุดแร่ 1 - 2%</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">1</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Orchid_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Orchid Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มดาเมจ Chaos 1 - 3 หน่วย</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Arctic_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Arctic Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มดาเมจ Cold 1 - 3 หน่วย</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Electric_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Electric Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มดาเมจ Lighting 1 - 3 หน่วย</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2</td>
      </tr>
    
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Rejuvenate_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Rejuvenate Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่ม Max energy 1 - 3 หน่วย</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Fortune_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Fortune Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">ลดพลังงานทั้งหมด 1 - 2%</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Inferno_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Inferno Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มดาเมจ Fire 1 - 2 หน่วย</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Brutal_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Brutal Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มพลังดาเมจทั้งหมด 1</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/Jewels/Quantic_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">Quantic Jewel</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มดาเมจ Lighting 3-5 หน่วย</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2</td>
      </tr>
    </tbody>
  </table>
</div>
    </main>
   
    <aside className="flex-1 flex-col ">
    <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">คุณสมบัติหลัก</h1>
      </div>
    <div className="grid grid-cols-1 gap-1 ">
    <div className="grid flex-grow  place-items-center"> 
    <div className="overflow-x-auto rounded-lg border border-gray-200">
  <table className="w-full text-sm text-left text-gray-500 divide-y-2 divide-gray-200 bg-white dark:text-gray-400">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th  className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Modifier
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
         Value
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          เปอร์เซ็นสุ่มได้
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">เพิ่มโอกาสดรอป  common material</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">7-12</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">7%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-blue-700">เพิ่มโอกาสาดรอป rare material </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">6-10</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">7%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-indigo-700">เพิ่มโอกาสาดรอป epic material</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">5-8</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">6%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-orange-600">เพิ่มโอกาสาดรอป legendary material</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">4-6</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">5%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">ฟื้นฟู HP เมื่อโค่นล้มมอนสเตอร์</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2-3</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">7%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">ฟื้นฟู Energy เมื่อโค่นล้มมอนสเตอร์</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">5-8</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">7%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">สร้างความเสียหายกายภาพ</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2-4</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">2%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-red-600">สร้างความเสียหายธาตุ Fire</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">5-8</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">6%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-blue-700">สร้างความเสียหายธาตุ Cold</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">5-8</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">6%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-yellow-600">สร้างความเสียหายธาตุ Lightning </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">5-8</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">6%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-indigo-800">สร้างความเสียหายธาตุ Chaos</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">5-8</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">6%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">ต้านทานความเสียหายกายภาพ</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">4-7</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">7%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-red-600">ต้านทานความเสียหายธาตุ Fire </td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">6-10</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">7%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-blue-700">ต้านทานความเสียหายธาตุ Cold</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">6-10</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">7%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-yellow-600">ต้านทานความเสียหายธาตุ Lightning</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">6-10</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">7%</td>
      </tr>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-indigo-800">ต้านทานความเสียหายธาตุ Chaos</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">6-10</td>
        <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">7%</td>
      </tr>
      </tbody>
  </table>
  </div>
  </div>
  </div>
    </aside>
    </div>
   












      </div>
  );
}

export default Jewels;
