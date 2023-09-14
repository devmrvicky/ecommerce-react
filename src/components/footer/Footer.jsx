import AccountLink from "./AccountLink";
import DownloadAppLinks from "./DownloadAppLinks";
import NewLetter from "./NewLetter";
import QuickLinks from "./QuickLinks";
import Support from "./Support";

const Footer = () => {
  return (
    <footer className="bg-bgDark py-10">
      <div className="container flex flex-col">
        <div className="tooter-top text-primary1 grid grid-cols-5 gap-5">
          <NewLetter />
          <Support />
          <AccountLink />
          <QuickLinks />
          <DownloadAppLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
