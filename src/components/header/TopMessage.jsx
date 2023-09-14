function TopMessage() {
  return (
    <div className="w-full bg-bgDark">
      <div className="container flex p-1 items-center">
        <div className="w-full text-center flex gap-2 items-center ">
          <p className="text-sm text-primary1">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="/" className="font-semibold text-primary1">
            Shop now
          </a>
        </div>
        <div className="text-primary flex items-center gap-2">
          <span>English</span>
          <i className="fa-solid fa-down-angle"></i>
        </div>
      </div>
    </div>
  );
}

export default TopMessage;
