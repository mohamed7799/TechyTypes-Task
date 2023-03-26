import headerIcon from "/src/assets/header-icon.svg";
import pfp from "/src/assets/pfp.png";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
const Header = () => {
  return (
    <div className="p-6 shadow-sm flex items-center">
      <ul className="flex gap-8 font-semibold">
        <li className="flex gap-2 items-center">
          Workspace <BsChevronDown />
        </li>
        <li className="flex gap-2 items-center">
          Recent <BsChevronDown />
        </li>
        <li className="flex gap-2 items-center">
          Starred <BsChevronDown />
        </li>
        <li className="flex gap-2 items-center">
          Templates <BsChevronDown />
        </li>
      </ul>
      <img className="m-auto" src={headerIcon} alt="logo" />
      <div className="flex gap-4 items-center">
        <input
          className="bg-blue-100 py-2 px-4 font-bold text-blue-500 outline-none rounded-lg"
          type="text"
          placeholder="search"
        />
        <AiOutlineBell className="text-2xl text-blue-500"></AiOutlineBell>
        <img src={pfp} alt="pfp" />
      </div>
    </div>
  );
};

export default Header;
