import ProductsLists from "./ProductsLists";
import SaleTimer from "./SaleTimer";

const OnSellProductsSection = () => {
  const URL = "../../../../db/onSellProducts.json";
  return (
    <section className="on-sell-products-section my-10 flex flex-col">
      <SaleTimer />
      <ProductsLists URL={URL} />
      <button
        type="button"
        className="bg-secondary2 text-white text-sm rounded px-10 py-2 mt-12 hover:bg-secondary2/75 self-center"
      >
        View All product
      </button>
    </section>
  );
};

export default OnSellProductsSection;
