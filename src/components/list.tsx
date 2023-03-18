import { AiOutlinePlus } from "react-icons/ai";
import Card from "./card";
import { useContext } from "react";
import FormTypeContext from "../contexts/formTypeContext";
import ListContext from "../contexts/listContext";

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
    <div className="rounded-md shadow-md border w-full h-fit">
      <h2 className="font-bold p-2 bg-blue-500 text-white rounded-t text-xl">
        {name}
      </h2>

      <div
        onDragOver={(e) => draggingOver(e)}
        onDrop={(e) => dragEnd(e)}
        className="p-3 flex flex-col gap-3 min-h-[30px]"
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
        className="border rounded p-2 hover:border-blue-500 hover:border-2 m-2 flex gap-2 items-center text-lg cursor-pointer"
      >
        <AiOutlinePlus className="text-blue-500"></AiOutlinePlus>
        <span className="text-gray-500">Add new Card</span>
      </div>
    </div>
  );
};

export default List;
