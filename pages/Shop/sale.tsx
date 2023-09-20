import React from "react";
import type { NextPage } from "next";
import Navback from "../../components/Navback";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const sale: NextPage = () => {
  return (
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
      <title>ร้านค้าขายไอเทมเกม MMV V.1.0</title>
      </Head>
      <Navback/>
         <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div className="flex">
    <div className="py-1">
        <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
            </svg>
            </div>
        <div>
      <p className="font-bold">หากโดนโกงอย่านิ่งเฉย รายงานเพื่อเตือนภัยสังคม แล้วจะไม่มีใครถูกหลอกเป็นครั้งที่สอง</p>
      <p className="text-sm">โปรดซื้อขายอย่างมีสติ ดูให้แน่ใจก่อนโอนเงินทุกครั้ง</p>
    </div>
  </div>
</div> 
<img className="flex flex-col self-center w-64 h-64 p-6" src="https://i.ibb.co/0BstTL8/morningmoon-logo.png"></img>
<div className="p-24 flex flex-wrap items-center justify-center">
    
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
        <img className="relative w-40" src="https://i.ibb.co/zbz5gdP/adminvisarut.jpg" alt=""/>
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">Visarut RT</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">ทีมงานแอดมิน</span>
          <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">MMV</span>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
        <img className="relative w-40" src="https://i.ibb.co/sgVGdQK/admin2.jpg" alt=""/>
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">Vutichai Kunpipat</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">ทีมงานแอดมิน</span>
          <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">CM</span>
        </div>
      </div>
    </div>
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
        <img className="relative w-40" src="https://i.ibb.co/RbxLv4R/TATUMCOM.png" alt=""/>
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">TATUM IT</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">ทีมงานแอดมิน</span>
          <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">MMV</span>
        </div>
      </div>
    </div>
  </div>
  <section className="dark:bg-gray-800 dark:text-gray-100">
			<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
				<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">คําถามที่พบบ่อย</h2>
				<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
					<details>
						<summary className="py-2 outline-none cursor-pointer focus:underline">โดนโกงออนไลน์ ทำยังไงให้ได้เงินคืน!</summary>
						<div className="px-4 pb-4">
							<p>1.แคปหน้าจอทั้งหมดแล้วพรินท์ออกมา.</p>
				  <p>2.แจ้งตำรวจเพื่อดำเนินคดีและออกคำสั่ง อายัดบัญชี</p>
				  <p>3.ติดต่อธนาคารเพื่อทำการอายัดบัญชี</p>
						</div>
					</details>
					<details>
						<summary className="py-2 outline-none cursor-pointer focus:underline">เข้าไปเช็คที่ไหนได้บ้างว่าคนไหนไม่โกง</summary>
						<div className="px-4 pb-4">
				<p>1.เข้าไปตรวจสอบชื่อคนโกงได้ที่เว็บนี้ www.blacklistseller.com</p>
				  <p>2.กดดูเครดิตของคนขายก่อนทุกครั้ง</p>
				  <p>3.ดูสินค้าว่าตรงกับเลขกระเป๋าที่ผู้ขายโพสต์ขายหรือไม่</p>
						</div>
					</details>
				</div>
			</div>
		</section>
  
      <div className="flex flex-col self-center">
        <Link href="https://www.blacklistseller.com/"> 
        <a target="_blank">
            <button className=" group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow ">
            <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">แจ้งผู้ขายที่ควรระวัง</span>
            </button>
            </a>
        </Link>  
        </div>  
     
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/SKpLzG8/saller08.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Bam Sirapim</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/784981892739847/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/1819800898/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x6A541A6b01614D5E738e3CE561aD82c353138041/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>

</div>
<div className="mt-2 text-sm text-red-500">
  ขาย: เจมตีมอน อาวุธ เซ็ตล่าบอส Logky Ozzy ของคราฟ ของตีบวก เหรียญ เมล็ด ผลผลิต น้ำยาผสมพันธุ์</div>
      </div>
      </div>
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/WtgVycq/saller01.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Hutsachai Jae Rainadee</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/818543739383662/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100015492672034/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x001168BF78E0b34482dF21a8ef503E4E8488f529/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: แร่ เหรียญLUMI</div>
      </div>
      </div>     
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/Rj3vnkM/saller02.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      อนุชา ชัยเสนา</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ยังไม่มี </span>
<Link href="https://www.facebook.com/groups/491556275415745/user/100022699721712/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x0d0EC911a56F4A33cCD6200B43dc3D022A689316/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ozzy logky</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/TL8M7ds/saller04.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Jay Chusak</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/581962076375164/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100004755755153/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: อาวุธ เซ็ตล่าบอส ถุงมือ รองเท้า ผ้าคลุม แหวน</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/9G62ZQM/saller05.png"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Vorapong Paladkong</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856341002270602/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100001296415557/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x760f2f2dB43Dd24f53DF2A6AD50aEf1aBC61fB3d/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ของคราฟ ของตีบวก เจมตีมอน</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/FDxsRPT/saller06.png"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Suttirak Srimugda</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/616842516220453/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100008213138929/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย:เหรียญ ผลไม้ ของตีบวก</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/Ln1mZvq/saller07.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      J JayJakrapan</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/842524433652259/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100000217024756/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x73E81Ae6DfC9BAF00c3b2cA7f9762FF3C51dA975/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ของตีบวก ของคราฟ อื่นๆ</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/wyL6d8B/saller09.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Tossaphon Numpeth</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856359278935441/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/1711343042/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x8bF04464dEA097A958e86ae5DE02F83f49ef0813/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: แร่ เจมตีมอน</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/2ycKSj7/saller10.png"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Wittawat Payappanon</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856352975602738/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100007301565133/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0xabBA649Cb5079B522410024fD2fac092817e975C/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ของคราฟ ของตีบวก เจมตีมอน</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/bdKdbMY/saller13.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      บัญชีนี้ไม่ได้รอใครกลับมาฯ</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856365298934839/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100067437009710/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0xC349a029fA8a047918d4261792ffcdB586AaeaFF/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เหรียญ เมล็ด</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/JxK3ZkJ/saller11.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      PN Darkqueen</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/653595432545161/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100008353654870/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x45B2CE95A945a4E1201D3516f0Fc42FbD4EBACE6/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน เซ็ตล่าบอส ของคราฟ</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/strWjqn/saller12.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Nil Pattalapon</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ยังไม่มี </span> 
<Link href="https://www.facebook.com/groups/491556275415745/user/100051086674966/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/crTBrPF/saller14.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Rattanakorn</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/731188778119159/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/1348203250/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x2285D4f4FFe008D4E0ECAda5Fc12a6cE3FeD932e/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน อาวุธ เซ็ตล่าบอส</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/WynVXpF/saller15.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      จอมยุทธเอ๋ เนเวอร์ดายส์</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/640163733888331/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100003551505560/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน อาวุธ เซ็ตล่าบอส</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/JzPcVsf/saller16.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      YokYeen Kanmotarn</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856615828909786/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100000504822636/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เมล็ด เหรียญLUMI</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/JCWstz9/saller17.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Pawarut Parkpean</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856379448933424/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100027721032413/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x76Db5B01C41E46Af0bFdb108c5862E0ab4cF95cb/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ผลไม้ เมล็ด เหรียญLUMI</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/JqX2nfP/saller18.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      BungAnt OkaShi</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856374058933963/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100000446958525/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x5D3f8dFAd5F693137219A7D5dF2703E35906Ee65/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน อาวุธ เซ็ตล่าบอส</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/K20CjRD/saller19.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Dulpithak</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/3310979349187170/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100001890881736/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ของคราฟ เจมตีมอน ของตีบวก อาวุธ เซ็ตล่าบอส เหรียญLUMI</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/nmFpskc/saller20.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      ฉัน ไม่ใช่ผู้วิเศษ</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856358938935475/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100001989515479/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน ของคราฟ ของตีบวก แร่ เหรียญLUMI</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/2y4kxQJ/saller21.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Wuttichai Raksapon</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/680327963205241/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100056164921609/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ผลไม้</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/DLNQjrG/saller22.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Buay Chalern</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856500858921283/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/1760613707/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เหรียญ ผลผลิต</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/mBj9Qt4/saller23.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Tanuki Nighttenji</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/731179114786792/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100000002275506/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน อาวุธ ผ้าคลุม LOGKY ของคราฟ ของตีบวก ผลไม้ เหรียญ เมล็ด</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/TTJJ91H/saller24.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      เรื่องของ วันพรุ่งนี้</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856513155586720/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100009313426807/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: แร่ เจมตีมอน อาวุธ ถุงมือ รองเท้า ผ้าคลุม เหรียญ เมล็ด ผลผลิต ยาเพิ่มเลือด แหวน คิวปิด LOGKY ของคราฟ ของตีบวก ผลไม้</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/h2w6Tvz/saller25.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Jakkrit Wongsamut</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/835320414372661/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/1389056083/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ของคราฟ เหรียญ ผลผลิต</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/ZJnHs20/saller26.png"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Suttisak</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856508822253820/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100001927470354/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เหรียญ ของตีบวก Logky Ozzy</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/s13BFf5/saller26.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      เฒ่าแก่ เกาลัด</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/776606723577364/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100045217209461/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เหรียญLUMI KKUB USDT</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/fncV1Db/saller27.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Natthapon Phota</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856379802266722/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100010412440278/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เหรียญ ของตีบวก</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/80HXfLL/saller28.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Benz Phalakon</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/870545287516840/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100006844838057/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เหรียญ ผลผลิต แร่ เมล็ด ของตีบวก</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/HPhPLdp/saller29.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Pongpun Tipta</span>
        
   <div className="inline-flex" role="group" aria-label="Button group">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
<Link href="https://www.facebook.com/groups/491556275415745/user/100001366954707/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/profile?walletAddress=0x9B3dDB33540Ad7aAbc9C33Cdf514552BD1BD4Ebe">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ของคราฟ ของตีบวก</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/85g4vzn/saller30.png"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Panyangam Weerayut</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/749871946250842/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100000557674542/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ผ้าคลุม น้ำยาผสมพันธุ์ อาวุธ เจมตีมอน</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/5Kw5QcV/saller31.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      พัชราพรรณ จันทร์โชติ นัสครับ</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/856361385601897/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100000403678800/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน เซ็ตล่าบอส แร่ เหรียญ</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/7z22RG3/saller32.png"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Tor Witchakon</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/858814848689884/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100025232867367/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน อาวุธ</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/XYjkHvn/saller33.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Takeni Kb</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/609435856961119/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100001053820909/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน อาวุธ ผลผลิต Logky Ozzy</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/p1xDHXm/saller34.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Boonlit Pongkun</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/882159399688762/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100001133057233/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ของตีบวก เจมตีมอน เมล็ด logky ผลผลิต</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/0nJ8QtR/saller35.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Boonlit Pongkun</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
    ยังไม่มี</span> 
<Link href="https://www.facebook.com/blackspace.morn">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span>
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: เจมตีมอน  ของคราฟ ของตีบวก  เมล็ด ผลผลิต น้ำยาผสมพันธุ์</div>
      </div>
      </div> 
      <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex items-center space-x-3">
      <div className="inline-flex w-14 h-14 overflow-x-auto rounded-full">
      <Image 
            width={80}
            height={80}
            src="https://i.ibb.co/mT54s1J/saller36.jpg"
            objectFit="cover"
            alt="avatar"
            className="h-6 w-6 text-orange-400"
          />
      </div>
      </div>
      <div className="ml-4">
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-white transition-colors duration-150">
      Nonthawat</span>
        
        <div className="inline-flex" role="group" aria-label="Button group">
<Link href="https://www.facebook.com/groups/morningmoonvillage/posts/822439415660761/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-green-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-blue-500"> 
     ดูเครดิต </span> 
  </a>
</Link>
<Link href="https://www.facebook.com/groups/491556275415745/user/100000549452085/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-yellow-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-green-500"> 
   ดูสินค้า</span> 
  </a>
</Link>
<Link href="https://www.megaland.io/">
 <a target="_blank">
   <span className="items-center text-black text-sm bg-red-400 font-semibold px-2 rounded-full focus:shadow-outline hover:bg-yellow-500"> 
   Megaland</span> 
  </a>
</Link>
</div>
<div className="mt-2 text-sm text-red-500">ขาย: ของตีบวก เจมตีมอน เมล็ด logky ผลผลิต</div>
      </div>
      </div> 



    </div>
  </div>
                   
    );
};

export default sale;
