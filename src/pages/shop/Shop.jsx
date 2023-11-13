/* eslint-disable react/prop-types */

import { useGetProductsQuery } from "../../redux/features/api/apiSlice";
import { Link } from "react-router-dom";

const Shop = ({ category }) => {

  const { data: products } = useGetProductsQuery();

  const filteredProducts = products?.data?.filter((product) => {
    return product.category === category;
  });

  console.log(filteredProducts);

  return (
    <div className="px-[120px] py-8">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        {filteredProducts?.map((product, i) => (
          <Link
            to={`/product/${product?._id}`}
            key={i}
            className="w-[300px] h-[350px] relative flex flex-col items-center justify-center shadow-sm hover:shadow-xl transform duration-200"
          >
            <img
              src={product?.image}
              alt="product"
              className="w-full h-full object-fill hover:scale-[1.02] transform duration-200 border"
            />

            <div className="flex items-center justify-between gap-8 absolute bottom-10 px-4">
              <h3 className="capitalize">{product?.title?.slice(0, 15)}</h3>
              <p>${product?.price}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Shop;
