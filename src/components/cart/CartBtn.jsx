import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartBtn = () => {
  const { products } = useSelector((state) => state.cart);

  return (
    <div className="relative">
      <Link to="/cart">
        <button className="w-[40px] h-[40px] border border-green-500 text-green-500 flex justify-center items-center text-[22px] rounded-s-lg border-r-transparent bg-white hover:text-white hover:bg-green-500 hover:border-transparent transform duration-150">
          <FiShoppingCart />
        </button>
      </Link>

      {products?.length > 0 && (
        <p className="absolute left-[-7px] top-[-10px] bg-green-500 text-white w-[18px] h-[18px] text-sm flex justify-center items-center rounded-full font-medium">
          {products?.length}
        </p>
      )}
    </div>
  );
};

export default CartBtn;
