import SectionHeading from "./SectionHeading";
import leftArrow from "../../../assets/icons_arrow-left.png";
import ProductsLists from "./ProductsLists";

const AllProductsSection = () => {
  const URL = "../../../../db/allProducts.json";
  return (
    <section className="py-10">
      <SectionHeading title="Our products" />
      <div className="flex items-center gap-4 my-4">
        <p className="text-2xl font-semibold self-end mb-2 mr-7">
          Browse by categories
        </p>
        <div className="arrow-btns flex gap-2 ml-auto">
          <button
            type="button"
            className="bg-secondary w-10 h-10 flex items-center justify-center rounded-full p-3"
          >
            <img src={leftArrow} alt="left arrow" />
          </button>
          <button
            type="button"
            className="bg-secondary w-10 h-10 flex items-center justify-center rounded-full p-3 rotate-180"
          >
            <img src={leftArrow} alt="right arrow" />
          </button>
        </div>
      </div>
      <ProductsLists URL={URL} />
    </section>
  );
};

export default AllProductsSection;
