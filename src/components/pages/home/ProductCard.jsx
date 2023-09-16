import PropTypes from "prop-types";
import wishlist from "../../../assets/Wishlist.png";
import cart from "../../../assets/cart.png";
// import star from "../../../assets/star.png";
// import blankStar from "../../../assets/blank-star.png";

const ProductCard = ({ product }) => {
  return (
    <li className="product-card w-52 relative">
      <div className="product-img bg-secondary h-40 p-10 flex items-center justify-center group cursor-pointer mb-3 rounded-sm overflow-hidden">
        <div className="img-container">
          <img
            src={product.img}
            alt={product.name}
            className="w-full group-hover:scale-110 transition-transform object-cover"
          />
        </div>
        <span
          className={`${
            product.discount ? "discount-label bg-secondary2 " : ""
          } ${
            product.isNew && "bg-button1 text-black"
          } absolute top-0 left-0 text-primary text-xs p-1 rounded m-1`}
        >
          {product.discount && -product.discount + "%"}
          {product.isNew && "new"}
        </span>
        <div className="btns flex flex-col gap-2 absolute top-0 right-0 m-1 z-20">
          <button
            type="button"
            className="bg-primary w-8 h-8 flex items-center justify-center rounded-full p-2"
          >
            <img src={wishlist} alt="wishlist" />
          </button>
          <button
            type="button"
            className="bg-primary w-8 h-8 flex items-center justify-center rounded-full p-2"
          >
            <img src={cart} alt="cart" />
          </button>
        </div>
      </div>
      <h2 className="font-medium text-sm">{product.name}</h2>
      <p
        className={`text-sm py-1 font-semibold flex gap-3 ${
          !product.discount && "inline"
        }`}
      >
        {product.discount && (
          <span className="text-secondary2">
            ${product.price - (product.price * product.discount) / 100}
          </span>
        )}
        <span
          className={`${
            product.discount ? "text-zinc-500 line-through" : "text-secondary2"
          } cursor-not-allowed`}
        >
          ${product.price}
        </span>
      </p>
      <div
        className={`rating text-xs font-semibold text-zinc-500 ${
          !product.discount && "inline"
        }`}
      >
        rating: {product.total_stars}{" "}
        <span>({product.total_rated_people})</span>
      </div>
    </li>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
export default ProductCard;
