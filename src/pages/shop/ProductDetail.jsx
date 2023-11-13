import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useGetSingleProductQuery } from "../../redux/features/api/apiSlice";
import { addToCart } from "../../redux/features/cart/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product } = useGetSingleProductQuery(id);
  const dispatch = useDispatch();

  return (

   

        <div className="container px-6 py-5 mx-auto bg-white">

          <div className="lg:-mx-6 lg:flex lg:items-center">

            <img
              className="object-cover object-center lg:w-1/2 px-10 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={product?.image}
              alt=""
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 shadow-xl h-[80vh]">
              <h1 className="text-2xl font-semibold text-gray-800  lg:text-3xl lg:w-96">
                {product?.title}
              </h1>

              <p className="max-w-lg mt-6 text-gray-500 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.
              </p>

              <h3 className="my-6 text-lg font-medium text-blue-500">
                Price: {product?.price} TK (BDT)
              </h3>
              <p className="text-gray-600  flex items-center gap-2">
                Status: {product?.quantity && <p className="font-semibold text-green-700"> In Stock</p>}
              </p>


              <button onClick={()=> (toast.success("Added To Cart"), dispatch(addToCart(product))) } className="px-8 py-2 my-8 text-xl font-semibold text-white uppercase transition-colors duration-300 transform rounded bg-slate-500 hover:bg-gray-700    focus:outline-none">
                Add to cart
              </button>
            </div>

          </div>
        </div>

 

  );
};

export default ProductDetail;
