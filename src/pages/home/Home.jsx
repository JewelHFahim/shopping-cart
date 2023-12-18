import { useState } from "react";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import MainSlide from "../../components/slider/MainSlide";
import Shop from "../shop/Shop";
import OraganicShop from "../oraganic/OraganicShop";

const Home = () => {
  const [category, setCategory] = useState("eyeglass");

  return (
    <div>
      <MainSlide />
      <OraganicShop />

      

      {/* <Shop category={category}/> */}

     

      <Footer />
    </div>
  );
};

export default Home;
