import leftArrow from "../../../assets/icons_arrow-left.png";
import SectionHeading from "./SectionHeading";

const SaleTimer = () => {
  return (
    <div className="flex flex-col py-4 gap-3">
      <SectionHeading title="Today's" />
      <div className="flex items-center gap-4 mb-4">
        <p className="text-4xl font-semibold self-end mb-2 mr-7">Flash sales</p>
        <div className="timer flex gap-2">
          <div className="days flex flex-col items-center gap-2">
            <span className="text-sm font-semibold">Days</span>
            <span className="text-xl bg-zinc-500/10 text-black font-semibold w-12 h-12 rounded-full flex items-center justify-center">
              03
            </span>
          </div>
          <span className="text-4xl self-end mb-2 text-secondary2">:</span>
          <div className="days flex flex-col items-center gap-2">
            <span className="text-sm font-semibold">Days</span>
            <span className="text-xl bg-zinc-500/10 text-black font-semibold w-12 h-12 rounded-full flex items-center justify-center">
              03
            </span>
          </div>
          <span className="text-4xl self-end mb-2 text-secondary2">:</span>
          <div className="days flex flex-col items-center gap-2">
            <span className="text-sm font-semibold">Days</span>
            <span className="text-xl bg-zinc-500/10 text-black font-semibold w-12 h-12 rounded-full flex items-center justify-center">
              03
            </span>
          </div>
          <span className="text-4xl self-end mb-2 text-secondary2">:</span>
          <div className="days flex flex-col items-center gap-2">
            <span className="text-sm font-semibold">Days</span>
            <span className="text-xl bg-zinc-500/10 text-black font-semibold w-12 h-12 rounded-full flex items-center justify-center">
              03
            </span>
          </div>
        </div>
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
    </div>
  );
};

export default SaleTimer;
