import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="lg:w-[300px] w-full lg:h-[350px] min-h-full p-2 lg:p-0 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transform duration-200 border rounded-md overflow-hidden">

        <Link to={`/product/${product?._id}`} className="lg:w-full lg:h-[70%] ">
          <img
            src={product?.image}
            alt="product"
            className="object-cover w-full h-full"
          />
        </Link>

        <div className="w-full h-[30%] flex flex-col items-center lg:gap-y-5">
          
          <div className="flex flex-col lg:flex-row items-center">
            <h3 className="capitalize p-0 m-0 leading-0 text-sm lg:text-[16px]">
              {product?.title?.slice(0, 20)}
            </h3>
            <p className="p-0 m-0 leading-0 text-sm lg:text-[16px]">(500 gm)</p>
          </div>

          <div className="w-full flex justify-between items-center pt-4 lg:pt-0 pb-1 lg:pb-0 lg:px-5">

            <p className="flex items-center text-sm lg:text-[16px] font-medium text-green-500  p-0 m-0">
              <TbCurrencyTaka />
              {product?.price}
            </p>

            <button  onClick={() => (
                toast.success("Added To Cart"), dispatch(addToCart(product))
              )} 
              className="border px-3 py-[3px] lg:px-4 lg:py-1 text-xs lg:text-sm rounded-md text-green-500 border-green-500 hover:bg-green-500 hover:text-white font-medium transform duration-150">
              Add To Cart
            </button>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
