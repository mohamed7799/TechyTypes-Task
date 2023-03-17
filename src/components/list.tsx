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
  const { list } = useContext(ListContext);
  const { setCurrentForm } = useContext(FormTypeContext);
  //functions

  return (
    <div className="p-3 rounded-md shadow-md border w-full h-fit">
      <h2 className="font-bold">{name}</h2>
      <hr className="my-3" />

      <div className="flex flex-col gap-3">
        {list
          .filter((item: Task) => item.type === name)
          .map((item: Task) => (
            <Card
              key={item.id}
              cardTitle={item.title}
              cardDescription={item.description}
            ></Card>
          ))}
      </div>

      <div
        onClick={() => {
          setCurrentForm(name);
          openForm();
        }}
        className="m-2 flex gap-2 items-center text-lg cursor-pointer"
      >
        <AiOutlinePlus className="text-blue-500"></AiOutlinePlus>
        <span className="text-gray-500">Add new Card</span>
      </div>
    </div>
  );
};

export default List;
