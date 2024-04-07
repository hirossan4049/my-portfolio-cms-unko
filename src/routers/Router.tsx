import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import TopPage from "../pages/TopPage";
import Products from "../pages/Products";
import Learning from "../pages/Learning";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";
import Notfound from "../pages/Notfound";
import Index from "../pages/Index";
import NewAccount from "../pages/NewAccount";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new_account" element={<NewAccount />} />
        <Route path="/top" element={<TopPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;