import "./App.css";
import Products from "./pages/products";
import AddProduct from "./pages/products/addProduct";
import { Routes, Route, Navigate } from "react-router";
import ProductDetail from "./pages/products/productDetail";
import Login from "./pages/auth/login";
import CreateOrganization from "./pages/auth/createOrganization";
import AppLayout from "./pages/appLayout";
import Sales from "./pages/sales";
import { useAuth } from "./context/authContext";

// redirects to login page if the user is not authenticated
const ProtectedRoutes = () => {
  const { token } = useAuth();
  return token ? <AppLayout /> : <Navigate to={"/login"} />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route index path="/" element={<Products />} />
        <Route index path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/organization/add" element={<CreateOrganization />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="*" element={<p>Page not found!!</p>} />
      </Route>
    </Routes>
  );
}

export default App;
