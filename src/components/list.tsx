import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Card from "./card";
import { useContext } from "react";
import FormTypeContext from "../contexts/formTypeContext";
import ListContext from "../contexts/listContext";
import Task from "../interfaces/TaskInterface";

//interfaces
interface Listprops {
  name: string;
  openForm: Function;
}

const List = ({ name, openForm }: Listprops) => {
  //state
  const { list, setList } = useContext(ListContext);
  const { setCurrentForm } = useContext(FormTypeContext);

  //functions
  const draggingOver = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const dragEnd = (e: any) => {
    let itemID = e.dataTransfer.getData("itemID");
    setList(
      list.map((i: Task) => {
        if (i.id === itemID) {
          return { ...i, type: name };
        } else return i;
      })
    );
  };

  return (
    <div className="rounded-md shadow-sm border w-full h-fit p-4 bg-white">
      <h2 className="font-bold flex items-center rounded-t text-lg">
        {name}
        <span className="ml-auto text-2xl text-blue-600">
          <BsThreeDotsVertical></BsThreeDotsVertical>
        </span>
      </h2>
      <hr className="my-3" />
      <div
        onDragOver={(e) => draggingOver(e)}
        onDrop={(e) => dragEnd(e)}
        className=" flex flex-col gap-3 min-h-[20px]"
      >
        {list
          .filter((item: Task) => item.type === name)
          .map((item: Task) => (
            <Card key={item.id} item={item}></Card>
          ))}
      </div>

      <div
        onClick={() => {
          setCurrentForm(name);
          openForm();
        }}
        className="p-2 m-2 flex gap-2 items-center text-lg cursor-pointer"
      >
        <AiOutlinePlus className="text-blue-500"></AiOutlinePlus>
        <span className="text-gray-500">Add new Card</span>
      </div>
    </div>
  );
};

export default List;
