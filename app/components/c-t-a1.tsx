import Link from "next/link";

const CTA1 = () => {
  return (
    <section className="mq1125:hidden  self-stretch bg-tertiary2 overflow-hidden flex flex-row items-center justify-start pt-[57px] pb-14 pr-[5px] pl-[35px] box-border gap-[95px] max-w-full text-left text-29xl text-secondary font-poppins mq450:gap-[24px] mq800:gap-[47px] mq800:pt-[37px] mq800:pb-9 mq800:box-border   mq750:gap-[47px] mq750:pl-8 mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-center gap-[24px] min-w-[601px] max-w-full mq800:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit mq450:text-10xl mq450:leading-[35px] mq800:text-19xl mq800:leading-[46px]">
            Discover the Future of Cryptocurrency
          </h1>
          <div className="self-stretch relative text-lg leading-[150%]">
            EvolveRWA - Revolutionizing the Way We Transact and Store Value
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-4 pb-0 pr-5 pl-0">
          <button className="cursor-pointer py-2.5 px-[23px] bg-secondary flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-secondary hover:bg-orangered hover:box-border hover:border-[1px] hover:border-solid hover:border-orangered">
            <div className="relative text-base leading-[150%] font-poppins text-tertiary2 text-left inline-block min-w-[89px]">
              <Link
                href="https://evolverwa.gitbook.io/whitepaper"
                className="cursor-pointer hover:text-primary transition-colors duration-200 no-underline  text-white "
              >
                Learn More
              </Link>
            </div>
          </button>
        </div>
      </div>
      <div className="h-[366px] w-[380px] flex flex-col items-end justify-center min-w-[380px]">
        <img
          className="self-stretch flex-1 relative   overflow-hidden max-h-full object-cover mq1325:self-stretch mq1325:w-auto"
          loading="lazy"
          alt=""
          src="/firefly-baby-dragon-face-29574removebgpreview-1@2x.png"
        />
      </div>
    </section>
  );
};

export default CTA1;
