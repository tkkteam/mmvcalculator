import Image from "next/image";
import Head from "next/head";
import Navback from "../../components/Navback";

 function fishingrod() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
        <title>ข้อมูลเบ็ดตกปลา</title>
      </Head> 
      <Navback />
      <div className="w-full p-10">
      <div className= "p-2 text-2xl  flex items-center justify-center">
        <p>Fishing Rod Ability ความสามารถของเบ็ดแต่ละชนิด</p>
        </div>
        <div className= "text-1xl overline flex items-center justify-center">
        <p>เบ็ดแต่ละอันจะมีค่าความสามารถต่างๆ ที่แตกต่างกันไป โดยความสามารถของเบ็ด จะมีดังนี้</p>
        </div>
        <ul className="list-none text-center p-5">
  <li>📌Attraction = ความดึงดูดปลา เพิ่มขีดจำกัดในการตกที่จะทำให้ได้ปลาระดับหายากมากขึ้น</li>
  <li>📌Control = การควบคุมเบ็ด เพิ่มการควบคุมเบ็ดที่จะทำให้ได้ปลาระดับหาง่ายน้อยลง</li>
  <li>📌Durability = ความคงทนของเบ็ด บ่งบอกว่าเบ็ดคันนี้ สามารถตกปลาได้มากที่สุดกี่ครั้งในการออกป่า 1 รอบ</li>
  <li>📌Control Bonus = โบนัสการควบคุมเบ็ด เพิ่มโบนัส Control พิเศษสำหรับแหล่งน้ำแต่ละชนิด</li>
  <li>📌Value Bonus = โบนัสขนาดปลา เพิ่มโบนัสที่จะทำให้ได้ปลาตัวใหญ่ขึ้นสำหรับแหล่งน้ำแต่ละชนิด</li>
</ul>

<ul className="text-red-500">
<li>ซึ่งในเกมจะมีแหล่งน้ำแบ่งออกดังนี้</li>
<p>1. River แม่น้ำ
2. Lake ทะเลสาป
3. Sea ทะเล
4. Toxic บ่อพิษ</p>
</ul>
        <div className="flex flex-col">
        <div className="flex-1 text-center">
      <Image 
      src="https://i.ibb.co/JkXpwNH/bait01.png" 
      alt="fishing"
        width={1300}
        height={2000}
        priority
        />
            </div>
        </div>
        
             </div>
        </div>
     
  );
};
export default fishingrod;