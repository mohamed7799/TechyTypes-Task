import {
  AiOutlineStar,
  AiFillLock,
  AiOutlineDashboard,
  AiOutlineRocket,
  AiOutlineThunderbolt,
  AiOutlineFilter,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import UserImage from "./userImage";
const ToolBar = () => {
  return (
    <div className="pb-4 flex justify-between">
      <ul className="flex gap-3 items-stretch">
        <li className="toolbar__item">
          <AiOutlineStar className="text-blue-500" />
        </li>
        <li className="toolbar__item gap-2">
          <AiFillLock className="text-blue-500" /> Private
        </li>
        <li className="toolbar__item gap-2">
          <AiOutlineDashboard className="text-blue-500" /> Board
        </li>
        <li className="toolbar__item">
          <BsChevronDown className="text-blue-500" />
        </li>
      </ul>
      <ul className="flex gap-4 items-stretch">
        <li className="toolbar__item gap-2">
          <AiOutlineRocket className="text-blue-500" />
          Power ups
        </li>
        <li className="toolbar__item gap-2">
          <AiOutlineThunderbolt className="text-blue-500" /> Automation
        </li>
        <li className="toolbar__item gap-2">
          <AiOutlineFilter className="text-blue-500" /> Filter
        </li>
        <li>
          <UserImage></UserImage>
        </li>
        <li className="toolbar__item">Share</li>
        <li className="toolbar__item bg-blue-100">
          <BsThreeDotsVertical className="text-blue-500 h-full text-2xl" />
        </li>
      </ul>
    </div>
  );
};

export default ToolBar;
