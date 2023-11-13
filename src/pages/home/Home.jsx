import { useState } from "react";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import MainSlide from "../../components/slider/MainSlide";
import Shop from "../shop/Shop";

const Home = () => {
  
  const [ category, setCategory ] = useState("eyeglass");

  return (
    <div className="font-inter">
      <MainSlide />
      <Category setCategory={setCategory}/>
      <Shop category={category}/>
      <Footer/>
    </div>
  );
};

export default Home;
