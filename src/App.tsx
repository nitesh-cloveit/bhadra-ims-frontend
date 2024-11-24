import "./App.css";
import Header from "./components/header";
import Table from "./components/table";
import Formmmm from "./components/form";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Header />
      {/* <Table /> */}
      <Formmmm />
    </div>
  );
}

export default App;
