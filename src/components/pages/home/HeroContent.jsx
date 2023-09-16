import appleIcon from "../../../assets/apple-logo.png";
import arrowRight from "../../../assets/icons arrow-right.png";
import productImg from "../../../assets/hero_endframe.png";

const HeroContent = () => {
  const classes = `w-3 h-3 rounded-full bg-gray-500 gap-2`;
  return (
    <div className="hero-content flex-1 h-[344px] relative">
      <div className="bg-bgDark text-primary1 first-letter:border flex justify-between items-center px-20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center">
            <img src={appleIcon} alt="apple-icon" className="inline w-7" />
            <span className="inline pl-3 text-xs">iPhone 14 series</span>
          </div>
          <h2 className="text-5xl">
            UP to 10% <br></br>off Voucher
          </h2>
          <button className="text-sm justify-self-start w-24 flex items-center gap-2 hover:gap-3">
            <span>Shop now</span>{" "}
            <img src={arrowRight} alt="arrow-right" className="w-4" />
          </button>
        </div>
        <div className="product-img p-3">
          <img src={productImg} alt="product-img" className="w-full" />
        </div>
      </div>
      <div className="slider-icons w-full flex items-center justify-center gap-3 absolute bottom-3">
        <span className={`slider-con ${classes}`}></span>
        <span className={`slider-con ${classes}`}></span>
        <span
          className={`slider-con rounded-full border bg-button2 w-4 h-4`}
        ></span>
        <span className={`slider-con ${classes}`}></span>
        <span className={`slider-con ${classes}`}></span>
      </div>
    </div>
  );
};

export default HeroContent;
