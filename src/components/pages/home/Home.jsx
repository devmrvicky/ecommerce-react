import AllProductsSection from "./AllProductsSection";
import BestProduct from "./BestProduct";
import BestSellingProductsSection from "./BestSellingProductsSection";
import CategoriesSection from "./CategoriesSection";
import HeroSection from "./HeroSection";
import OnSellProductsSection from "./OnSellProductsSection";

const Home = () => {
  return (
    <div>
      <div className="container">
        <HeroSection />
        <OnSellProductsSection />
        <hr />
        <CategoriesSection />
        <hr />
        <BestSellingProductsSection />
        <hr />
        <BestProduct />
        <hr />
        <AllProductsSection />
      </div>
    </div>
  );
};

export default Home;
