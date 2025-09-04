import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useState } from "react";
import Buttons from "../../utils/Buttons";

const ProductDetail = () => {
  const dispatch = useDispatch();

   const product ={
      _id: 1,
      title: "Purpose Seasoning",
      price: 599,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Olive+Oil",
      weight: "100gm",
    }


  const [active, setActive] = useState("description");

  const handleActive = (state) => {
    setActive(state);
  };

  return (
    <div className="px-6 lg:px-[120px] py-5  bg-white">
      <div className="flex flex-col lg:flex-row justify-center items-center">

        <img
          className="object-cover object-center lg:w-1/2 px-10 w-full h-full rounded-lg lg:h-[36rem]"
          src={product?.image}
          alt=""
        />

        <div className="lg:w-1/2 lg:px-8 h-full flex justify-center lg:items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800  lg:text-3xl lg:w-96">
              {product?.title}
            </h1>

            <div className="text-gray-600  flex items-center gap-2 my-2">
              {product?.quantity && <p className="">250 gm</p>}
            </div>

            <hr />

            <h3 className="my-6 flex items-center space-x-2">
              <span>Price:</span>
              <span className="font-medium text-lg text-green-600">
                {product?.price} TK (BDT)
              </span>
            </h3>


            <p className="max-w-lg mt-6 text-gray-500 ">
              {product?.des?.slice(0, 70)}
            </p>

            <button
              onClick={() => (
                toast.success("Added To Cart"), dispatch(addToCart(product))
              )}
              className="w-full py-1 text-xl font-medium text-white uppercase transition-colors duration-300 transform rounded bg-green-500 hover:bg-green-600 focus:outline-none my-10"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <hr />

      <section className="my-8">
        <div className="flex justify-center lg:justify-start items-center lg:gap-5">
          <Buttons
            handleActive={handleActive}
            active={active}
            condition="description"
          >
            Description
          </Buttons>

          <Buttons
            handleActive={handleActive}
            active={active}
            condition="review"
          >
            Review
          </Buttons>

          <Buttons
            handleActive={handleActive}
            active={active}
            condition="shipping"
          >
            Shipping & Returns
          </Buttons>
        </div>

        {active === "description" && (
          <div className="my-5 lg:w-[60%]">
            <p>{product?.des}</p>
          </div>
        )}

        {active === "review" && (
          <div className="my-5 lg:w-[60%]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dicta vel voluptates nobis nostrum, dolorem commodi itaque animi
              excepturi asperiores facere doloremque, enim alias a, sunt
              suscipit impedit voluptatibus accusamus in voluptatem odit atque.
              Eos error repellendus, suscipit animi, inventore voluptates
              quisquam soluta reprehenderit nisi ut quaerat itaque nihil
              dignissimos!
            </p>
          </div>
        )}

        {active === "shipping" && (
          <div className="my-5 lg:w-[60%]">
            <p>
              Free Shipping for products above 3000 AED. Shipment Charges
              applied for products below 3000 AED. No returns for customized
              products.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductDetail;
