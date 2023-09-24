import React from "react";
import type { NextPage } from "next";
import Nav from "../../components/Nav";
import Image from "next/image";
import Head from "next/head";

const monster: NextPage = () => {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
      <title>Monster - MorningMoon Village</title>
      </Head>
      <Nav/>
      <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
      <Image 
            width={1400}
            height={95}
            src="https://commumorning.firebaseapp.com/monster/monsterbanner.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
          />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Rat</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 35</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Rat.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-1" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-1" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : HUNTING GROUND</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Red Apple / Green Apple / Banana / Leather / Tool Fragment / Rag</p>
    <p className="py-4"> 
    <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Ratmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
    </div>
  </div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตี : 16-21</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 2</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : กระบอง</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 0</p>
          <p className="text-red-500">Fire : 20</p>
          <p className="text-cyan-500">Cold : 50</p>
          <p className="text-amber-500">Lightning : 20</p>
          <p className="text-purple-700">Chaos : 0</p>
        </div>
 </div>
</div>

<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Snake</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 55</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Snake.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-2" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-2" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : THE MOON TREE/POISON GARDEN</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Leather Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Amber Shard / Pearl Shard / Jade Shard / Onyx Shard</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Snakemap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 16 - 19</h2>
    <h2 className="font-semibold text-purple-700">การโจมตี Chaos : 11 - 16</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 5</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : กระบอง</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 10</p>
          <p className="text-red-500">Fire : 25</p>
          <p className="text-cyan-500">Cold : 70</p>
          <p className="text-amber-500">Lightning : 30</p>
          <p className="text-purple-700">Chaos : 0</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Living tree</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 69</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Livingtree.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-3" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : THE MOON TREE/FLOODEN CAVE</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Wood / Tool Fragment / Rag / Living Branch / Scrap Metal / Leather Piece / Red Herb / Green Herb / Amber Shard / Pearl Shard / Jade Shard / Onyx Shard</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Livingtreemap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตี : 21 - 26</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 5</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : ขวาน</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 5</p>
          <p className="text-red-500">Fire : 0</p>
          <p className="text-cyan-500">Cold : 25</p>
          <p className="text-amber-500">Lightning : 60</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Rock Mole</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 58</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/ROCKMOLE.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-4" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : THE FOOTHILLS/WINDY FIELD/CRYSTAL CAVERN</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Tool Fragment / Rag / Stone /  Leather / Red Herb / Green Herb / Scrap Metal / Leather Piece / Amber Shard / Pearl Shard / Jade Shard / Onyx Shard</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/ROCKMOLEmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตี : 24 - 31</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 5</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : ค้อน</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 5</p>
          <p className="text-red-500">Fire : 60</p>
          <p className="text-cyan-500">Cold : 0</p>
          <p className="text-amber-500">Lightning : 40</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Man-Eating Flower</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 106</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/MAN-EAT-FLOWER.png"
            objectFit="cover"
            alt="avatar"
          />
    
      </div>
      <label htmlFor="my-modal-5" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : THE MOON TREE/TOXIC LAKE</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Wood /  Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Tainted Leaf / Arcane powder / Runic Essence / Mystic Oil / Gem Shard Box</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/MAN-EAT-FLOWERmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตี : 80 - 109</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 30</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : ขวาน</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 0</p>
          <p className="text-red-500">Fire : 0</p>
          <p className="text-cyan-500">Cold : 30</p>
          <p className="text-amber-500">Lightning : 70</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Rock Golem</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 116</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/ROCKGOLEM.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-6" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : THE FOOTHILLS/WINDY FIELD</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Stone / Red Herb / Green Herb / Tool Fragment / Rag / Scrap Metal / Leather Piece / Arcane powder / Runic Essence / Mystic Oil / Gem Shard Box</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/ROCKGOLEMmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
    
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตี : 61 - 78</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 18</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : ค้อน</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 10</p>
          <p className="text-red-500">Fire : 80</p>
          <p className="text-cyan-500">Cold : 0</p>
          <p className="text-amber-500">Lightning : 50</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Hedgenox</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 179</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/HEDGENOX.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-7" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-7" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : TOXIC LAKE</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Leather / Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Floral Horn / Arcane powder / Runic Essence / Mystic Oil / Soul Fragment / Gem Shard Box / Noxious Fang </p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/HEDGENOXmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 72 - 88</h2>
    <h2 className="font-semibold text-purple-700">การโจมตี Chaos : 35 - 44</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 75</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : กระบอง</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 20</p>
          <p className="text-red-500">Fire : 40</p>
          <p className="text-cyan-500">Cold : 75</p>
          <p className="text-amber-500">Lightning : 40</p>
          <p className="text-purple-700">Chaos : 0</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Treant</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 185</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Treant.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-8" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-8" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-8" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : THE MOON TREE</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Wood / Red Herb / Green Herb / Tool Fragment / Rag /  Scrap Metal / Leather Piece / Sacred Bark / Arcane powder / Runic Essence / Mystic Oil / Soul Fragment / Gem Shard Box / Treant Spirit</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Treantmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตี : 95 - 125</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 75</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : ขวาน</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 20</p>
          <p className="text-red-500">Fire : 0</p>
          <p className="text-cyan-500">Cold : 35</p>
          <p className="text-amber-500">Lightning : 80</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Magma Golem</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 193</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/MAGMAGOLEM.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-9" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-9" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-9" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : THE FOOTHILLS</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Stone / Red Herb / Green Herb / Tool Fragment / Rag / Scrap Metal / Leather Piece / Soul Stone / Arcane powder / Runic Essence / Mystic Oil / Soul Fragment / Gem Shard Box / Golem Heart</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/MAGMAGOLEMmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 57 - 67</h2>
    <h2 className="font-semibold text-red-500">การโจมตี Fire : 48 - 66</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 75</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : ค้อน</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 20</p>
          <p className="text-red-500">Fire : 90</p>
          <p className="text-cyan-500">Cold : 0</p>
          <p className="text-amber-500">Lightning : 55</p>
          <p className="text-purple-700">Chaos : 15</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Iron Spiderling</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 60</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Iron Spiderling.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-10" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-10" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-10" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : FLOODEN CAVE/CREEPING SWAMP</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Iron / Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece Amber Shard / Pearl Shard / Jade Shard / Onyx Shard </p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Iron Spiderlingmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 23 - 30</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 5</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (เสียม)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 0</p>
          <p className="text-red-500">Fire : 35</p>
          <p className="text-cyan-500">Cold : 35</p>
          <p className="text-amber-500">Lightning : 0</p>
          <p className="text-purple-700">Chaos : 30</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Crystal Spiderling</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 84</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/CYSTALSPIDERLING.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-11" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-11" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-11" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : FLOODEN CAVE/CRYSTAL CAVERN</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Crystal / Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Crystal Shank / Amber Shard / Pearl Shard / Jade Shard / Onyx Shard </p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/CYSTALSPIDERLINGmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
    
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 22 - 29</h2>
    <h2 className="font-semibold text-amber-500">การโจมตี Lightning : 12 - 33</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 10</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (เสียม)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 5</p>
          <p className="text-red-500">Fire : 45</p>
          <p className="text-cyan-500">Cold : 25</p>
          <p className="text-amber-500">Lightning : 25</p>
          <p className="text-purple-700">Chaos : 40</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Silver Spiderling</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 110</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/SilverSpiderling.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-12" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-12" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-12" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : CREEPING SWAMP/VENOMOUS HOLLOW</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Silver / Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Arcane powder / Runic Essence / Mystic Oil / Gem Shard Box</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/SilverSpiderlingmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
    
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 40 - 51</h2>
    <h2 className="font-semibold text-cyan-500">การโจมตี Cold : 27 - 35</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 18</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (เสียม)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 10</p>
          <p className="text-red-500">Fire : 50</p>
          <p className="text-cyan-500">Cold : 60</p>
          <p className="text-amber-500">Lightning : 5</p>
          <p className="text-purple-700">Chaos : 50</p>
        </div>
 </div>
</div>

<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Copper Crab</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 55</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/COPPERCRAB.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-13" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-13" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-13" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : VENOMOUS HOLLOW</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Copper / Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Amber Shard / Pearl Shard / Jade Shard / Onyx Shard </p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/COPPERCRAPmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 25 - 32</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 5</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (เสียม)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 0</p>
          <p className="text-red-500">Fire : 35</p>
          <p className="text-cyan-500">Cold : 35</p>
          <p className="text-amber-500">Lightning : 0</p>
          <p className="text-purple-700">Chaos : 30</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Crystal Crab</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 80</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/CRYSTALCRAB.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-14" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-14" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-14" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : CRYSTAL CAVERN</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Crystal / Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Crystal Claw / Amber Shard / Pearl Shard / Jade Shard / Onyx Shard </p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/CRYSTAL CRABmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>

  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 24 - 31</h2>
    <h2 className="font-semibold text-amber-500">การโจมตี Lightning : 12 - 33</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 10</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (เสียม)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 5</p>
          <p className="text-red-500">Fire : 45</p>
          <p className="text-cyan-500">Cold : 25</p>
          <p className="text-amber-500">Lightning : 25</p>
          <p className="text-purple-700">Chaos : 40</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Gold Crab</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 107</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/gold crab.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-15" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-15" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-15" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : VENOMOUS HOLLOW</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Gold / Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Arcane powder / Runic Essence / Mystic Oil / Gem Shard Box</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/gold crabmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
   
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 43 - 53</h2>
    <h2 className="font-semibold text-cyan-500">การโจมตี Cold : 29 - 37</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 18</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (เสียม)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 10</p>
          <p className="text-red-500">Fire : 50</p>
          <p className="text-cyan-500">Cold : 60</p>
          <p className="text-amber-500">Lightning : 5</p>
          <p className="text-purple-700">Chaos : 50</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Hedgenyx</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 140</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Hedgenyx.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-16" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-16" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-16" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : VENOMOUS HOLLOW/CRYSTAL CAVERN</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Crystal / Red Herb / Green Herb / Tool Fragment / Rag / Scrap Metal / Leather Piece / Arcane powder / Runic Essence / Mystic Oil / Soul Fragment / Gem Shard Box</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Hedgenyxmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 52 - 70</h2>
    <h2 className="font-semibold text-amber-500">การโจมตี Lightning : 19 - 61</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 48</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (เสียม)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 15</p>
          <p className="text-red-500">Fire : 65</p>
          <p className="text-cyan-500">Cold : 10</p>
          <p className="text-amber-500">Lightning : 65</p>
          <p className="text-purple-700">Chaos : 60</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Gigatron</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 212</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Gigatron.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-17" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-17" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-17" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : CRYSTAL CAVERN</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Red Herb / Green Herb / Tool Fragment / Rag / Scrap Metal / Leather Piece / Arcane powder / Runic Essence / Mystic Oil / Crystal / Silver / Gold / Soul Fragment / Gem Shard Box / Illuminated Soul Fragment </p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Gigatronmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 44 - 59</h2>
    <h2 className="font-semibold text-cyan-500">การโจมตี Cold : 36 - 49</h2>
    <h2 className="font-semibold text-amber-500">การโจมตี Lightning : 14 - 69</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 115</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : การขุด (เสียม)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 20</p>
          <p className="text-red-500">Fire : 65</p>
          <p className="text-cyan-500">Cold : 70</p>
          <p className="text-amber-500">Lightning : 10</p>
          <p className="text-purple-700">Chaos : 65</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Jello-Bello</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 56</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/jello.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-18" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-18" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-18" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : TROPICAL BEACH</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Crystal / Tool Fragment / Rag / Jelly Lump / Red Herb / Green Herb / Scrap Metal / Leather Piece / Amber Shard / Pearl Shard / Jade Shard / Onyx Shard</p>
    
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/jellomap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
    
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 5 - 12</h2>
    <h2 className="font-semibold text-amber-500">การโจมตี Lightning : 10 - 42</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 5</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : กระบอง</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 0</p>
          <p className="text-red-500">Fire : 25</p>
          <p className="text-cyan-500">Cold : 40</p>
          <p className="text-amber-500">Lightning : 40</p>
          <p className="text-purple-700">Chaos : 0</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Cacto</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 75</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Cacto.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-19" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-19" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-19" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : FORSAKEN SANDS</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Wood / Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Amber Shard / Pearl Shard / Jade Shard / Onyx Shard</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Cactomap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 38 - 47</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 10</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : ขวาน</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 15</p>
          <p className="text-red-500">Fire : 10</p>
          <p className="text-cyan-500">Cold : 30</p>
          <p className="text-amber-500">Lightning : 65</p>
          <p className="text-purple-700">Chaos : 15</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Harvest Horror</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 98</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/HARVEST HORROR.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-20" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-20" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-20" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : GOLDEN GROUE</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Wood / Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Toxic Blossom / Arcane Powder / Runic Essence / Mystic Oil / Gem Shard Box</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/HARVEST HORRORmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 45 - 56</h2>
    <h2 className="font-semibold text-purple-700">การโจมตี Chaos : 37 - 43</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 18</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : ขวาน</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 0</p>
          <p className="text-red-500">Fire : 0</p>
          <p className="text-cyan-500">Cold : 25</p>
          <p className="text-amber-500">Lightning : 65</p>
          <p className="text-purple-700">Chaos : 20</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Shadowram</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 135</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/SHADOWRAM.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-21" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-21" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-21" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : GOLDEN GROUE</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Leather / Tool Fragment / Rag / Red Herb / Green Herb / Scrap Metal / Leather Piece / Black Horn / Arcane Powder / Runic Essence / Mystic Oil / Soul Fragment / Gem Shard Box</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/SHADOWRAMmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 58 - 72</h2>
    <h2 className="font-semibold text-cyan-500">การโจมตี Cold : 35 - 48</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 48</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : กระบอง</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 20</p>
          <p className="text-red-500">Fire : 30</p>
          <p className="text-cyan-500">Cold : 70</p>
          <p className="text-amber-500">Lightning : 30</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Guardian of Gaia</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 323</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Guardian of Gaia.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-22" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-22" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-22" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : GOLDEN GROUE</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Wood / Tool Fragment / Rag /  Vital Marrow / Red Herb / Green Herb / Scrap Metal / Leather Piece / Arcane Powder / Runic Essence / Mystic Oil / Soul Fragment / Gem Shard Box / Illuminated Soul Fragment </p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Guardian of Gaiamap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 112 - 148</h2>
    <h2 className="font-semibold text-red-500">การโจมตี Fire : 30 - 44</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 170</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ :  ขวาน</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 30</p>
          <p className="text-red-500">Fire : 15</p>
          <p className="text-cyan-500">Cold : 45</p>
          <p className="text-amber-500">Lightning : 90</p>
          <p className="text-purple-700">Chaos : 45</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Terra Golem</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 339</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Terra Golem.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-23" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-23" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-23" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : CREEPING SWAMP</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Rock / Tool Fragment / Rag / Terra Core / Red Herb / Green Herb / Scrap Metal / Leather Piece / Arcane Powder / Runic Essence / Mystic Oil / Soul Fragment / Gem Shard Box / Illuminated Soul Fragment </p>

    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Terra Golemmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
    
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 104 - 136</h2>
    <h2 className="font-semibold text-cyan-500">การโจมตี Cold : 33 - 45</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 170</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : ค้อน</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 35</p>
          <p className="text-red-500">Fire : 90</p>
          <p className="text-cyan-500">Cold : 10</p>
          <p className="text-amber-500">Lightning : 55</p>
          <p className="text-purple-700">Chaos : 40</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Crocobeast</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 304</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/CROCOBEAST.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-24" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-24" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-24" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : CREEPING SWAMP</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Leather / Tool Fragment / Rag / Hard Scale / Red Herb / Green Herb / Scrap Metal / Leather Piece / Arcane Powder / Runic Essence / Mystic Oil / Soul Fragment / Gem Shard Box / Illuminated Soul Fragment </p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/CROCOBEASTmap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
   
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 120 - 151</h2>
    <h2 className="font-semibold text-purple-700">การโจมตี Chaos : 27 - 42</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 170</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ : กระบอง</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 30</p>
          <p className="text-red-500">Fire : 35</p>
          <p className="text-cyan-500">Cold : 90</p>
          <p className="text-amber-500">Lightning : 35</p>
          <p className="text-purple-700">Chaos : 10</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Shimmer</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 188</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Shimmer.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-26" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-26" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-26" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : CREEPING SWAMP</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Crystal / Tool Fragment / Rag /Red Herb / Green Herb Scrap Metal / Leather Piece Arcane Powder / Runic Essence / Mystic Oil / Soul Fragment / Gem Shard Box</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Shimmermap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
   
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 65 -88</h2>
    <h2 className="font-semibold text-purple-700">การโจมตี Cold : 31 - 55</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 75</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ :  การขุด (เสียม)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 20</p>
          <p className="text-red-500">Fire : 70</p>
          <p className="text-cyan-500">Cold : 70</p>
          <p className="text-amber-500">Lightning : 10</p>
          <p className="text-purple-700">Chaos : 50</p>
        </div>
 </div>
</div>
<div className="bg-white w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <h2 className="font-semibold text-gray-800">Lumiram</h2>
    <h2 className="font-semibold text-blue-800">ค่าพลังชีวิต : 109</h2>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Lumiram.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
      <label htmlFor="my-modal-27" className="btn">สถานที่เกิด / ไอเท็มดรอป</label>
<input type="checkbox" id="my-modal-27" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-27" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg">MAP : CREEPING SWAMP</h3>
    <h2 className="font-bold text-sm">items Drop</h2>
    <p>Leather / Tool Fragment / Rag / Black Horn / Red Herb / Green Herb / Scrap Metal / Leather Piece / Arcane Powder / Runic Essence / Mystic Oil / Gem Shard Box</p>
    <p className="py-4"> <Image 
            width={550}
            height={350}
            src="https://commumorning.firebaseapp.com/monster/Lumirammap.png"
            objectFit="cover"
            alt="avatar"/>
            </p>
   
  </div>
</div>
      <div className="text-center mt-2">
    <h2 className="font-semibold text-red-500">การโจมตีกายภาพ : 49 - 67</h2>
    <h2 className="font-semibold text-purple-700">การโจมตี Lighting :  27 - 39</h2>
    <h2 className="font-semibold text-green-800">EXP ที่จะได้รับ : 30</h2>
    <h2 className="font-semibold text-gray-800">พ่ายแพ้อาวุธ :  การทุบ (กระบอง)</h2>
      </div>
      <div className="text-center mt-2">
          <h2 className="font-semibold text-gray-800">*การป้องกันธาตุ*</h2>
          <p className="text-gray-800">Physical : 15</p>
          <p className="text-red-500">Fire : 10</p>
          <p className="text-cyan-500">Cold : 60</p>
          <p className="text-amber-500">Lightning : 20</p>
          <p className="text-purple-700">Chaos : 5</p>
        </div>
 </div>
</div>


</div>
</div>
</div>

              
    );
};

export default monster;
