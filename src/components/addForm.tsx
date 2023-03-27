import { useContext, useState } from "react";
import {
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineUser,
  AiOutlineSnippets,
  AiOutlineCheckSquare,
  AiOutlineCalendar,
  AiOutlinePaperClip,
  AiOutlineWallet,
  AiOutlineFileText,
  AiOutlineArrowRight,
  AiOutlineCopy,
  AiOutlineCloud,
  AiOutlineShareAlt,
} from "react-icons/ai";
import ListContext from "../contexts/listContext";
import FormTypeContext from "../contexts/formTypeContext";
import { v4 as uuidv4 } from "uuid";
import Task from "../interfaces/TaskInterface";
import UserImage from "./userImage";

//interfaces
interface AddFormProps {
  closeForm: Function;
  type?: string;
}

const AddForm = ({ closeForm, type }: AddFormProps) => {
  //state
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const { list, setList } = useContext(ListContext);
  const { currentForm } = useContext(FormTypeContext);

  //functions
  const submitTask = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newTask: Task = {
      title: formTitle,
      description: formDescription,
      type: currentForm,
      id: uuidv4(),
    };
    setList([...list, newTask]);
    closeForm();
  };

  return (
    <div className="bg-blue-700/90  items-center absolute inset-0 overflow-y-scroll">
      <div className="w-2/3 bg-white rounded border my-8 mx-auto flex gap-6 p-6">
        <form
          onSubmit={(e) => submitTask(e)}
          className="flex-1 flex flex-col gap-3"
        >
          <label className="font-bold text-lg" htmlFor="title">
            Card Title
          </label>
          <input
            className="rounded border-2 focus:outline-none p-2"
            type="text"
            name="title"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
          />
          <label className="font-bold text-lg" htmlFor="description">
            Description
          </label>
          <textarea
            className="rounded border-2 focus:outline-none p-2"
            name="description"
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
          />
          <div className="flex gap-3 items-center">
            <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded-md w-fit">
              Save
            </button>
            <AiOutlineClose
              onClick={() => closeForm()}
              className="text-2xl cursor-pointer"
            ></AiOutlineClose>
          </div>
          <div className="flex gap-2 mt-4">
            <UserImage />
            <input
              className="outline-none border rounded-md p-2 w-full"
              type="text"
              placeholder="Write a comment"
            />
          </div>
        </form>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-3">Add to card</h3>
          <ul>
            <li className="addForm__label">
              <AiOutlineUser /> Members
            </li>
            <li className="addForm__label">
              <AiOutlineSnippets /> Lables
            </li>
            <li className="addForm__label">
              <AiOutlineCheckSquare />
              Checklist
            </li>
            <li className="addForm__label">
              <AiOutlineCalendar />
              Dates
            </li>
            <li className="addForm__label">
              <AiOutlinePaperClip />
              Attachment
            </li>
            <li className="addForm__label">
              <AiOutlineWallet />
              Cover
            </li>
            <li className="addForm__label">
              <AiOutlineFileText />
              Custome Fields
            </li>
          </ul>
          <h3 className="text-lg font-bold mb-3">Power-Ups</h3>
          <ul>
            <li className="flex items-center gap-2 mb-3 cursor-pointer">
              <AiOutlinePlus className="text-blue-500" /> Add power-Ups
            </li>
          </ul>
          <h3 className="text-lg font-bold mb-3">Automation</h3>
          <ul>
            <li className="flex items-center gap-2 mb-3 cursor-pointer">
              <AiOutlinePlus className="text-blue-500" /> Add Automation
            </li>
          </ul>
          <h3 className="text-lg font-bold mb-3">Actions</h3>
          <ul>
            <li className="addForm__label">
              <AiOutlineArrowRight />
              Moves
            </li>
            <li className="addForm__label">
              <AiOutlineCopy />
              Copy
            </li>
            <li className="addForm__label">
              <AiOutlineCopy />
              Make Templates
            </li>
            <li className="addForm__label">
              <AiOutlineCloud />
              Archive
            </li>
            <li className="addForm__label">
              <AiOutlineShareAlt />
              Share
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
