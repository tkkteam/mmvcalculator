import React from "react";
import Nav from "../../components/Nav";
import Image from "next/image";
import Head from "next/head";

function giftboxmmv() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
      <title>กล่องของขวัญ - ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head>
      <Nav/>
      <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
      {/* <Image 
            width={1400}
            height={95}
            src="/monster/monsterbanner.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
          /> */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">COW</h2>
    <div className="p-2">
    <label htmlFor="my-modal-1" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-1" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_CowBox.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/CowBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">GEMSHARD</h2>
    <div className="p-2">
    <label htmlFor="my-modal-2" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-2" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_GemShard.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/GemShardBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">ANGELIC</h2>
    <div className="p-2">
    <label htmlFor="my-modal-3" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Angelic.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/AngelicBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">ORANGE</h2>
    <div className="p-2">
    <label htmlFor="my-modal-4" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Orange.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/OrangeBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">GEMSTONE</h2>
    <div className="p-2">
    <label htmlFor="my-modal-5" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Gemstone.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/GemstoneBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">MORNING</h2>
    <div className="p-2">
    <label htmlFor="my-modal-6" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Morning.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/MorningBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">THE CROSSING</h2>
    <div className="p-2">
    <label htmlFor="my-modal-7" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-7" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_TheCrossing.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/TheCrossingBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">FLORALWOODS</h2>
    <div className="p-2">
    <label htmlFor="my-modal-8" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-8" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-8" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_FloralWoods.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/FloralWoodsBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">PINEVALLAY</h2>
    <div className="p-2">
    <label htmlFor="my-modal-9" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-9" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-9" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_PineValley.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/PineValley Box.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">MATERIAL</h2>
    <div className="p-2">
    <label htmlFor="my-modal-10" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-10" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-10" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Material.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/MaterialBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>

<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">CHESTNUT</h2>
    <div className="p-2">
    <label htmlFor="my-modal-12" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-12" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-12" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_chestnut.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/chestnut.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">FISHING</h2>
    <div className="p-2">
    <label htmlFor="my-modal-13" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-13" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-13" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Fishing.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/Fishing.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">METALLIC SUMMONING</h2>
    <div className="p-2">
    <label htmlFor="my-modal-11" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-11" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-11" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Summoning.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/Metallic Summoning Box.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">FURRY SUMONING</h2>
    <div className="p-2">
    <label htmlFor="my-modal-14" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-14" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-14" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Furry_Summoning.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/Furry_Summoning.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">CELESTIAL SUMMONING I</h2>
    <div className="p-2">
    <label htmlFor="my-modal-15" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-15" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-15" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Summoning_I.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/Celestial_Summoning_I.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">CELESTIAL SUMMONING II</h2>
    <div className="p-2">
    <label htmlFor="my-modal-16" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-16" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-16" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Summoning_Il.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/Celestial_Summoning_II.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">CELESTIAL SUMMONING III</h2>
    <div className="p-2">
    <label htmlFor="my-modal-17" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-17" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-17" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Box_Summoning_IlI.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/Celestial_Summoning_III.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">Verdant Box</h2>
    <div className="p-2">
    <label htmlFor="my-modal-18" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-18" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-18" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={940}
            height={788}
            src="https://commumorning.firebaseapp.com/Box/Verdant_Box.jpg"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/VerdantBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">Fantasy Box</h2>
    <div className="p-2">
    <label htmlFor="my-modal-19" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-19" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-19" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={940}
            height={788}
            src="https://commumorning.firebaseapp.com/Box/Fantasy_Box.jpg"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/FantasyBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">Noxious Box</h2>
    <div className="p-2">
    <label htmlFor="my-modal-20" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-20" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-20" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={940}
            height={788}
            src="https://commumorning.firebaseapp.com/Box/Noxious_Box.jpg"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/NoxiousBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">Mammal Box</h2>
    <div className="p-2">
    <label htmlFor="my-modal-21" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-21" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-21" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={940}
            height={788}
            src="https://commumorning.firebaseapp.com/Box/Mammal_Box.jpg"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/MammalBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">Molten Box</h2>
    <div className="p-2">
    <label htmlFor="my-modal-22" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-22" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-22" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={940}
            height={788}
            src="https://commumorning.firebaseapp.com/Box/Molten_Box.jpg"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/MoltenBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">Otherworldly Box</h2>
    <div className="p-2">
    <label htmlFor="my-modal-23" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-23" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-23" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={940}
            height={788}
            src="https://commumorning.firebaseapp.com/Box/Otherworldly_Box.jpg"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/OtherworldlyBox.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">Aquarium I</h2>
    <div className="p-2">
    <label htmlFor="my-modal-24" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-24" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-24" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Aquarium1_Box.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/Aquarium1.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">Aquarium II</h2>
    <div className="p-2">
    <label htmlFor="my-modal-25" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-25" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-25" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/Aquarium2_Box.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/Aquarium2.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">PandoraBox 1</h2>
    <div className="p-2">
    <label htmlFor="my-modal-26" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-26" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-26" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/PandoraBox1_Box.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/PandoraBox1.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-primary">PandoraBox 2</h2>
    <div className="p-2">
    <label htmlFor="my-modal-27" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-27" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-27" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image
            width={850}
            height={850}
            src="https://commumorning.firebaseapp.com/Box/PandoraBox2_Box.png"
            objectFit="cover"
            alt="avatar"/>
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="https://commumorning.firebaseapp.com/Box/PandoraBox2.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>




</div>
   </div>
       </div>
        );
  };
export default giftboxmmv;