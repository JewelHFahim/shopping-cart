import { MdEmojiNature } from "react-icons/md";
import { GiHerbsBundle } from "react-icons/gi";
import { RiSeedlingLine } from "react-icons/ri";
import { GiHotSpices } from "react-icons/gi";
import { TbDropletHeart } from "react-icons/tb";
import { GiSpikeball } from "react-icons/gi";

const CategoryOrganic = () => {

  const cateories = [
    {
      name: "Honey & Dates",
      url: "",
      icon: <MdEmojiNature />,
    },
    {
      name: "Finest Herbs",
      url: "",
      icon: <GiHerbsBundle />,
    },
    {
      name: "Nut & Seeds",
      url: "",
      icon: <RiSeedlingLine />,
    },
    {
      name: "Pickles & Spices",
      url: "",
      icon: <GiHotSpices />,
    },
    {
      name: "Organic Oil & Ghee",
      url: "",
      icon: <TbDropletHeart />,
    },
    {
      name: "All Natural",
      url: "",
      icon: <GiSpikeball />,
    },
  ];

  return (

    <ul className=" w-full mx-auto grid grid-cols-3 lg:grid-cols-6 justify-center items-center gap-y-[2px] gap-x-[3px] lg:gap-x-5">

      {cateories.map((item, i) => (
        <li key={i} 
        className="lg:font-medium text-xs lg:text-sm transform duration-150 hover:text-green-500 border-b border-b-transparent hover:border-green-500 hover:border-b">
          <a href="" className="flex flex-col items-center border-[1px] lg:border-0 border-slate-200 p-[2px]">
            <span className="text-sm lg:text-xl text-green-500 text-center">{item.icon}</span>
            {item.name}
          </a>
        </li>
      ))}


    </ul>

  );
};

export default CategoryOrganic;
