import { AiOutlinePlus } from "react-icons/ai";
import Card from "./card";

interface Listprops {
  name: string;
}

const List = ({ name }: Listprops) => {
  return (
    <div className="p-3 rounded-md shadow-md border">
      <h2 className="font-bold">{name}</h2>
      <hr className="my-3" />

      <div className="flex flex-col gap-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      <div className="m-2 flex gap-2 items-center text-lg cursor-pointer">
        <AiOutlinePlus className="text-blue-500"></AiOutlinePlus>
        <span className="text-gray-500">Add new Card</span>
      </div>
    </div>
  );
};

export default List;
