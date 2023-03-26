import { useState } from "react";
import { FormTypeContextProvider } from "./contexts/formTypeContext";
import { ListContextProvider } from "./contexts/listContext";
import List from "./components/list";
import Header from "./components/header";
import AddForm from "./components/addForm";
import UserInfo from "./components/userInfo";
import ToolBar from "./components/toolbar";

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
        <main className=" min-h-full">
          <Header></Header>
          <div className="flex gap-3 my-6 mx-auto container">
            <UserInfo />
            <div className=" mx-auto max-w-7xl flex-[4_4_0%]">
              <ToolBar></ToolBar>
              <div className="flex gap-3">
                <List openForm={openForm} name="To Do"></List>
                <List openForm={openForm} name="In Progress"></List>
                <List openForm={openForm} name="Done"></List>
              </div>
            </div>
          </div>

          {showForm && <AddForm closeForm={closeForm}></AddForm>}
        </main>
      </FormTypeContextProvider>
    </ListContextProvider>
  );
};

export default App;
