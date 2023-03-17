import { useEffect, useState } from "react";

const getSavedValue = (key: string, initVal: Task[]) => {
  const savedVal = JSON.parse(localStorage.getItem(key)!);
  if (savedVal) return savedVal;
  return initVal;
};

const useLocalStorage = (key: string, initVal: Task[]) => {
  const [list, setList] = useState<Task[]>(() => {
    return getSavedValue(key, initVal);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(list));
  }, [list]);

  return [list, setList];
};

export default useLocalStorage;
