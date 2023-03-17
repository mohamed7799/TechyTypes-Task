import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorge";

const ListContext = createContext<any>(null);

type Props = {
  children: JSX.Element;
};

export const ListContextProvider = ({ children }: Props) => {
  const [list, setList] = useLocalStorage("tasks", []);

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContext;
