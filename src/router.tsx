import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import NavBar from "./components/NavBar/Navbar";

import Customers from "./pages/Costumers/Costumers";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
