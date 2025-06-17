import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/ProductListingPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Header from "./components/Header";

import ProductsListingPage from "./pages/ProductListingPage";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsListingPage />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
