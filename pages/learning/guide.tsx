import Image from "next/image";
import Head from "next/head";
import Nav from "../../components/Nav";
import React from "react";
import Link from "next/link";

 function guide() {


  return (

    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
    <Head>
    <title>ความรู้ทั่วไปเกี่ยวกับเกม</title>
      </Head> 
      <Nav />
      <div className="sm:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <label htmlFor="my-modal-t1">
        <Image  
            width={550}
            height={400}
            src="/Activity/Activity-T1.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </label>
      </div>
      </div>
     
<input type="checkbox" id="my-modal-t1" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-3xl">
  <div className="modal-action">
  <label htmlFor="my-modal-t1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  </div>
           <Image 
      src="https://i.ibb.co/n7K9bbL/l1.jpg" 
      alt="l1"
        width={800}
        height={1000}
        objectFit="cover"
        />
  </div>
</div>

<div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <label htmlFor="my-modal-t2">
        <Image  
            width={550}
            height={400}
            src="/Activity/Activity-T2.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </label>
      </div>
      </div>
     
<input type="checkbox" id="my-modal-t2" className="modal-toggle" />
<div className="modal">
<div className="modal-box w-11/12 max-w-3xl">
<div className="modal-action">
  <label htmlFor="my-modal-t2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  </div>
           <Image 
      src="https://i.ibb.co/5LBzX9w/jewel.jpg"
      alt="l1"
        width={1000}
        height={1000}
        objectFit="cover"
        />
  </div>
</div>
<div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <Link href="/learning/3">
      <a target="_blank">
        <Image 
            width={550}
            height={400}
            src="/Activity/Activity-Materrial.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </a>
       </Link>
      </div>
      </div>
<div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <Link href="/learning/6">
      <a target="_blank">
        <Image 
            width={550}
            height={400}
            src="/Activity/Activity-bingo.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </a>
       </Link>
      </div>
      </div>
      <div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <label htmlFor="my-modal-t4">
        <Image  
            width={550}
            height={400}
            src="/Activity/Activity-box.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </label>
      </div>
      </div>
     
<input type="checkbox" id="my-modal-t4" className="modal-toggle" />
<div className="modal">
<div className="modal-box w-11/12 max-w-3xl">
<div className="modal-action">
  <label htmlFor="my-modal-t4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  </div>
           <Image 
      src="https://i.ibb.co/BcjZ1Z0/Chestnunt.jpg" 
      alt="l1"
        width={900}
        height={1000}
        objectFit="cover"
        />
  </div>
</div>
<div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <label htmlFor="my-modal-t5">
        <Image  
            width={550}
            height={400}
            src="/Activity/Activity-fish.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </label>
      </div>
      </div>
     
<input type="checkbox" id="my-modal-t5" className="modal-toggle" />
<div className="modal">
<div className="modal-box w-11/12 max-w-3xl">
<div className="modal-action">
  <label htmlFor="my-modal-t5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  </div>
           <Image 
     src="https://i.ibb.co/WgJPR5B/Fish-Pond.jpg" 
      alt="l1"
        width={1000}
        height={1000}
        objectFit="cover"
        />
  </div>
</div>
<div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <Link href="/tutorials/imploss">
      <a target="_blank">
        <Image 
            width={550}
            height={400}
            src="/Activity/Activity-im.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </a>
       </Link>
      </div>
      </div>
      <div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <label htmlFor="my-modal-t6">
        <Image  
            width={550}
            height={400}
            src="/Activity/Activity-orange.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </label>
      </div>
      </div>
     
<input type="checkbox" id="my-modal-t6" className="modal-toggle" />
<div className="modal">
<div className="modal-box w-11/12 max-w-3xl">
<div className="modal-action">
  <label htmlFor="my-modal-t6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  </div>
           <Image 
     src="https://i.ibb.co/gDsqQ6j/Orange-Box.jpg" 
      alt="l1"
        width={1000}
        height={1000}
        objectFit="cover"
        />
  </div>
</div>
      <div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <Link href="/tutorials/Monster">
      <a target="_blank">
        <Image 
            width={550}
            height={400}
            src="/Activity/Activity-monster.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </a>
       </Link>
      </div>
      </div>
      <div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <Link href="/Bait/guide">
      <a target="_blank">
        <Image 
            width={550}
            height={400}
            src="https://commumorning.firebaseapp.com/mmvimg/01.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </a>
       </Link>
      </div>
      </div>
      <div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <Link href="/GiftBox/box">
      <a target="_blank">
        <Image 
            width={550}
            height={400}
            src="https://commumorning.firebaseapp.com/mmvimg/06.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </a>
       </Link>
      </div>
      </div>
      <div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <Link href="/GiftBox/mapfishriver">
      <a target="_blank">
        <Image 
            width={550}
            height={400}
            src="https://commumorning.firebaseapp.com/mmvimg/N2.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </a>
       </Link>
      </div>
      </div>
      <div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <Link href="/weapon/guideweapon">
      <a target="_blank">
        <Image 
            width={550}
            height={400}
            src="https://commumorning.firebaseapp.com/mmvimg/02.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </a>
       </Link>
      </div>
      </div>
      <div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <Link href="https://bit.ly/3Lg9mpP">
      <a target="_blank">
        <Image 
            width={550}
            height={400}
            src="https://commumorning.firebaseapp.com/mmvimg/03.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </a>
       </Link>
      </div>
      </div>
      <div className="w-72 h-130 shadow-md rounded m-3">
    <div className="text-center mt-2">
    <Link href="/tutorials/egg">
      <a target="_blank">
        <Image 
            width={550}
            height={400}
            src="https://commumorning.firebaseapp.com/mmvimg/05.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto rounded-lg"
            
          />
          </a>
       </Link>
      </div>
      </div>
 
 








         </div> 
             </div>   
                </div>
  );
};
export default guide;
