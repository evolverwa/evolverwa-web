import Link from "next/link";

import Column from "./column";

const Layout = () => {
  return (
    <section className="self-stretch [background:linear-gradient(180deg,_#ff8c00,_#ffd700)] overflow-hidden flex flex-col items-center justify-center py-28 px-16 box-border gap-[80px] max-w-full text-center text-base text-primary font-poppins mq450:gap-[20px] mq800:gap-[40px] mq800:py-[47px] mq800:px-8 mq800:box-border mq1125:pt-[73px] mq1125:pb-[73px] mq1125:box-border mq750:gap-[40px] mq750:py-[47px] mq750:px-8 mq750:box-border mq1050:pt-[73px] mq1050:pb-[73px] mq1050:box-border">
      <div className="w-[1128px] flex flex-col items-center justify-start gap-[16px] max-w-full">
        <div className="relative leading-[150%] font-semibold inline-block min-w-[114px]">
          Revolutionary
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-29xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq800:text-19xl mq800:leading-[46px] mq1050:text-19xl mq1050:leading-[46px]">
            Transforming the Future of Finance with EvolveRWA
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            EvolveRWA is a cutting-edge cryptocurrency project that leverages innovative technology
            to provide users with a secure, efficient, and transparent financial ecosystem. By
            combining blockchain technology with real-world assets, EvolveRWA revolutionizes the way
            we transact, invest, and store value.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[48px] max-w-full text-13xl mq800:gap-[24px] mq750:gap-[24px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full mq800:gap-[24px] mq750:gap-[24px]">
          <Column
            icon="icon--relume-2.svg"
            heading="The Power of Blockchain and Real-World Assets"
            text="EvolveRWA utilizes blockchain technology to ensure secure and immutable transactions, while also integrating real-world assets to provide stability and value."
          />
          <Column
            icon="integrate.svg"
            heading="Seamless Integration for Everyday Use"
            text="With EvolveRWA, you can easily transact, invest, and manage your assets, all in one user-friendly platform."
          />
          <Column
            icon="finance.svg"
            heading="Empowering Financial Freedom and Inclusion"
            text="EvolveRWA aims to democratize finance by providing equal access to financial services and opportunities for everyone."
          />
        </div>
        <div className="flex flex-row items-center justify-start pt-4 px-0 pb-0 gap-[24px] text-left text-base">
          <button className="cursor-pointer py-2.5 px-[23px] bg-[transparent] flex flex-row items-center justify-center border-[1px] border-solid border-primary hover:bg-firebrick-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-firebrick-100">
            <div className="relative text-base leading-[150%] font-poppins text-primary text-left inline-block min-w-[89px] whitespace-nowrap">
              <Link
                href="https://evolverwa.gitbook.io/whitepaper"
                className="cursor-pointer hover:text-primary transition-colors duration-200 no-underline  text-primary"
              >
                Learn More
              </Link>
            </div>
          </button>
          <div className="h-6 hidden flex-row items-center justify-center gap-[8px]">
            <div className="self-stretch relative leading-[150%] whitespace-nowrap">Sign Up</div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/icon--chevronright.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
