import sendIcon from "../../assets/icon-send.png";

const NewLetter = () => {
  return (
    <div className="flex flex-col w-full gap-4 text-primary1">
      <h1 className="text-3xl">Logo</h1>
      <p>Subscribe</p>
      <p className="text-xs">Get 10% off your first order</p>
      <form
        action=""
        className="border flex items-center max-w-[200px] rounded"
      >
        <input
          type="text"
          name="subscribe"
          id="subscribe"
          className="bg-transparent outline-none w-full px-2 text-sm"
          placeholder="enter your email"
        />
        <button type="submit" className="p-1">
          <img src={sendIcon} alt="send-icon" />
        </button>
      </form>
    </div>
  );
};

export default NewLetter;
