import Navbar from "../components/navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import MobileNavbar from "../components/navbar/mobile-navbar";
import { useState } from "react";
import CartBtn from "../components/cart/CartBtn";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <Navbar toggleDrawer={toggleDrawer} isOpen={isOpen} />
      <MobileNavbar isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Outlet />

      {location.pathname !==  ("/cart" && "/order") && (
        <div className="fixed top-[36vh] z-[999] lg:top-[57vh] right-0">
          <CartBtn />
        </div>
      )}
    </div>
  );
};

export default Main;
