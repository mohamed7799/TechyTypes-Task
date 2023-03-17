import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ListContext from "../contexts/listContext";
import FormTypeContext from "../contexts/formTypeContext";
import { v4 as uuidv4 } from "uuid";

interface AddFormProps {
  closeForm: Function;
  type?: string;
}

const AddForm = ({ closeForm, type }: AddFormProps) => {
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const { list, setList } = useContext(ListContext);
  const { currentForm } = useContext(FormTypeContext);
  const submitTask = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newTask: Task = {
      title: formTitle,
      description: formDescription,
      type: currentForm,
      id: uuidv4(),
    };
    console.log(newTask);
    setList([...list, newTask]);
    closeForm();
  };
  return (
    <div className="bg-gray-400/50 flex justify-center items-center absolute inset-0">
      <form
        onSubmit={(e) => submitTask(e)}
        className="w-1/2 bg-white rounded border flex flex-col gap-3 p-6"
      >
        <AiOutlineClose
          onClick={() => closeForm()}
          className="ml-auto text-2xl cursor-pointer"
        ></AiOutlineClose>

        <label className="font-bold" htmlFor="title">
          Title
        </label>
        <input
          className="rounded border-2 focus:outline-none p-2"
          type="text"
          name="title"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
        />
        <label className="font-bold" htmlFor="description">
          Description
        </label>
        <textarea
          className="rounded border-2 focus:outline-none p-2"
          name="description"
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
        />

        <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm;
