"use client";

import { useRef } from "react";

const CTA = () => {
  const howToBuyRef = useRef<HTMLDivElement>(null);
  return (
    <section
      ref={howToBuyRef}
      id="how-to-buy"
      className="self-stretch bg-color-brand-black overflow-hidden flex flex-row items-end justify-between pt-[102px] pb-[108px] pr-[34.6px] pl-[35px] box-border max-w-full gap-[20px] text-left text-29xl text-tertiary2 font-poppins mq1325:flex-wrap"
    >
      <div className="w-[772px] flex flex-col items-start justify-start gap-[20px] min-w-[772px] max-w-full mq1125:min-w-full mq1325:flex-1">
        <h1 className="m-0 relative text-inherit leading-[58px] font-bold font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[35px] mq800:text-19xl mq800:leading-[46px]">
          Discover How to Buy
        </h1>
        <b className="self-stretch relative text-base leading-[166%]">
          <span>{`EvolveRWA chose the `}</span>
          <span className="text-turquoise">Solana network</span>
          <span> due to its high performance, scalability, and low transaction fees. </span>
        </b>
      </div>
      <div className="w-[457.4px] flex flex-col items-end justify-start gap-[30px] min-w-[457.4px] max-w-full text-base-7 text-mediumturquoise mq800:min-w-full mq1325:flex-1">
        <div className="mq450:hidden flex flex-row items-start justify-start gap-[8.8px]">
          <img
            className="h-[42px] w-[42.6px] relative object-cover shrink-0 [debug_commit:1de1738]"
            loading="lazy"
            alt=""
            src="/untitled-design-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[13.4px] px-0 pb-0">
            <b className="relative leading-[19px] shrink-0 [debug_commit:1de1738] whitespace-nowrap">
              Solana Ecosystem
            </b>
          </div>
        </div>
        <button className="mq450:mt-10 cursor-not-allowed py-3 px-5 bg-[transparent] self-stretch h-[53px] rounded-md [background:linear-gradient(88.64deg,_#cd5ceb_4.06%,_#3dd9d5)] box-border flex flex-row items-center space-x-2 justify-center whitespace-nowrap border-[1px] border-solid border-color-brand-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100">
          <b className="relative text-lg leading-[150%] font-poppins text-color-brand-black text-left">
            Buy on Jupiter
          </b>
          <b className="text-rose-950 font-bold">(coming soon)</b>
        </button>
      </div>
    </section>
  );
};

export default CTA;
