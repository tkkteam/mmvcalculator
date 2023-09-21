import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Image from "next/image";
import {IBitkubTicker,ILatestRates,IUsdLumiCurrentPrice,} from "../interfaces/responses";
import useSWR from "swr";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";

function Home() {
  const [thbKub, setThbKub] = useState<number | null>(null);
  const [usdtkkub, setusdtkkub] = useState<number | null>(null);
  const [usdlumi, setusdlumi] = useState<number | null>(null);
  const [kusdt, setkusdt] = useState<number | null>(null);
  const [thbUsdt, setThbUsdt] = useState<number | null>(null);
  const [thbLumi, setThbLumi] = useState<number | null>(null);
  const [thbUsd, setThbUsd] = useState<number | null>(null);

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
    
    <div className=" flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
        <title>Morning Moon Village Calculator</title>
      </Head>   
      <Navbar />
  <div className="xl:max-w-screen-xl gap-y-4 container flex flex-col self-center flex-1 p-4">
  
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
            src="https://commumorning.firebaseapp.com/title/B1.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />
  <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 place-items-center"> 
  <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
        <Link href="/price"> 
        
        <Image 
            width={340}
            height={120}
            src="/images/BT1.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          
        </Link>
        </div></div> 
  <div className="divider lg:divider-horizontal">l</div> 
  <div className="grid flex-grow h-32  place-items-center">
  <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
        <Link href="/calculator">
        <Image 
             width={340}
             height={120}
             src="/images/BT2.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
        </Link>
        </div>
  </div>
</div>
<div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 place-items-center"> 
  <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
  <Link href="/Shop/sale">
            <Image 
            width={340}
            height={120}
            src="/images/BT3.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
        </Link>  
        </div></div> 
  <div className="divider lg:divider-horizontal">l</div> 
  <div className="grid flex-grow h-32  place-items-center">
  <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
  <Link href="https://www.cmhexa.com/lookdo">
            <a target="_blank">
            <Image 
             width={340}
             height={120}
             src="/images/BT4.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
            </a>
        </Link>  
        </div>
  </div>
</div>
<div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 place-items-center"> 
  <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
  <Link href="https://www.mmv-toolkit.com/">
            <a target="_blank">
            <Image 
             width={340}
             height={120}
             src="/images/BT6.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
            </a>
        </Link>  
        </div></div> 
</div>
        <Image 
            width={1170}
            height={95}
            src="https://commumorning.firebaseapp.com/title/B3.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />
        <div className="grid grid-cols-4 gap-6 mx-auto">
        <div className="transition transform hover:-translate-y-1">
        <Link href="/learning/guide"> 
        <Image 
             width={250}
             height={250}
            src="https://commumorning.firebaseapp.com/mmvimg/guide.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto"
            
          />
        </Link>
        </div>
        <div className="transition transform hover:-translate-y-1">
        <Link href="/GiftBox/box">
        <Image 
             width={250}
             height={250}
            src="https://commumorning.firebaseapp.com/mmvimg/06.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto"
            
          />
        </Link>
        </div>
        <div className=" transition transform hover:-translate-y-1">
        <Link href="/Bait/guide">
            
            <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/mmvimg/01.png"
            objectFit="cover"
            alt="avatar"
            className="max-w-full h-auto"
            
          />
            
        </Link>  
        </div> 
        <div className="transition transform hover:-translate-y-1">
        <Link href="/GiftBox/mapfishriver">
           
            <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/mmvimg/N2.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
           
        </Link>  
        </div> 
        <div className="transition transform hover:-translate-y-1">
        <Link href="/weapon/guideweapon">
           
            <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/mmvimg/02.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto"
            
          />
           
        </Link>  
        </div> 
        <div className="transition transform hover:-translate-y-1">
        <Link href="https://bit.ly/3Lg9mpP">
        <a target="_blank">
            <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/mmvimg/03.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto"
            
          />
         </a>
        </Link>  
        </div>
        <div className="transition transform hover:-translate-y-1">
        <Link href="/tutorials/Monster">
            <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/mmvimg/04.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />
        </Link>  
        </div>
        <div className="transition transform hover:-translate-y-1">
        <Link href="/tutorials/egg">
            <Image 
            width={250}
            height={250}
            src="https://commumorning.firebaseapp.com/mmvimg/05.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />
        </Link>  
        </div>

        </div>
        <Image 
            width={1170}
            height={95}
            src="https://commumorning.firebaseapp.com/title/B4.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />
          <div className="grid grid-cols-3 gap-4 mx-auto">
        <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
        <Link href="https://morningmoonvillage.com/leaderboard"> 
        <a target="_blank">
        <Image 
            width={350}
            height={250}
            src="/images/ranking.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </a>
        </Link>
        </div>
        <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
        <Link href="https://morningmoonvillage.com/crop_leaderboard">
        <a target="_blank">
        <Image 
            width={350}
            height={250}
            src="/images/ranking1.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
          </a>
        </Link>
        </div>
        <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
        <Link href="https://pondkubs-project-0j2p.glideapp.io/">
            <a target="_blank">
            <Image 
            width={350}
            height={250}
            src="/images/pondkub.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
            </a>
        </Link>  
        </div> 
        </div>
        <div className="grid grid-cols-3 gap-4 mx-auto">
        <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
        <Link href="https://www.cmhexa.com/cmdungeon">
            <a target="_blank">
            <Image 
            width={350}
            height={250}
            src="/images/cm.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
            </a>
        </Link>  
        </div> 
        <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
        <Link href="https://www.facebook.com/888Token">
            <a target="_blank">
            <Image 
           width={350}
           height={250}
           src="/images/888.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
            </a>
        </Link>  
        </div> 
        <div className="transition ease-in-out duration-300 transform  inline hover:scale-110">
        <Link href="https://www.facebook.com/groups/725376175224847">
            <a target="_blank">
            <Image 
            width={350}
            height={250}
            src="/images/kld.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
            
          />
            </a>
        </Link>  
        </div> 
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
    <Image 
            width={1170}
            height={95}
            src="https://commumorning.firebaseapp.com/title/B6.png"
            objectFit="cover"
            alt="avatar"
            className=" max-w-full h-auto "
          />
          <div className="grid grid-cols-2 gap-4 mx-auto">
        <div className="transition transform hover:-translate-y-1">
        <Link href="https://www.p2pcontract.finance/">
                <a target="_blank">
                <Image 
                width={200}
                height={100}
                src="https://i.ibb.co/wpYHbX1/p2p.png"
                objectFit="cover"
                alt="mmv_logo"
                className=" max-w-full h-auto "
              />
                </a>
              </Link>
        </div>
        <div className="transition transform hover:-translate-y-1">
        <Link href="https://app.p2pcontract.finance/">
                <a target="_blank">
                <Image 
                width={200}
                height={100}
                src="https://i.ibb.co/S6jXMhq/p2pv2.png"
                objectFit="cover"
                alt="mmv_logo"
                className=" max-w-full h-auto "
              />
              </a>
              </Link>
        </div>
        <div className="transition transform hover:-translate-y-1">
        <Link href="https://app.diamon.finance">
                <a target="_blank">
                <Image 
                width={200}
                height={100}
                src="https://i.ibb.co/Ydfbf4W/diamon.png"
                objectFit="cover"
                alt="mmv_logo"
                className=" max-w-full h-auto "
              />
              </a>
              </Link>
        </div>
        <div className="transition transform hover:-translate-y-1">
        <Link href="https://www.megaland.io/">
                <a target="_blank">
                <Image 
                width={200}
                height={100}
                src="https://i.ibb.co/rk5kQYv/megaland.png"
                objectFit="cover"
                alt="mmv_logo"
                className=" max-w-full h-auto "
              />
              </a>
              </Link>
        </div>
        </div>
      </div>
      
      <footer className="footer footer-center p-3 bg-primary text-primary-content">
  <div>
  <Image 
            width={80}
            height={80}
            src="/images/TUMLOGO.png"
            objectFit="cover"
            alt="logo"
            className="fill-current"
          />
    <p className="font-bold">
      T-Dragon design TH. <br/>Providing reliable tech since 2020
    </p> 
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <Link href="https://www.youtube.com/watch?v=QFn2MdESHJo&t=3s&ab_channel=TATUMOFFICIAL">
            <a target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
          </path>
          </svg>
          </a>
          </Link>
      <Link href="https://www.facebook.com/tatummaster">
            <a target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                </path>
                </svg>
                </a>
    </Link>
    </div>
  </div>
</footer>
      </div>
      
     
      
      );
};
export default Home;