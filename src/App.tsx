import { useState } from "react";
import { FormTypeContextProvider } from "./contexts/formTypeContext";
import { ListContextProvider } from "./contexts/listContext";
import List from "./components/list";
import Header from "./components/header";
import AddForm from "./components/addForm";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <ListContextProvider>
      <FormTypeContextProvider>
        <main className="relative min-h-full">
          <Header></Header>

          <div className="flex gap-4 my-6 mx-auto max-w-7xl">
            <List openForm={openForm} name="To Do"></List>
            <List openForm={openForm} name="In Progress"></List>
            <List openForm={openForm} name="Done"></List>
          </div>
          {showForm && <AddForm closeForm={closeForm}></AddForm>}
        </main>
      </FormTypeContextProvider>
    </ListContextProvider>
  );
};

export default App;
