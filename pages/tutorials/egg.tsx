import React from "react";
import Nav from "../../components/Nav";
import Image from "next/image";
import Head from "next/head";

function giftboxmmv() {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
      <title>ไข่ Egg - ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head>
      <Nav/>
      <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-accent">ไข่ Rainbow Egg</h2>
    <div className="p-2">
    <label htmlFor="my-modal-1" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-1" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={550}
            height={350}
            src="/egg/Rainbowdrop.jpg"
            objectFit="cover"
            alt="avatar"
          />
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="/egg/Rainbow.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-accent">ไข่ Bulky Egg</h2>
    <div className="p-2">
    <label htmlFor="my-modal-2" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-2" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
            width={550}
            height={350}
            src="/egg/bulkydrop.jpg"
            objectFit="cover"
            alt="avatar"
          />
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="/egg/Bulky.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-accent">ไข่ Cherry Dotted Egg</h2>
    <div className="p-2">
    <label htmlFor="my-modal-3" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
           width={550}
           height={350}
            src="/egg/CherryDotteddrop.jpg"
            objectFit="cover"
            alt="avatar"
          />
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="/egg/Cherry Dotted.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-accent">ไข่ Sky Dotted Egg</h2>
    <div className="p-2">
    <label htmlFor="my-modal-4" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
           width={550}
           height={350}
            src="/egg/SkyDotteddrop.jpg"
            objectFit="cover"
            alt="avatar"
          />
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="/egg/Sky Dotted.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-accent">ไข่ Grassy Dotted Egg</h2>
    <div className="p-2">
    <label htmlFor="my-modal-5" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
           width={550}
           height={350}
            src="/egg/GrassyDotteddrop.jpg"
            objectFit="cover"
            alt="avatar"
          />
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="/egg/Grassy Dotted.png"
            objectFit="cover"
            alt="avatar"
          />
      </div>
 </div>
</div>
<div className="w-72 h-96 shadow-md rounded m-3 bg-neutral">
    <div className="text-center mt-2">
    <h2 className="p-2 font-semibold badge-accent">ไข่ Gloomy Dotted Egg</h2>
    <div className="p-2">
    <label htmlFor="my-modal-6" className="btn btn-outline btn-primary">ไอเท็มดรอป</label>
    </div>
<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
  <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-1 top-2">✕</label>
    <h3 className="font-bold text-lg">ITEMS DROP</h3>
    <Image 
           width={550}
           height={350}
            src="/egg/Gloomy Dotted.jpg"
            objectFit="cover"
            alt="avatar"
          />
    </div>
  </div>
      <div className="h-3/3 w-full p-6">
      <Image 
            width={350}
            height={350}
            src="/egg/Gloomy Dotted.png"
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