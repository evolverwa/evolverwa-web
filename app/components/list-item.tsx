export type ListItemType = {
  subheadingOne?: string;
  text?: string;
};

const ListItem: React.FC<ListItemType> = ({ subheadingOne, text }) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[192px] text-left text-xl text-tertiary2 font-poppins">
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={subheadingOne === "Transparency " ? "/transparent.svg" : "/adaptive.svg"}
      />
      <b className="self-stretch relative leading-[140%] mq450:text-base mq450:leading-[22px]">
        {subheadingOne}
      </b>
      <div className="self-stretch relative text-base leading-[150%]">{text}</div>
    </div>
  );
};

export default ListItem;
