import { FaUser } from "react-icons/fa";
import { TbTableFilled } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import UserImage from "./userImage";
const UserInfo = () => {
  return (
    <div className="rounded-md shadow-md border w-full h-fit p-4 flex-1 bg-white">
      <div className="flex gap-3 font-bold items-center">
        <UserImage />
        <div>
          <h3>Lucinde</h3>
          <h3 className="text-blue-600">Free</h3>
        </div>
      </div>
      <hr className="my-4" />
      <ul>
        <li className="flex items-center gap-2">
          <TbTableFilled className="text-blue-500" />
          Workspaces
        </li>
        <li className="flex items-center gap-2">
          <FaUser className="text-blue-500" />
          Members
          <AiOutlinePlus className="ml-auto text-blue-500" />
        </li>
        <li className="flex items-center gap-2">
          <IoIosSettings className="text-blue-500" />
          Workspaces settings
          <AiOutlinePlus className="ml-auto text-blue-500" />
        </li>
      </ul>
      <hr className="my-4" />
      <div>
        <h3 className="font-bold">Workspace views</h3>
        <ul>
          <li className="flex items-center gap-2">
            <TbTableFilled className="text-blue-500" />
            Table
          </li>
          <li className="flex items-center gap-2">
            <TbTableFilled className="text-blue-500" />
            Calnder
          </li>
        </ul>
      </div>
      <hr className="my-4" />
      <div>
        <h3 className="font-bold flex items-center">
          your boards <AiOutlinePlus className="ml-auto text-blue-500" />
        </h3>
        <ul>
          <li className="flex items-center gap-2">
            <TbTableFilled className="text-blue-500" />
            board
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
