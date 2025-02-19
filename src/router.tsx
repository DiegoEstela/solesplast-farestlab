import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import Home from "./pages/Home/Home";
import Customers from "./pages/Customers/Customers";
import CreateCustomer from "./pages/Customers/CreateCustomer";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/create-customer" element={<CreateCustomer />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
};

export default AppRouter;
