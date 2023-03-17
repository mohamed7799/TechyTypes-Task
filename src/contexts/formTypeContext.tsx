import { createContext, useState } from "react";

const FormTypeContext = createContext<any>(null);

type Props = {
  children: JSX.Element;
};

export const FormTypeContextProvider = ({ children }: Props) => {
  const [currentForm, setCurrentForm] = useState("Doing");

  return (
    <FormTypeContext.Provider value={{ currentForm, setCurrentForm }}>
      {children}
    </FormTypeContext.Provider>
  );
};

export default FormTypeContext;
