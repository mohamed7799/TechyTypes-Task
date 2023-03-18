import { createContext, useState } from "react";

interface FormTypeContextInterface {
  currentForm: string;
  setCurrentForm: React.Dispatch<React.SetStateAction<string>>;
}

const FormTypeContext = createContext<FormTypeContextInterface>({
  currentForm: "Doing",
  setCurrentForm: () => {},
});

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
