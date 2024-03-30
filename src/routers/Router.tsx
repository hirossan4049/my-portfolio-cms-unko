import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import TopPage from "../pages/TopPage";
import Products from "../pages/Products";
import Learning from "../pages/Learning";
import Profile from "../pages/Profile";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes> {/*Routesで囲む*/}
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<TopPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;