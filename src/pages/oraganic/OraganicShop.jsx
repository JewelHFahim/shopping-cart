import CategoryOrganic from "../../components/organic-category/CategoryOrganic";
import ProductCard from "./ProductCard";

const OraganicShop = () => {
  const products = [
    {
      _id: 1,
      title: "Purpose Seasoning",
      price: 599,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Olive+Oil",
      weight: "100gm",
    },
    {
      _id: 2,
      title: "Classic Olive Oil",
      price: 999,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Olive+Oil",
      weight: "500ml",
    },
    {
      _id: 3,
      title: "Organic Honey",
      price: 799,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Organic+Honey",
      weight: "250gm",
    },
    {
      _id: 4,
      title: "Green Tea Pack",
      price: 299,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Green+Tea",
      weight: "50gm",
    },
    {
      _id: 5,
      title: "Roasted Almonds",
      price: 1199,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Almonds",
      weight: "200gm",
    },
    {
      _id: 6,
      title: "Dark Chocolate",
      price: 499,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Chocolate",
      weight: "100gm",
    },
    {
      _id: 7,
      title: "Pasta Penne",
      price: 349,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Pasta",
      weight: "500gm",
    },
    {
      _id: 8,
      title: "Tomato Ketchup",
      price: 229,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Ketchup",
      weight: "300gm",
    },
    {
      _id: 9,
      title: "Instant Coffee",
      price: 699,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Coffee",
      weight: "200gm",
    },
    {
      _id: 10,
      title: "Peanut Butter",
      price: 399,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Peanut+Butter",
      weight: "340gm",
    },
    {
      _id: 11,
      title: "Breakfast Cereal",
      price: 549,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Cereal",
      weight: "375gm",
    },
    {
      _id: 12,
      title: "Sea Salt Pack",
      price: 199,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Sea+Salt",
      weight: "200gm",
    },
    {
      _id: 13,
      title: "Herbal Shampoo",
      price: 299,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Shampoo",
      weight: "250ml",
    },
    {
      _id: 14,
      title: "Natural Soap Bar",
      price: 149,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Soap",
      weight: "100gm",
    },
    {
      _id: 15,
      title: "Face Moisturizer",
      price: 649,
      image: "https://dummyimage.com/520x520/cccccc/000000&text=Moisturizer",
      weight: "150ml",
    },
  ];

  return (
    <div className="px-[30px] lg:px-[120px]">
      <div className=" my-5 text-center">
        <p className="text-xl font-semibold">
          Shop From <span className="font-normal text-green-600">Ayaaz__</span>
        </p>
      </div>
      {/* ================>> CATEGORY <<==================== */}
      <CategoryOrganic />
      <div className="flex justify-center items-center my-3 lg:my-8">
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 lg:p-4">
          {products?.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default OraganicShop;
