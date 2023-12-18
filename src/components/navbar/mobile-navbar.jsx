import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styles from "./mobile-menu.module.css";
import { useSelector } from "react-redux";

const MobileNavbar = ({ isOpen, toggleDrawer }) => {
  const { products } = useSelector((state) => state.cart);

  return (
    <>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left" size={250}>
        <div className={styles.container}>
          <h1>Nature Hub</h1>

          <ul>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/cart" className="flex items-center gap-2">
                <p>Cart</p>
                {
                  products?.length > 0 &&
                  <p className="border border-slate-500 bg-slate-900 w-[15px] h-[15px] rounded-full text-xs flex items-center justify-center font-medium">
                  {products?.length}
                </p>
                }
              </a>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
