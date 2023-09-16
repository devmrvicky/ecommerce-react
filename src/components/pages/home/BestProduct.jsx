import jblMusic from "../../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";

const BestProduct = () => {
  return (
    <section className="p-10 bg-bgDark flex items-center justify-between">
      <div>
        <p className="text-button1 text-2xl">Category</p>
        <h1 className="text-white text-6xl font-semibold py-10">
          Enhance your <br />
          music Experience
        </h1>
        <div className="flex items-center gap-3">
          <div className="day bg-white flex flex-col items-center w-16 h-16 rounded-full p-2 text-sm">
            <span className="text-base">03</span>
            <span className="font-semibold text-base">day</span>
          </div>
          <div className="day bg-white flex flex-col items-center w-16 h-16 rounded-full p-2 text-sm">
            <span className="text-base">03</span>
            <span className="font-semibold text-base">day</span>
          </div>
          <div className="day bg-white flex flex-col items-center w-16 h-16 rounded-full p-2 text-sm">
            <span className="text-base">03</span>
            <span className="font-semibold text-base">day</span>
          </div>
          <div className="day bg-white flex flex-col items-center w-16 h-16 rounded-full p-2 text-sm">
            <span className="text-base">03</span>
            <span className="font-semibold text-base">day</span>
          </div>
        </div>
        <button
          type="button"
          className="bg-button1 text-xl px-10 py-4 rounded mt-10 hover:bg-button1/50 hover:text-white"
        >
          Buy now
        </button>
      </div>
      <div>
        <img src={jblMusic} alt="JBL_BOOMBOX_2_HERO_020_x1 (1) 1" />
      </div>
    </section>
  );
};

export default BestProduct;
