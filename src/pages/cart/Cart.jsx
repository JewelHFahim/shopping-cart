import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiSolidLeftArrowAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeSingle,
} from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-gray-100 full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col justify-between h-full lg:flex-row">

            <div className="lg:w-3/4 bg-white px-10 lg:py-6">

              <div className="flex justify-between border-b pb-2 lg:pb-8 mb-5 lg:mb-0">
                <h1 className="font-semibold text-2xl text-gray-600">
                  Shopping Cart
                </h1>
                <h2 className="font-semibold text-2xl text-gray-600">
                  {products.length} Items
                </h2>
              </div>

              <div className="hidden lg:flex mt-10 mb-5 font-semibold text-xs text-gray-600 uppercase">
                <h3 className=" w-2/5">Product Details</h3>
                <h3 className="text-center w-1/5 ">Quantity</h3>
                <h3 className=" text-center w-1/5 ">Price</h3>
                <h3 className="text-center w-1/5">Total</h3>
              </div>

              <div className="px-4 lg:px-0">
                {products.length === 0 ? (
                  <p className="text-center text-xl text-slate-100  py-6">
                    Cart is empty, add some items...
                  </p>
                ) : (
                  <div className="flex flex-col gap-y-2">
                    {products?.map((product, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center hover:shadow-md transform duration-200 -mx-8 p- lg:px-6  text-gray-600 border"
                      >
                        {/* Product Details */}
                        <div className="flex items-center w-2/5">
                          <div className="w-10 h-10 lg:w-20 lg:h-20">
                            <img
                              src={product.image}
                              alt=""
                              className="w-full h-full"
                            />
                          </div>

                          <div className="flex flex-col lg:gap-2 justify-between items-start ml-2 lg:ml-4 flex-grow">
                            <span className="font-semibold text-sm ">
                              {product.productName}
                            </span>

                            <span className="hidden lg:block text-green-500  capitalize">
                              {product.category}
                            </span>

                            <button
                              onClick={() => dispatch(removeFromCart(product))}
                              className="hidden lg:block font-semibold hover:text-red-500 text-gray-500 text-xs"
                            >
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* Quantity */}
                        <div className="flex justify-center w-1/5">
                          <button onClick={() => dispatch(removeSingle(product))}>
                            <AiOutlineMinus />
                          </button>

                          <div className="mx-2 border text-center w-5 lg:w-8 text-gray-600 bg-gray-100">
                            {product.quantity}
                          </div>

                          <button onClick={() => dispatch(addToCart(product))}>
                            <AiOutlinePlus />
                          </button>
                        </div>

                        <div className="hidden lg:block text-center w-1/5 font-semibold text-sm">
                          {product.price} Tk
                        </div>

                        <div className="text-center w-1/5 font-semibold text-sm">
                          {product.quantity * product.price} tk
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/"
                className="hidden lg:flex items-center font-semibold text-indigo-600 text-sm mt-10"
              >
                <BiSolidLeftArrowAlt className="text-2xl" />
                Continue Shopping
              </Link>
            </div>

            <div className=" lg:w-1/4 px-8 py-6  bg-green-50 shadow text-gray-600">
              <h1 className="font-semibold text-2xl border-b pb-8 ">
                Order Summary
              </h1>

              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {products.length}
                </span>
                <span className="font-semibold text-sm">
                  {total.toFixed(2)} Tk
                </span>
              </div>

              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Shipping:
                </span>
                <span className="font-semibold text-sm">
                  {(total * 0.001).toFixed(2)} Tk
                </span>
              </div>

              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Tax:</span>
                <span className="font-semibold text-sm">
                  {(total * 0.002).toFixed(2)} Tk
                </span>
              </div>

              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm ">
                  <span className="uppercase">Total cost</span>

                  <span>
                    {(
                      Number(total) +
                      Number(total) * 0.002 +
                      Number(total) * 0.001
                    ).toFixed(2)}
                    Tk
                  </span>
                </div>

                <Link to="/order">
                  <button className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
