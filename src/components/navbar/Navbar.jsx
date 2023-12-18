import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import CartLength from "../../utils/CartLength";

const Navbar = ({ toggleDrawer, isOpen }) => {
  const { products } = useSelector((state) => state.cart);

  const menus = [
    {
      title: "Shop",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Cart",
      url: "/cart",
      icon: `${products?.length > 0 ? "1" : ""}`
    },
  ];

  return (
    <nav className="px-6 lg:px-[150px] py-4 flex justify-between items-center shadow-md bg-green-600">
      <div>
        <a href="/" className="text-[22px] font-semibold text-white">
          Nature Hub
        </a>
      </div>

      <ul className="hidden lg:flex items-center gap-x-12 text-white">
        {menus?.map((menu, i) => (
          <li key={i}>
            <Link
              to={menu.url}
              className="hover:text-slate-800 transform duration-200 text-lg relative"
            >
              { menu.icon && products?.length && (
                <span className="absolute top-[-5px] right-[-15px]">
                  <CartLength>{products?.length} </CartLength>
                </span>
              )}
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* mobile */}
      <div className="block lg:hidden">
        <button onClick={() => toggleDrawer()}>
          {isOpen ? (
            <IoCloseSharp className="text-white text-xl" />
          ) : (
            <GiHamburgerMenu className="text-white text-xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
