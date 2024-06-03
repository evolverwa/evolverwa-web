"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import ListItem from "./list-item";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const Layout1 = () => {
  return (
    <section className="self-stretch [background:linear-gradient(180deg,_#ff4500,_#ff8c00)] overflow-hidden flex flex-col items-center justify-start py-28 px-16 box-border h-auto max-w-full text-left text-21xl text-tertiary2 font-poppins mq450:gap-[20px] mq800:gap-[40px] mq800:py-[73px] mq800:px-8 mq800:box-border mq750:gap-[40px] mq750:py-[73px] mq750:px-8 mq750:box-border">
      <div className="self-stretch flex flex-row flex-wrap-reverse items-center justify-start gap-[80px] max-w-full mq450:gap-[20px] mq800:gap-[40px] mq750:gap-[40px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[320px] max-w-full mq800:gap-[16px] mq800:min-w-full mq750:gap-[16px] mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-5xl mq450:leading-[29px] mq800:text-13xl mq800:leading-[38px] mq1050:text-13xl mq1050:leading-[38px]">
              From Meme to Reality - Transforming Crypto Together
            </h1>
            <div className="self-stretch relative text-lg leading-[150%]">
              EvolveRWA is a unique crypto project that will evolve from a meme token to DeFi and
              RWA tokens. With our innovative technology and community-centric approach, we are
              shaping the future of digital assets.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-2 px-0 gap-[24px] text-xl mq800:flex-wrap mq750:flex-wrap">
            <ListItem
              subheadingOne="Adaptive "
              text="EvolveRWA seamlessly transitions from meme to DeFi and RWA tokens, offering diverse investment opportunities."
            />
            <ListItem
              subheadingOne="Transparency "
              text="EvolveRWA prioritizes transparency and community engagement, ensuring active user participation."
            />
          </div>
        </div>
        <div className="flex-1 mq800:w-full mq800:min-w-[320px] mq750:w-full mq750:min-w-[320px] mq450:w-full mq450:min-w-[320px]">
          <ReactPlayer width="100%" url="https://youtu.be/NbmQtk60dQ8" />
        </div>
      </div>
    </section>
  );
};

export default Layout1;
