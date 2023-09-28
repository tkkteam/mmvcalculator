
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navback from "../../components/Navback";


function Jewels() {
  return (
    <div className="bg-green-300 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>Jewels - ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Navback />
<div className="flex-1 flex flex-col sm:flex-row ">
    <main className="flex-1">
    <div className="grid grid-cols-1 gap-1 ">
    <div className="overflow-x-auto rounded-lg border border-gray-200">
  <table className="w-full text-sm text-left text-gray-500 divide-y-2 divide-gray-200 bg-white dark:text-gray-400">
  <thead className="border-b">
         <tr className="bg-gray-100">
            <th className="text-left p-4 font-medium">
            Modifier
            </th>
            <th className="text-left p-4 font-medium">
            Value
            </th>
            <th className="text-left p-4 font-medium">
            เปอร์เซ็นสุ่มได้
            </th>
           
         </tr>
      </thead>
    <tbody className="divide-y divide-gray-200">
      <tr>
        <td className="p-4 text-gray-700">เพิ่มโอกาสดรอป  common material</td>
        <td className="p-4">7-12</td>
        <td className="p-4">7%</td>
      </tr>
      <tr>
        <td className="p-4 text-blue-500">เพิ่มโอกาสาดรอป rare material </td>
        <td className="p-4">6-10</td>
        <td className="p-4">7%</td>
      </tr>
      <tr>
        <td className="p-4 text-indigo-600">เพิ่มโอกาสาดรอป epic material</td>
        <td className="p-4">5-8</td>
        <td className="p-4">6%</td>
      </tr>
      <tr>
        <td className="p-4 text-orange-600">เพิ่มโอกาสาดรอป legendary material</td>
        <td className="p-4">4-6</td>
        <td className="p-4">5%</td>
      </tr>
      <tr>
        <td className="p-4">ฟื้นฟู HP เมื่อโค่นล้มมอนสเตอร์</td>
        <td className="p-4">2-3</td>
        <td className="p-4">7%</td>
      </tr>
      <tr>
        <td className="p-4">ฟื้นฟู Energy เมื่อโค่นล้มมอนสเตอร์</td>
        <td className="p-4">5-8</td>
        <td className="p-4">7%</td>
      </tr>
      <tr>
        <td className="p-4">สร้างความเสียหายกายภาพ</td>
        <td className="p-4">2-4</td>
        <td className="p-4">2%</td>
      </tr>
      <tr>
        <td className="p-4 text-red-600">สร้างความเสียหายธาตุ Fire</td>
        <td className="p-4">5-8</td>
        <td className="p-4">6%</td>
      </tr>
      <tr>
        <td className="p-4 text-blue-700">สร้างความเสียหายธาตุ Cold</td>
        <td className="p-4">5-8</td>
        <td className="p-4">6%</td>
      </tr>
      <tr>
        <td className="p-4 text-yellow-600">สร้างความเสียหายธาตุ Lightning </td>
        <td className="p-4">5-8</td>
        <td className="p-4">6%</td>
      </tr>
      <tr>
        <td className="p-4 text-indigo-800">สร้างความเสียหายธาตุ Chaos</td>
        <td className="p-4">5-8</td>
        <td className="p-4">6%</td>
      </tr>
      <tr>
        <td className="p-4">ต้านทานความเสียหายกายภาพ</td>
        <td className="p-4">4-7</td>
        <td className="p-4">7%</td>
      </tr>
      <tr>
        <td className="p-4 text-red-600">ต้านทานความเสียหายธาตุ Fire </td>
        <td className="p-4">6-10</td>
        <td className="p-4">7%</td>
      </tr>
      <tr>
        <td className="p-4 text-blue-700">ต้านทานความเสียหายธาตุ Cold</td>
        <td className="p-4">6-10</td>
        <td className="p-4">7%</td>
      </tr>
      <tr>
        <td className="p-4 text-yellow-600">ต้านทานความเสียหายธาตุ Lightning</td>
        <td className="p-4">6-10</td>
        <td className="p-4">7%</td>
      </tr>
      <tr>
        <td className="p-4 text-indigo-800">ต้านทานความเสียหายธาตุ Chaos</td>
        <td className="p-4">6-10</td>
        <td className="p-4">7%</td>
      </tr>
      </tbody>
  </table>
  </div>
<div className="overflow-x-auto border-x border-t bg-white">
   <table className="table-auto w-full">
      <thead className="border-b">
         <tr className="bg-gray-100">
            <th className="text-left p-4 font-medium">
               รูป
            </th>
            <th className="text-left p-4 font-medium">
            ชื่อ
            </th>
            <th className="text-left p-4 font-medium">
            คุณสมบัติหลัก
            </th>
            <th className="text-left p-4 font-medium">
            จำนวนสุ่ม
            </th>
         </tr>
      </thead>
      <tbody>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Lumber_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
        <td className="p-4">Lumber Jewel</td>
        <td className="p-4">เพิ่มดาเมจการตัดไม้  1 - 2%</td>
        <td className="p-4">1</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Rock Picker Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Rock Picker Jewel</td>
        <td className="p-4">เพิ่มดาเมจการตีหิน 1 - 2%</td>
        <td className="p-4">1</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Smasher_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Smasher Jewel</td>
        <td className="p-4">เพิ่มดาเมจการทุบ 1 - 2%</td>
        <td className="p-4">1</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Miner_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Miner Jewel</td>
        <td className="p-4">เพิ่มดาเมจการขุดแร่ 1 - 2%</td>
        <td className="p-4">1</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Orchid_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Orchid Jewel</td>
        <td className="p-4">เพิ่มดาเมจ Chaos 1 - 3 หน่วย</td>
        <td className="p-4">2</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Arctic_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Arctic Jewel</td>
        <td className="p-4">เพิ่มดาเมจ Cold 1 - 3 หน่วย</td>
        <td className="p-4">2</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Electric_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Electric Jewel</td>
        <td className="p-4">เพิ่มดาเมจ Lighting 1 - 3 หน่วย</td>
        <td className="p-4">2</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Rejuvenate_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Rejuvenate Jewel</td>
        <td className="p-4">เพิ่ม Max energy 1 - 3 หน่วย</td>
        <td className="p-4">2</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Fortune_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Fortune Jewel</td>
        <td className="p-4">ลดพลังงานทั้งหมด 1 - 2%</td>
        <td className="p-4">2</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Inferno_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Inferno Jewel</td>
        <td className="p-4">เพิ่มดาเมจ Fire 1 - 2 หน่วย</td>
        <td className="p-4">2</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Brutal_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Brutal Jewel</td>
        <td className="p-4">เพิ่มพลังดาเมจทั้งหมด 1</td>
        <td className="p-4">2</td>
         </tr>
         <tr className="border-b hover:bg-gray-50">
            <td className="p-4">
            <Image 
            width={90}
            height={90}
            src="https://commumorning.firebaseapp.com/Jewels/Quantic_Jewel.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
            </td>
            <td className="p-4">Quantic Jewel</td>
        <td className="p-4">เพิ่มดาเมจ Lighting 3-5 หน่วย</td>
        <td className="p-4">2</td>
         </tr>
      </tbody>
   </table>
</div>
</div>

    </main>
   
   
    </div>
   












      </div>
  );
}

export default Jewels;
