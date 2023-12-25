import CategoryOrganic from "../../components/organic-category/CategoryOrganic";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../redux/features/products/productApi";

const OraganicShop = () => {
  const { data: products } = useGetProductsQuery();
  console.log(products);



  return (
    <div className="px-[30px] lg:px-[120px]">
      <div className=" my-5 text-center">
        <p className="text-xl font-semibold">
          Shop From <span className="font-normal text-green-600">Nature</span>
        </p>
      </div>

      {/* ================>> CATEGORY <<==================== */}
      <CategoryOrganic />

      <div className="flex justify-center items-center my-3 lg:my-8">
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 lg:p-4">
          {products?.data?.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </section>
      </div>


    </div>
  );
};

export default OraganicShop;
