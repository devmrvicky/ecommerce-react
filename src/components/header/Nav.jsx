import { NavLink } from "react-router-dom";
import Wishlist from "../../assets/Wishlist.png";
import cart from "../../assets/cart.png";
import searchIcon from "../../assets/search-icon.png";

const Nav = () => {
  return (
    <nav className="border-b py-3 bg-white">
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl">Logo</h1>
        <ul className="flex items-center gap-10 text-base select-none">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-bgDark/50 border-b" : "hover:text-bgDark/50"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-bgDark/50 border-b" : "hover:text-bgDark/50"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-bgDark/50 border-b" : "hover:text-bgDark/50"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "text-bgDark/50 border-b" : "hover:text-bgDark/50"
              }
            >
              Sign up
            </NavLink>
          </li>
        </ul>
        <div className="nav-right flex gap-3">
          <form
            action=""
            className="flex items-center w-80 bg-secondary text-text2 px-2 py-1"
          >
            <label htmlFor="search-box" aria-hidden="true" className="hidden">
              search box
            </label>
            <input
              type="text"
              name="search-box"
              id="search-bx"
              className="w-full outline-none text-sm px-2 bg-transparent"
              placeholder="What are you looking for?"
            />
            <button type="submit" className="p-1">
              <img src={searchIcon} alt="search-icon" />
            </button>
          </form>
          <button
            type="button"
            className="wishlist hover:bg-secondary w-10 h-10 flex items-center justify-center rounded-full p-2"
          >
            <img src={Wishlist} alt="wishlist" />
          </button>
          <button
            type="button"
            className="cart hover:bg-secondary w-10 h-10 flex items-center justify-center rounded-full p-2"
          >
            <img src={cart} alt="cart" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
