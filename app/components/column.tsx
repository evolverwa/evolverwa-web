export type ColumnType = {
  heading?: string;
  text?: string;
  icon?: string;
};

const Column: React.FC<ColumnType> = ({ heading, text, icon }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start gap-[24px] min-w-[304px] max-w-full text-center text-13xl text-primary font-poppins">
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={icon}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px] mq1050:text-7xl mq1050:leading-[33px]">
          {heading}
        </h1>
        <div className="self-stretch relative text-base leading-[150%]">{text}</div>
      </div>
    </div>
  );
};

export default Column;
