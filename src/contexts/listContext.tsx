import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorge";
import Task from "../interfaces/TaskInterface";

interface ListContextInterface {
  list: Task[];
  setList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ListContext = createContext<ListContextInterface>({
  list: [],
  setList: () => {},
});

type Props = {
  children: JSX.Element;
};

export const ListContextProvider = ({ children }: Props) => {
  const { list, setList } = useLocalStorage("tasks", []);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContext;
