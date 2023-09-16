import PropTypes from "prop-types";
import { useState } from "react";
import ProductCard from "./ProductCard";
import useGetProducts from "./useGetProducts";

const ProductsLists = ({ URL }) => {
  const [products, setProduct] = useState([]);
  useGetProducts(URL, setProduct);
  return (
    <ul className="on-sell-product-lists flex gap-10 flex-wrap">
      {products.slice(0, 10).map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </ul>
  );
};

ProductsLists.propTypes = {
  URL: PropTypes.string.isRequired,
};

export default ProductsLists;
