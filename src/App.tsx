import AddForm from "./components/addForm";
import Header from "./components/header";
import List from "./components/list";

const App = () => {
  return (
    <main className="relative h-full">
      <Header></Header>
      <div className="flex gap-4 m-6">
        <List name="Doing"></List>
        <List name="In Progress"></List>
        <List name="Done"></List>
      </div>
      {/*<AddForm></AddForm>*/}
    </main>
  );
};

export default App;
