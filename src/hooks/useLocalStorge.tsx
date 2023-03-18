import { useEffect, useState } from "react";
import Task from "../interfaces/TaskInterface";

interface ListContextInterface {
  list: Task[];
  setList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const getSavedValue = (key: string, initVal: Task[]): Task[] => {
  const savedVal = JSON.parse(localStorage.getItem(key)!);
  if (savedVal) return savedVal;
  return initVal;
};

const useLocalStorage = (
  key: string,
  initVal: Task[]
): ListContextInterface => {
  const [list, setList] = useState<Task[]>(() => {
    return getSavedValue(key, initVal);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list));
  }, [list]);

  return { list, setList };
};

export default useLocalStorage;
