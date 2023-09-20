import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import {
  IBitkubTicker,
  ILatestRates,
  IUsdLumiCurrentPrice,
} from "../interfaces/responses";
import useSWR from "swr";
import Navbarback from "../components/Navbarback";
import { CSSTransition } from "react-transition-group";


type PlantKind = "SEED" | "STEM" | "LUMI";
type SeedKind = "TOMATO" | "CORN" | "CABBAGE" | "CARROT" | "COFFEE" | "FISHFOOD"| "BLUEBERRY" | "LUMBER" | "METALPLATE" | "fineleather"| "MARBLE" ;
type RewardMultiplier = 2 |3 | 4 | 5 | 6 | 8 | 9 | 12;

const Calculator: NextPage = () => {
  const [thbKub, setThbKub] = useState<number | null>(null);
  const [usdtkkub, setusdtkkub] = useState<number | null>(null);
  const [usdlumi, setusdlumi] = useState<number | null>(null);
  const [kusdt, setkusdt] = useState<number | null>(null);
  const [thbUsdt, setThbUsdt] = useState<number | null>(null);
  const [thbLumi, setThbLumi] = useState<number | null>(null);
  const [thbUsd, setThbUsd] = useState<number | null>(null);
  const [plantKind] = useState<PlantKind>("SEED");
  const [stemLkusdtCompose] = useState<{
    lumi: number;
    kusdt: number;
  }>();
  const [stemLkusdtPrice, setStemLkusdtPrice] = useState<number>();
  const [stemLkkubCompose] = useState<{
    lumi: number;
    kkub: number;
  }>();
  const [stemLkkubPrice, setStemLkkubPrice] = useState<number>();
  const [seedKind, setSeedKind] = useState<SeedKind>("TOMATO");
  const [rewardMultiplier, setRewardMultiplier] = useState<RewardMultiplier>(4);
  const [plantAmount, setPlantAmount] = useState<number | null>(null);
  const [totalLiquidity, setTotalLiquidity] = useState<number | null>(null);
  const [totalLiquidities, setTotalLiquidities] = useState<
    {
      name: string;
      totalLiquidity: number;
    }[]
  >([]);
  const [yieldPerDay, setYieldPerDay] = useState<number | "-">("-");
  
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
     
      axios.get(`https://api.bkc.loremboard.finance/charts/history?symbol=KUSDT&resolution=15&from=${
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
    setkusdt( responses[5].data.c[responses[5].data.c.length - 1] *responses[2].data.rates.USD);
  };

  useEffect(() => {
    initialRates();
  }, []);

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
  
  useSWR(
    "totalLiquidities",
    async () => {
      const tokens = [
        {
          name: "seedFarmTomato",
          address: "ec85f017ea248c169c5ae32a782e380e0db3b10d",
        },
        {
          name: "seedFarmCorn",
          address: "eef084a9e4efb5436ed7115f271dd1f47789b81b",
        },
        {
          name: "seedFarmCabage",
          address: "e0c8e0d1e281deb31a305369b5527f45898e2fd8",
        },
        {
          name: "seedFarmCarrot",
          address: "b92cd3ab59d8fbb1156f07f9bc0deacc9bc4954d",
        },
        {
          name: "seedFarmCoffee",
          address: "91e6512a01ddfbe0027f191832cd9cc877d84f15",
        },
        {
          name: "seedFarmFishfood",
          address: "2ca957c560151148aa4ab677f4171e265e76806e",
        },
        {
          name: "seedFarmBlueberry",
          address: "018391166b47632b95fd50b3c37e8b25cc61ea29",
        },
        
      ];

      const totalLiquiditiesResponse = await Promise.all(
        tokens.map((token) => {
          return axios.post<{
            error: { code: number; message: string };
            result: string;
          }>("https://bitkub-chain-rpc.morningmoonvillage.com", {
            jsonrpc: "2.0",
            id: Date.now(),
            method: "eth_call",
            params: [
              {
                data:
                token.name === "lumiCowMilkFarm"
                ? "0x252dba42000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000449df8d3300000000000000000000000000000000000000000000000000000000000000000000000000000000d8356f78379afca40d2a966beb95e9c27ebc2915000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000241959a00200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000095013dcb6a561e6c003aed9c43fb8b64008aa3610000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000002470a08231000000000000000000000000d8356f78379afca40d2a966beb95e9c27ebc291500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000024f40f0f52000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
                    : `0x252dba420000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000002e000000000000000000000000000000000000000000000000000000000000003800000000000000000000000000000000000000000000000000000000000000420000000000000000000000000${token.address}0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000449df8d3300000000000000000000000000000000000000000000000000000000000000000000000000000000${token.address}00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000004921979af000000000000000000000000000000000000000000000000000000000000000000000000000000006e9e62018a013b20bcb7c573690fd1425ddd6b26000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a4d06ca61f0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000095013dcb6a561e6c003aed9c43fb8b64008aa3610000000000000000000000007d984c24d2499d840eb3b7016077164e15e5faa600000000000000000000000000000000000000000000000000000000000000000000000000000000${token.address}000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000241959a002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000${token.address}00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000024f40f0f52000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ec85f017ea248c169c5ae32a782e380e0db3b10d000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000042705e86500000000000000000000000000000000000000000000000000000000`,
                to: "0xb2dd98bd8a916a9fef1ce0e35302a53ae23fd260",
              },
              "latest",
            ],
          });
        })
      );

      const totalLiquidities = totalLiquiditiesResponse.map(
        (totalLiquidityResponse, index) => {
          return {
            name: tokens[index].name,
            totalLiquidity:
              parseInt(
                (
                  totalLiquidityResponse.data.result
                    .replace("0x", "")
                    .match(/.{64}/g) as string[]
                )[12],
                16
              ) / Math.pow(10, 18),
          };
        }
      );

      setTotalLiquidities([...totalLiquidities]);
    },
    {
      refreshInterval: 10000,
      revalidateOnFocus: true,
    }
  );

  useEffect(() => {
    const wsBitkubConnection = () => {
      const BASE_API_URL_BITKUB = "wss://api.bitkub.com/websocket-api";

      const wsBitkub = new WebSocket(
        `${BASE_API_URL_BITKUB}/market.ticker.thb_kub,market.ticker.thb_usdt,market.ticker.thb_btc`
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
  }, [
    thbKub,
    thbLumi,
    thbUsdt,
  ]);

  useEffect(() => {
    switch (plantKind) {
      case "SEED":
        const rewardsSeedPercentage =
          (plantAmount || 0) /
          ((typeof totalLiquidity === "number" && totalLiquidity >= 0
            ? totalLiquidity
            : seedKind === "TOMATO"
            ? totalLiquidities[0]?.totalLiquidity
            : seedKind === "CORN"
            ? totalLiquidities[1]?.totalLiquidity
            : seedKind === "CABBAGE"
            ? totalLiquidities[2]?.totalLiquidity
            : seedKind === "CARROT"
            ? totalLiquidities[3]?.totalLiquidity
            : seedKind === "COFFEE"
            ? totalLiquidities[4]?.totalLiquidity
            : seedKind === "FISHFOOD"
            ? totalLiquidities[5]?.totalLiquidity
            : seedKind === "BLUEBERRY"
            ? totalLiquidities[6]?.totalLiquidity
            : seedKind === "LUMBER"
            ? totalLiquidities[7]?.totalLiquidity
            : seedKind === "METALPLATE"
            ? totalLiquidities[8]?.totalLiquidity
            : seedKind === "fineleather"
            ? totalLiquidities[9]?.totalLiquidity
            : seedKind === "MARBLE"
            ? totalLiquidities[10]?.totalLiquidity
            : Infinity) +
            (plantAmount || 0));

        const yieldPerDaySeed = parseFloat(
          (17280 * 0.1 * rewardMultiplier * rewardsSeedPercentage).toFixed(2)
        );

        setYieldPerDay(
          yieldPerDaySeed <= 0 ||
            yieldPerDaySeed === Infinity ||
            isNaN(yieldPerDaySeed)
            ? "-"
            : yieldPerDaySeed
        );
        break;
    }
  }, [
    plantKind,
    rewardMultiplier,
    seedKind,
    plantAmount,
    thbKub,
    thbUsd,
    thbUsdt,
    totalLiquidities,
    totalLiquidity,
  ]);

 
  return (
    
    <div className="bg-base-200 flex flex-col w-screen h-screen overflow-auto min-w-[20rem]">
      <Head>
        <title>MorningmoonVillage Calculator</title>
      </Head>   
      <Navbarback />
      <div className="sm:max-w-screen-sm gap-y-4 container flex flex-col self-center flex-1 p-4">
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
        
        <div className="card bg-base-100 flex flex-col p-4 space-y-4 overflow-hidden shadow-lg">
          <h1 className="text-lg font-medium text-center">คำนวณผลผลิตต่อวัน</h1>
         

          <div className="self-center  rounded-full">
            <Image
              src={
                plantKind === "LUMI"
                  ? "https://commumorning.firebaseapp.com/icons/lumi.png"
                  : `https://commumorning.firebaseapp.com/icons/seed_${seedKind.toLocaleLowerCase()}.png`
              }
              alt="plant_kind"
              width={70}
              height={70}
            />
          </div>

          {plantKind !== "LUMI" && (
            <div className="btn-group grid grid-cols-3 gap-2 ">
              <button
                className={`btn btn-xl hover:bg-green-400  font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center${
                  seedKind === "TOMATO" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("TOMATO");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(4);
                      break;
                   
                  }
                }}
              >
                TOMATO
              </button>

              <button
                className={`btn btn-xl hover:bg-green-400   font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center${
                  seedKind === "CORN" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("CORN");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(4);
                      break;
                   
                  }
                }}
              >
                CORN
              </button>

              <button
                className={`btn btn-xl  hover:bg-green-400   font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center${
                  seedKind === "CABBAGE" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("CABBAGE");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(4);
                      break;
                   
                  }
                }}
              >
                CABBAGE
              </button>

              <button
                className={`btn btn-xl hover:bg-green-400  font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center${
                  seedKind === "CARROT" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("CARROT");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(12);
                      break;
                    
                  }
                }}
              >
                CARROT
              </button>
              <button
                className={`btn btn-xl  hover:bg-green-400  font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center${
                  seedKind === "COFFEE" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("COFFEE");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(3);
                      break;
                    
                  }
                }}
              >
                COFFEE
              </button>
              <button
                className={`btn btn-xl hover:bg-green-400  font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  seedKind === "FISHFOOD" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("FISHFOOD");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(12);
                      break;
                   
                  }
                }}
              >
                FISHFOOD
              </button>
              <button
                className={`btn btn-xl hover:bg-green-400  font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  seedKind === "BLUEBERRY" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("BLUEBERRY");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(4);
                      break;
                   
                  }
                }}
              >
                BLUEBERRY
              </button>
              <button
                className={`btn btn-xl hover:bg-green-400  font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  seedKind === "LUMBER" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("LUMBER");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(2);
                      break;
                   
                  }
                }}
              >
                LUMBER
              </button>
              <button
                className={`btn btn-xl hover:bg-green-400  font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  seedKind === "METALPLATE" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("METALPLATE");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(2);
                      break;
                   
                  }
                }}
              >
                METALPLATE
              </button>
              <button
                className={`btn btn-xl hover:bg-green-400  font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  seedKind === "fineleather" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("fineleather");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(2);
                      break;
                   
                  }
                }}
              >
                FINELEATHER
              </button>
              <button
                className={`btn btn-xl hover:bg-green-400  font-bold py-2 px-4 rounded-full font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                  seedKind === "MARBLE" ? " btn-active" : ""
                }`}
                onClick={() => {
                  setSeedKind("MARBLE");
                  switch (plantKind) {
                    case "SEED":
                      setRewardMultiplier(2);
                      break;
                   
                  }
                }}
              >
                MARBLE
              </button>
            </div>
            
          )}

          <div className="btn-group self-center">
          <button
              className={`btn btn-xs${
                rewardMultiplier === 2 ? " !btn-primary" : ""
              }`}
              disabled
            >
              2X
            </button>
            <button
              className={`btn btn-xs${
                rewardMultiplier === 3 ? " !btn-primary" : ""
              }`}
              disabled
            >
              3X
            </button>
            <button
              className={`btn btn-xs${
                rewardMultiplier === 4 ? " !btn-primary" : ""
              }`}
              disabled
            >
              4X
            </button>

            <button
              className={`btn btn-xs${
                rewardMultiplier === 5 ? " !btn-primary" : ""
              }`}
              disabled
            >
              5X
            </button>
            <button
              className={`btn btn-xs${
                rewardMultiplier === 6 ? " !btn-primary" : ""
              }`}
              disabled
            >
              6X
            </button>
            <button
              className={`btn btn-xs${
                rewardMultiplier === 8 ? " !btn-primary" : ""
              }`}
              disabled
            >
              8X
            </button>
            <button
              className={`btn btn-xs${
                rewardMultiplier === 9 ? " !btn-primary" : ""
              }`}
              disabled
            >
              9X
            </button>
            
            <button
              className={`btn btn-xs${
                rewardMultiplier === 12 ? " !btn-primary" : ""
              }`}
              disabled
            >
              12X
            </button>
           
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">
                จำนวน {plantKind} ที่จะ
                {plantKind === "LUMI" ? " stake" : "ปลูก"}
              </span>
            </label>
            <label className="input-group input-group-sm">
              <input
                className="input input-bordered input-sm w-full"
                type="number"
                placeholder="0.00"
                value={typeof plantAmount === "number" ? plantAmount : ""}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  setPlantAmount(isNaN(value) || value < 0 ? null : value);
                }}
              />
              <span>{plantKind}</span>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Total Liquidity</span>
              <div
                data-tip="คลิกที่แปลงผักที่จะปลูกในเกม"
                className="label-text-alt tooltip tooltip-left"
              >
                อยู่ตรงไหน?
              </div>
            </label>
            <label className="input-group input-group-sm">
              <input
                className="input input-bordered input-sm w-full"
                type="number"
                placeholder={
                  plantKind === "SEED"
                    ? seedKind === "TOMATO"
                      ? (totalLiquidities[0] &&
                          parseFloat(
                            totalLiquidities[0].totalLiquidity.toFixed(2)
                          ).toLocaleString("th-TH")) ||
                        "-"
                      : seedKind === "CORN"
                      ? (totalLiquidities[1] &&
                          parseFloat(
                            totalLiquidities[1].totalLiquidity.toFixed(2)
                          ).toLocaleString("th-TH")) ||
                        "-"
                      : seedKind === "CABBAGE"
                      ? (totalLiquidities[2] &&
                          parseFloat(
                            totalLiquidities[2].totalLiquidity.toFixed(2)
                          ).toLocaleString("th-TH")) ||
                        "-"
                      : seedKind === "CARROT"
                      ? (totalLiquidities[3] &&
                          parseFloat(
                            totalLiquidities[3].totalLiquidity.toFixed(2)
                          ).toLocaleString("th-TH")) ||
                          
                        "-"
                      : seedKind === "COFFEE"
                      ? (totalLiquidities[4] &&
                          parseFloat(
                            totalLiquidities[4].totalLiquidity.toFixed(2)
                          ).toLocaleString("th-TH")) ||
                          "-"
                          : seedKind === "FISHFOOD"
                          ? (totalLiquidities[5] &&
                              parseFloat(
                                totalLiquidities[5].totalLiquidity.toFixed(2)
                              ).toLocaleString("th-TH")) ||
                              "-"
                              : seedKind === "BLUEBERRY"
                              ? (totalLiquidities[6] &&
                                  parseFloat(
                                    totalLiquidities[6].totalLiquidity.toFixed(2)
                                  ).toLocaleString("th-TH")) ||
                                  "-"
                                  : seedKind === "LUMBER"
                                  ? (totalLiquidities[7] &&
                                      parseFloat(
                                        totalLiquidities[7].totalLiquidity.toFixed(2)
                                      ).toLocaleString("th-TH")) ||
                                      "-"
                                      : seedKind === "METALPLATE"
                                      ? (totalLiquidities[8] &&
                                          parseFloat(
                                            totalLiquidities[8].totalLiquidity.toFixed(2)
                                          ).toLocaleString("th-TH")) ||
                                          "-"
                                      : seedKind === "fineleather"
                                      ? (totalLiquidities[9] &&
                                          parseFloat(
                                            totalLiquidities[9].totalLiquidity.toFixed(2)
                                          ).toLocaleString("th-TH")) ||
                                          "-"
                                          : seedKind === "MARBLE"
                                          ? (totalLiquidities[10] &&
                                              parseFloat(
                                                totalLiquidities[10].totalLiquidity.toFixed(2)
                                              ).toLocaleString("th-TH")) ||

                                  
                              
                        "-"
                      : "-"
                    : plantKind === "LUMI"
                    ? (totalLiquidities[7] &&
                        parseFloat(
                          totalLiquidities[7].totalLiquidity.toFixed(2)
                        ).toLocaleString("th-TH")) ||
                    "-"
                    : "-"
                }
                value={typeof totalLiquidity === "number" ? totalLiquidity : ""}
                onChange={(e) => {
                  const value = parseFloat(e.target.value);
                  setTotalLiquidity(isNaN(value) || value < 0 ? null : value);
                }}
              />
              <span>
                {plantKind === "SEED"
                  ? "SEEDS"
                  : ""}
              </span>
            </label>
          </div>

          <div className="grid grid-cols-2">
            <div className="stat p-2 border-none">
              <div className="stat-title flex items-center gap-2 text-xs opacity-100">
                <div className="flex items-center justify-center opacity-50">
                  Produce Rate
                </div>
                <div className="self-center w-8 h-8 rounded-full">
                  <Image
                    src={
                      plantKind === "LUMI"
                        ? "https://commumorning.firebaseapp.com/icons/cowmilk.png"
                        : `https://commumorning.firebaseapp.com/icons/crop_${seedKind.toLowerCase()}.png`
                    }
                    alt={"plant_kind"}
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="stat-value text-lg">
                {`${
                  plantKind === "STEM" && typeof yieldPerDay === "number"
                    ? "≈ "
                    : ""
                }${yieldPerDay.toLocaleString("th-TH")}`}
              </div>
              <div className="stat-title text-xs">
                {plantKind === "LUMI" ? "Milk" : "Crops"}/Day
              </div>
            </div>

            {plantKind === "SEED" && (
              <div className="stat p-2 border-none">
                <div className="stat-title flex items-center gap-2 text-xs opacity-100">
                  <div className="flex items-center justify-center opacity-50">
                    48 hours earn
                  </div>
                  <div className=" self-center w-8 h-8 rounded-full">
                    <Image
                      src={`https://commumorning.firebaseapp.com/icons/crop_${seedKind.toLowerCase()}.png`}
                      alt="plant_kind"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="stat-value text-lg">
                  {typeof yieldPerDay === "number"
                    ? `≈ ${(yieldPerDay * 2).toLocaleString("th-TH")}`
                    : "-"}
                </div>
                <div className="stat-title text-xs">Crops</div>
              </div>
            )}

            <div className="stat p-2 border-none">
              <div className="stat-title flex items-center gap-1 text-xs opacity-100">
                <div className="stat-title flex items-center gap-2 text-xs opacity-100">
                  <div className="flex items-center justify-center opacity-50">
                    Sell to KYLE
                  </div>
                  <div className="self-center w-8 h-8 rounded-full">
                    <Image
                      src="https://commumorning.firebaseapp.com/icons/lumi.png"
                      alt="lumi"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              </div>
              <div className="stat-value text-lg">
                {typeof yieldPerDay === "number"
                  ? `≈ ${(
                      yieldPerDay *
                      (plantKind === "STEM" ? 1 : 2) *
                      0.095
                    ).toLocaleString("th-TH")}`
                  : "-"}
              </div>
              <div className="stat-title text-xs">
                {`LUMI${plantKind === "STEM" ? "/Day" : ""}`}
              </div>
            </div>

            <div className="stat p-2 border-none">
              <div className="stat-title text-xs">Estimated</div>
              <div className="stat-value text-lg">
                {typeof yieldPerDay === "number"
                  ? `≈ ${parseFloat(
                      (
                        yieldPerDay *
                        (plantKind === "STEM" ? 1 : 2) *
                        0.095 *
                        (thbLumi || 0)
                      ).toFixed(2)
                    ).toLocaleString("th-TH")}`
                  : "-"}
              </div>
              <div className="stat-title text-xs">
                THB{plantKind === "STEM" ? "/Day" : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        
  );
};
export default Calculator;