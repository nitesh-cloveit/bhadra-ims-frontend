import "./App.css";
import Header from "./components/header";
import Products from "./pages/products";
import AddProduct from "./pages/products/addProduct";
import { Routes, Route } from "react-router";
import ProductDetail from "./pages/products/productDetail";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Header />
      <AppRoutes />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<AddProduct />} />
      <Route path="/products/detail/:id" element={<ProductDetail />} />
      {/* Add Sales Routes */}
    </Routes>
  )
}

export default App;
