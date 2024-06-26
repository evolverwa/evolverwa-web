import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="self-stretch h-[] bg-tertiary2 overflow-hidden flex flex-col items-start justify-start  py-5 px-16  box-border gap-[80px] max-w-full mq450:gap-[20px] mq800:gap-[40px] mq800:pl-8 mq800:pr-8 mq800:box-border">
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap ">
        <div className="w-[640px] overflow-hidden shrink-0 flex flex-col md:flex-row  items-center justify-start max-w-full">
          <Image width={200} height={200} alt="evolverwa-logo" src="/tokenlogo.png" />
          <Image width={300} height={50} alt="evolverwa-logo" src="/sitelogo.png" />
        </div>
        <div className="flex mq750:m-auto flex-row items-start justify-start gap-[12px]">
          <Link href="https://www.google.com">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 cursor-pointer">
              <img
                className="w-12 h-12 relative overflow-hidden shrink-0"
                src="/icon-discord.svg"
                loading="lazy"
                alt="discord icon"
              />
            </div>
          </Link>
          <Link href="https://twitter.com/evolveRWA">
            <img
              className="h-12 w-12 relative overflow-hidden shrink-0 min-h-[24px] cursor-pointer"
              loading="lazy"
              alt="x icon"
              src="/icon--x.svg"
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UC-xXEroh8pRaxHfe3-OZeow">
            <img
              className="h-12 w-12 relative overflow-hidden shrink-0 min-h-[24px] cursor-pointer"
              loading="lazy"
              alt="youtube icon"
              src="/icon--youtube.svg"
            />
          </Link>
        </div>
      </div>
      <footer className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-sm text-secondary font-text-small-link mq800:gap-[16px]">
        <div className="w-[] h-px relative bg-secondary box-border border-[1px] border-solid border-secondary" />
        <div className="self-stretch flex flex-row items-start justify-center py-0  box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq800:flex-wrap">
            <div className="relative leading-[150%]">© 2024 EvolveRWA. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
