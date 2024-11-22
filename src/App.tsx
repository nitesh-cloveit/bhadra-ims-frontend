import "./App.css";
import Header from "./components/header";
import Table from "./components/table";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Header />
      <Table />
    </div>
  );
}

export default App;
