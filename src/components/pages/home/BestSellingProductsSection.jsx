import ProductsLists from "./ProductsLists";
import SectionHeading from "./SectionHeading";

const BestSellingProductsSection = () => {
  const URL = "../../../../db/bestSellingProducts.json";
  return (
    <section className="py-10">
      <SectionHeading title="This month" />
      <div className="flex items-center gap-4 my-4">
        <p className="text-2xl font-semibold self-end mb-2 mr-7">Flash sales</p>
        <button
          type="button"
          className="bg-secondary2 text-white text-sm rounded px-10 py-2 ml-auto hover:bg-secondary2/75 self-center"
        >
          View All
        </button>
      </div>
      <ProductsLists URL={URL} />
    </section>
  );
};

export default BestSellingProductsSection;
