import Head from "next/head";
import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Image from "next/image";
import {IBitkubTicker,ILatestRates,IUsdLumiCurrentPrice,} from "../interfaces/responses";
import useSWR from "swr";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import Script from "next/script";
import { Carousel } from "antd";
import { Button, Modal,} from "flowbite-react";







function Home() {
  const [thbKub, setThbKub] = useState<number | null>(null);
  const [usdtkkub, setusdtkkub] = useState<number | null>(null);
  const [usdlumi, setusdlumi] = useState<number | null>(null);
  const [kusdt, setkusdt] = useState<number | null>(null);
  const [thbUsdt, setThbUsdt] = useState<number | null>(null);
  const [thbLumi, setThbLumi] = useState<number | null>(null);
  const [thbUsd, setThbUsd] = useState<number | null>(null);

  const [openModal, setOpenModal] = useState<string | undefined>();
  const [modalSize, setModalSize] = useState<string>("sm");
  const props = { modalSize, openModal, setModalSize, setOpenModal };


  const initialRates = async () => {
    const now = Math.floor(Date.now() / 1000);
    const responses = await Promise.all([
      axios.get("https://api.bitkub.com/api/market/ticker?sym=THB_KUB"),
      axios.get("https://api.bitkub.com/api/market/ticker?sym=THB_USDT"),
      axios.get<ILatestRates>("https://api.loremboard.finance/api/v1/dashboard/fiat/latest"),
      axios.get<IUsdLumiCurrentPrice>(`https://api.bkc.loremboard.finance/charts/history?symbol=LUMI&resolution=120&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=KKUB&resolution=15&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=DK&resolution=15&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=KUSDT&resolution=15&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=GOLD&resolution=15&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      ),
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=KM&resolution=15&from=${
        now - 10000
      }&to=${now}&currencyCode=USD`
    ),
    axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=KUSDC&resolution=15&from=${
      now - 10000
    }&to=${now}&currencyCode=USD`
  ),
  axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=SCP&resolution=15&from=${
      now - 10000
    }&to=${now}&currencyCode=USD`
  ),
    ]);
    setThbKub(responses[0].data.THB_KUB.last);
    setThbUsdt(responses[1].data.THB_USDT.last);
    setThbUsd(responses[2].data.rates.THB);
    setThbLumi( responses[3].data.c[responses[3].data.c.length - 1] *responses[2].data.rates.THB);
    setusdtkkub( responses[4].data.c[responses[4].data.c.length - 1] *responses[2].data.rates.USD);
    setusdlumi( responses[3].data.c[responses[3].data.c.length - 1] *responses[2].data.rates.USD);
    setkusdt( responses[6].data.c[responses[6].data.c.length - 1] *responses[2].data.rates.USD);
    
  };
  useSWR(
    "https://api.loremboard.finance/api/v1/dashboard/fiat/latest",
    async (apiPath) => {
      const latestRatesResponse = await axios.get<ILatestRates>(apiPath);
      setThbUsd(latestRatesResponse.data.rates.THB);
    },
    {
      refreshInterval: 10000,
      revalidateOnFocus: true,
    }
  );
  
  useSWR(
    "lumiUsdCurrentPrice",
    async () => {
      const now = Math.floor(Date.now() / 1000);

      const usdLumiCurrentPriceResponse = await axios.get<IUsdLumiCurrentPrice>(
        `https://api.bkc.loremboard.finance/charts/history?symbol=LUMI&resolution=120&from=${
          now - 10000
        }&to=${now}&currencyCode=USD`
      );

      setThbLumi(
        (thbUsd || 0) *
          usdLumiCurrentPriceResponse.data.c[
            usdLumiCurrentPriceResponse.data.c.length - 1
          ]
      );
    },
    {
      refreshInterval: 10000,
      revalidateOnFocus: true,
    }
  );
  useEffect(() => {
    initialRates();
  }, []);

  useEffect(() => {
    const wsBitkubConnection = () => {
      const BASE_API_URL_BITKUB = "wss://api.bitkub.com/websocket-api";

      const wsBitkub = new WebSocket(
        `${BASE_API_URL_BITKUB}/market.ticker.thb_kub,market.ticker.thb_usdt`
      );

      wsBitkub.onopen = () => {
        wsBitkub.onmessage = (ev) => {
          try {
            const { id, last } = JSON.parse(ev.data) as IBitkubTicker;

            switch (id) {
              case 8:
                setThbUsdt(last);
                break;

              case 92:
                setThbKub(last);
                break;
            }
          } catch (error) {
            if (error instanceof SyntaxError) {
              // Do nothing
              return;
            }

            console.log("❗️", (error as Error).name);
          }
        };
      };

      wsBitkub.onclose = () => wsBitkubConnection();
    };

    wsBitkubConnection();
  }, []);



  return (
    
    <div className="flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
        <title>Morning Moon Village Calculator</title>
      </Head>   
      <Navbar />
      <Script
   id="Adsense-id"
   data-ad-client="ca-pub-3649237172941694"
  async strategy="afterInteractive"
  onError={ (e) => { console.error("Script failed to load", e) }}
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
/>

  <div className="xl:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
  <Carousel autoplay>
    <div>
    <Image src="https://commumorning.firebaseapp.com/images/nav1.png" alt="BANNER" width={900} height={350} />
    </div>
    <div>
    <Image src="https://commumorning.firebaseapp.com/images/nav2.png" alt="BANNER" width={900} height={350} />
    </div>
    <div>
    <Image src="https://commumorning.firebaseapp.com/images/nav3.png" alt="BANNER" width={900} height={350} />
    </div>
    <div>
    <Image src="https://commumorning.firebaseapp.com/images/nav4.png" alt="BANNER" width={900} height={350} />
    </div>
    <div>
    <Image src="https://commumorning.firebaseapp.com/images/nav5.png" alt="BANNER" width={900} height={350} />
    </div>
  </Carousel>
  <div className="flex flex-wrap gap-4">
        
        <Button className="text-yellow-400" onClick={() => props.setOpenModal("size")}>สนับสนุนนักพัฒนา.</Button>
      </div>
      <Modal show={props.openModal === "size"} size={props.modalSize} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header className="text-black" >ขอบคุณสำหรับ Donate.</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6  ">
          <p className="border-2 border-indigo-600 text-lg text-center leading-relaxed text-red-400 "> ต้องการสนับสนุนนักพัฒนาเว็บไซต์ MMV Calculator  </p>
             <p className=" leading-relaxed text-green-600" >BitkubNEXT Wallet : 0831100612 </p>
             <p className=" leading-relaxed text-blue-600">KUB -LUMI -USDT -TOKEN -NFT</p>
          
          </div>
        </Modal.Body>
      </Modal>
      <div className="border-dashed border-2 border-indigo-600" >
      <div className="grid  grid-cols-2 gap-4 ">
      
           <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="https://commumorning.firebaseapp.com/icons/kub.png" alt="kub" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbKub}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbKub}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(thbKub || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">THB/KUB</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="https://commumorning.firebaseapp.com/icons/kub.png" alt="kub" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!usdtkkub}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!usdtkkub}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(usdtkkub || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">USD/KUB</p>
                </div>
              </CSSTransition>
            </div>
          </div> 
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="https://commumorning.firebaseapp.com/icons/lumi.png" alt="lumi" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbLumi}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbLumi}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {parseFloat((thbLumi || 0).toFixed(2)).toLocaleString(
                      "th-TH"
                    )}
                  </h1>
                  <p className="text-2xs opacity-60">THB/LUMI</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="https://commumorning.firebaseapp.com/icons/lumi.png" alt="lumi" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!usdlumi}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!usdlumi}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {parseFloat((usdlumi || 0).toFixed(2)).toLocaleString(
                      "th-TH"
                    )}
                  </h1>
                  <p className="text-2xs opacity-60">USD/LUMI</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="https://commumorning.firebaseapp.com/icons/usdt.png" alt="usdt" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!thbUsdt}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!thbUsdt}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(thbUsdt || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">THB/USDT</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="card bg-base-100 flex flex-row overflow-hidden shadow-lg">
            <div className="bg-neutral flex flex-col items-center justify-center w-12 h-12 p-2">
              <Image src="https://commumorning.firebaseapp.com/icons/usdt.png" alt="usdt" width={80} height={80} />
            </div>
            <div className="relative flex flex-col items-center justify-center flex-1 text-center">
              <CSSTransition
                in={!kusdt}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <Image
                  className="absolute"
                  src="/images/chicken_loading.gif"
                  alt="chicken_loading"
                  width={36}
                  height={36}
                />
              </CSSTransition>
              <CSSTransition
                in={!!kusdt}
                timeout={150}
                classNames="pop"
                unmountOnExit
              >
                <div className="absolute flex flex-col">
                  <h1 className="font-bold">
                    {(kusdt || 0).toLocaleString("th-TH")}
                  </h1>
                  <p className="text-2xs opacity-60">KUSD/USDT</p>
                </div>
              </CSSTransition>
            </div>
          </div>
      </div> 
      </div> 
       {/*----------------------------------------END-------------------------- */}
       
          <Image 
            width={1170}
            height={95}
            src="https://commumorning.firebaseapp.com/title/titlebarmmv.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />
       
    <div className= "flex items-center justify-center border-dashed border-2 border-indigo-600 hover:bg-fixed">
<div className="dropdown dropdown-hover">
<div tabIndex={0} className="w-full rounded lg:w-2/3 md:w-2/2 ">
        <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/Btn/whitepaper.png"
            objectFit="cover"
            alt="avatar"
            className="max-w-full h-auto "
            
          />
        </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-dotted border-2 border-blue-600 rounded-box w-64">
      <li>
    <Link href="/learning/guide">
    <p className="text-red-600">ความรู้ทั่วไปทั้งหมด</p>
    
     </Link>
     </li>

    <li>
    <Link href="/learning/Jewels">
    <a target="_blank">
    <p className="text-blue-600">Jewels ชนิดต่างๆ</p>
     </a>
     </Link>
      </li>

      <li>
    <Link href="/GiftBox/box">
    <a target="_blank">
    <p className="text-blue-600">กล่องสมบัติ</p>
     </a>
     </Link>
      </li>
      
      <li>
    <Link href="/tutorials/egg">
    <a target="_blank">
    <p className="text-blue-600">ไข่ไก่ชนิดต่างๆ</p>
     </a>
     </Link>
      </li>
  
      <li>
    <Link href="/learning/6">
    <a target="_blank">
    <p className="text-blue-600">การเล่นบิงโก</p>
     </a>
     </Link>
      </li>

      <li>
    <Link href="/tutorials/imploss">
    <a target="_blank">
    <p className="text-blue-600">Impermanent Loss คือ</p>
     </a>
     </Link>
      </li>


  </ul>
  </div>
  
       <div className="dropdown dropdown-hover ">
       <div tabIndex={0} className="w-full rounded lg:w-2/3 md:w-2/2 ">
        <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/Btn/bait.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-dotted border-2 border-blue-600 rounded-box w-52">
      <li>
    <Link href="/GiftBox/mapfishriver">
    <a target="_blank">
    <p className="text-blue-600">ของดรอปตกปลา</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="/Bait/fishingrod">
    <a target="_blank">
    <p className="text-blue-600">เบ็ดแต่ละชนิด</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="/Bait/Bait">
    <a target="_blank">
    <p className="text-blue-600">เหยื่อตกปลาแต่ละชนิด</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="/Bait/FishingCharm">
    <a target="_blank">
    <p className="text-blue-600">Fishing Charm</p>
     </a>
     </Link>
      </li>
  </ul>
  </div>
  <div className="dropdown dropdown-hover">
  <div tabIndex={0} className="w-full rounded lg:w-2/3 md:w-2/2 ">
        <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/Btn/weapon.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-dotted border-2 border-blue-600 rounded-box w-56">
      <li>
    <Link href="/weapon/guideweapon">
    <a target="_blank">
    <p className="text-red-600">การตีบวกอุปกรณ์ทั้งหมด</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="/weapon/PremiumAxe">
    <a target="_blank">
    <p className="text-blue-600">BRONZE HATCHET</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="/weapon/PremiumHammer">
    <a target="_blank">
    <p className="text-blue-600">BRONZE MAUL</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="/weapon/PremiumClub">
    <a target="_blank">
    <p className="text-blue-600">BRONZE MACE</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="/weapon/PremiumCloak">
    <a target="_blank">
    <p className="text-blue-600">ผ้าคลุม SIMPLE CAPE</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="/weapon/PremiumLeatherBoots">
    <a target="_blank">
    <p className="text-blue-600">รองเท้า Leather Boots</p>
     </a>
     </Link>
      </li>
  </ul>
  </div>
  <div className="dropdown dropdown-hover">
  <div tabIndex={0} className="w-full rounded lg:w-2/3 md:w-2/2 ">
        <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/Btn/shop.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border-dotted border-2 border-blue-600 rounded-box w-64">
      <li>
    <Link href="/Shop/sale">
    <a target="_blank">
    <p className="text-red-600">ร้านขายของในกลุ่ม MMV</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="https://app.diamon.finance/#/swap">
    <a target="_blank">
    <p className="text-blue-600">Diamon.finance</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="https://pancakeswap.finance/">
    <a target="_blank">
    <p className="text-yellow-600">Pancakeswap.finance</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="https://www.megaland.io/">
    <a target="_blank">
    <p className="text-red-600">MegaLand NFT</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="https://mmv.megaland.io/">
    <a target="_blank">
    <p className="text-green-600">MMV Market</p>
     </a>
     </Link>
      </li>
      <li>
    <Link href="https://www.bitkub.com/">
    <a target="_blank">
    <p className="text-green-600">BitKub</p>
     </a>
     </Link>
      </li>
      
  </ul>
  </div>
<div className="dropdown dropdown-hover dropdown-end">
<div tabIndex={0} className="w-full rounded lg:w-2/3 md:w-2/2 ">
        <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/Btn/monster.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  border-dotted border-2 border-blue-600 rounded-box w-52">
    <li>
    <Link href="/tutorials/Monster">
    <a target="_blank">
    <p className="text-blue-600">มอนสเตอร์</p>
     </a>
     </Link>
      </li>
  </ul>
    </div>
    </div>

  
              
  <div className="flex-1 flex flex-col sm:flex-row ">
    <main className="flex-1 border-t-4 border-indigo-500">
    <Image 
            width={600}
            height={150}
            src="https://commumorning.firebaseapp.com/title/new.png"
            objectFit="contain"
            alt="avatar"
            className="max-w-full h-auto"
          />
                    
                    <YoutubeEmbed embedId="ITWQ56JUlE4" />
   <Image 
            width={640}
            height={360}
            src="https://commumorning.firebaseapp.com/images/commu1.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto"
          />
    </main>
   
    <aside className="flex-1 flex-col  border-t-4 border-indigo-500">
    <Image 
             width={600}
             height={150}
             src="https://commumorning.firebaseapp.com/title/menummv.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
    <div className="grid grid-cols-1 gap-1 ">
    <div className="grid flex-grow  place-items-center"> 
  <div className="hover:translate-y-1 transition-all rounded">
        <Link href="/price"> 
        
        <Image 
            width={350}
            height={150}
            src="https://commumorning.firebaseapp.com/Btn/coinprice.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          
        </Link>
        </div>
        </div> 
       
        <div className="grid flex-grow  place-items-center">
  <div className="hover:translate-y-1 transition-all rounded">
        <Link href="/calculator">
        <Image 
             width={350}
             height={150}
             src="https://commumorning.firebaseapp.com/Btn/calculator.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
        </Link>
        </div>
  </div>
  <div className="grid flex-grow  place-items-center">
  <div className="hover:translate-y-1 transition-all rounded">
  <Link href="https://www.cmhexa.com/lookdo">
            <a target="_blank">
            <Image 
             width={350}
             height={150}
             src="https://commumorning.firebaseapp.com/Btn/tokencheck.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
            </a>
        </Link>  
        </div>
  </div>
  <div className="grid flex-grow  place-items-center"> 
  <div className="hover:translate-y-1 transition-all rounded">
  <Link href="https://www.mmv-toolkit.com/">
            <a target="_blank">
            <Image 
             width={350}
             height={150}
             src="https://commumorning.firebaseapp.com/Btn/mmvtoolkit.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
            </a>
        </Link>  
        </div>
            </div> 
            </div>
    </aside>
    </div>
    <Image 
            width={1170}
            height={95}
            src="https://commumorning.firebaseapp.com/title/titlebarcommu.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />
    <div className="flex-1 flex flex-col sm:flex-row">
    <main className="flex-1 ">
    <Image 
             width={600}
             height={150}
             src="https://commumorning.firebaseapp.com/title/titlebarcommunity.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
    <div className="grid grid-cols-2 gap-4 ">
    <div className="grid flex-grow  place-items-center"> 
  <div className="hover:translate-y-1 transition-all rounded">
        <Link href="https://pondkubs-project-0j2p.glideapp.io/"> 
        <a target="_blank">
        <Image 
            width={150}
            height={150}
            src="https://commumorning.firebaseapp.com/commu/pondkub.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
           
          />
           </a>
        </Link>
        </div>
        </div> 
       
        <div className="grid flex-grow  place-items-center">
  <div className="hover:translate-y-1 transition-all rounded">
        <Link href="https://www.facebook.com/888Token">
        <a target="_blank">
        <Image 
             width={150}
             height={150}
             src="https://commumorning.firebaseapp.com/commu/888.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </a>
        </Link>
        </div>
  </div>
  <div className="grid flex-grow  place-items-center">
  <div className="hover:translate-y-1 transition-all rounded">
        <Link href="https://www.cmhexa.com/cmdungeon">
        <a target="_blank">
        <Image 
             width={150}
             height={150}
             src="https://commumorning.firebaseapp.com/commu/cmm.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </a>
        </Link>
        </div>
  </div>
  <div className="grid flex-grow  place-items-center">
  <div className="hover:translate-y-1 transition-all rounded">
        <Link href="https://www.facebook.com/groups/kldnft">
        <a target="_blank">
        <Image 
             width={150}
             height={150}
             src="https://commumorning.firebaseapp.com/commu/kld.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </a>
        </Link>
        </div>
  </div>

  </div>
    </main>
   
    <aside className="flex-1 pl-2 sm:w-32 grid flex-grow  place-items-center">
    <Image 
             width={600}
             height={150}
             src="https://commumorning.firebaseapp.com/title/topranking.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
    <div className="grid grid-cols-1 gap-1 ">
    <div className="grid flex-grow  place-items-center"> 
  <div className="hover:translate-y-1 transition-all rounded">
        <Link href="https://morningmoonvillage.com/crop_leaderboard"> 
        <a target="_blank">
        <Image 
            width={350}
            height={250}
            src="https://commumorning.firebaseapp.com/mmvimg/rankingfood.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </a>
        </Link>
        </div>
        </div> 
       
        <div className="grid flex-grow  place-items-center">
  <div className="hover:translate-y-1 transition-all rounded">
        <Link href="https://morningmoonvillage.com/leaderboard">
        <a target="_blank">
        <Image 
             width={350}
             height={150}
             src="https://commumorning.firebaseapp.com/mmvimg/rankingfish.png"
            objectFit="contain"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </a>
        </Link>
        </div>
  </div>
  </div>
    </aside>
    </div>
    
        <Image 
            width={1170}
            height={95}
            src="https://commumorning.firebaseapp.com/title/B5.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />
        
      <div className="grid grid-cols-6 gap-4 mx-auto">
        
    <div className="w-full rounded transition ease-in-out duration-300 transform  inline hover:scale-110">
    <Link href="https://www.facebook.com/MorningMoonVillageOfficial">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/ftr6j5j/mmvoff.jpg"
            objectFit="cover"
            alt="mmv_logo"
            className=" max-w-full h-auto "
          />
            </a>
          </Link>
    </div>
    <div className="w-full rounded transition ease-in-out duration-300 transform  inline hover:scale-110">
    <Link href="https://www.facebook.com/PondKub101">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/qF2vLbb/PONDKUB.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" max-w-full h-auto "
          />
            </a>
          </Link>
    </div>
    
    <div className="w-full rounded transition ease-in-out duration-300 transform  inline hover:scale-110">
    <Link href="https://www.facebook.com/groups/3234826200135819">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/bdtDWLB/mmvmarket.jpg"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />    
           </a>
          </Link>
    </div>

    <div className="w-full rounded transition ease-in-out duration-300 transform  inline hover:scale-110">
    <Link href="https://www.facebook.com/groups/morningmoonvillage">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/X7BQjG7/MMVGROUP.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" max-w-full h-auto "
          />
            </a>
          </Link>
    </div>

    <div className="w-full rounded transition ease-in-out duration-300 transform  inline hover:scale-110">
        <Link href="https://www.facebook.com/cmhexa">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/CtcPwmP/CM.png"
            objectFit="cover"
            alt="mmv_logo"
            className=" max-w-full h-auto "
          />
            </a>
          </Link>
    </div>
    <div className="w-full rounded transition ease-in-out duration-300 transform  inline hover:scale-110">
    
    <Link href="https://www.facebook.com/groups/665357544709164">
            <a target="_blank">
            <Image 
            width={100}
            height={100}
            src="https://i.ibb.co/tHwGpS3/mmvfree.jpg"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />      
          </a>
          </Link>
    </div>
    
    </div>
    
      </div>
     
     <Footer />
     
      </div>
      
     
      
      );
};
export default Home;