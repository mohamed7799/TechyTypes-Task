import { AiOutlineClose } from "react-icons/ai";

const AddForm = () => {
  return (
    <div className="bg-gray-400/50 flex justify-center items-center absolute inset-0">
      <form className="w-1/2 bg-white rounded border flex flex-col gap-3 p-6">
        <AiOutlineClose className="ml-auto text-2xl cursor-pointer"></AiOutlineClose>

        <label className="font-bold" htmlFor="title">
          Title
        </label>
        <input
          className="rounded border-2 focus:outline-none p-2"
          type="text"
          name="title"
        />
        <label className="font-bold" htmlFor="description">
          Description
        </label>
        <textarea
          className="rounded border-2 focus:outline-none p-2"
          name="description"
        />

        <button className="bg-blue-500 text-white font-bold px-6 py-3 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddForm;
