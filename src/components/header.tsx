import headerIcon from "/src/assets/header-icon.svg";

import { BsChevronDown } from "react-icons/bs";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import UserImage from "./userImage";
const Header = () => {
  return (
    <div className="p-4 shadow-sm ">
      <div className="mx-auto container flex items-center">
        <ul className="flex gap-8 font-semibold">
          <li className="flex gap-2 items-center cursor-pointer">
            Workspace <BsChevronDown />
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            Recent <BsChevronDown />
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            Starred <BsChevronDown />
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            Templates <BsChevronDown />
          </li>
        </ul>
        <img className="m-auto" src={headerIcon} alt="logo" />
        <div className="flex gap-4 items-center">
          <div className="flex gap-4 items-center bg-blue-100 py-2 px-4 font-medium text-blue-500  rounded-lg">
            <AiOutlineSearch className="text-xl" />
            <input
              className="bg-blue-100 outline-none"
              type="text"
              placeholder="search"
            />
          </div>

          <AiOutlineBell className="text-2xl text-blue-500"></AiOutlineBell>
          <UserImage />
        </div>
      </div>
    </div>
  );
};

export default Header;
