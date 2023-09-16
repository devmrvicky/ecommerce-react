import PropTypes from "prop-types";
import SectionHeading from "./SectionHeading";
import leftArrow from "../../../assets/icons_arrow-left.png";
import phone from "../../../assets/Category-CellPhone.png";
import computer from "../../../assets/Category-Computer.png";
import smartWatch from "../../../assets/Category-SmartWatch.png";
import headPhone from "../../../assets/Category-Headphone.png";
import gamepad from "../../../assets/Category-Gamepad.png";
import camera from "../../../assets/Category-Camera.png";

const CategoryCard = ({ categoryName, src, active = false }) => {
  return (
    <div
      className={`border flex flex-col items-center justify-center flex-1 h-36 gap-4 ${
        active ? "bg-secondary2 text-white" : "hover:bg-slate-500/10"
      }`}
    >
      <div className="img-container">
        <img src={src} alt="" />
      </div>
      <p>{categoryName}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  categoryName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

const CategoriesSection = () => {
  return (
    <section className="py-10">
      <SectionHeading title="Categories" />
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
      <div className="categories-cards flex gap-4">
        <CategoryCard categoryName="Phones" src={phone} />
        <CategoryCard categoryName="Computers" src={computer} />
        <CategoryCard categoryName="Smart watches" src={smartWatch} />
        <CategoryCard categoryName="Camera" src={camera} active={true} />
        <CategoryCard categoryName="Head phones" src={headPhone} />
        <CategoryCard categoryName="Gaming" src={gamepad} />
      </div>
    </section>
  );
};

export default CategoriesSection;
