import qrCodeLink from "../../assets/Qr Code.png";
import playStoreLink from "../../assets/play-store.png";
import appStoreLink from "../../assets/download-appstore.png";
import facebook from "../../assets/icon-Facebook.png";
import instagram from "../../assets/icon-instagram.png";
import linkedIN from "../../assets/icon-LinkedIn.png";
import twitter from "../../assets/icon-Twitter.png";

const DownloadAppLinks = () => {
  return (
    <div className="download-app-links w-full">
      <h3>Download our app</h3>
      <p className="text-xs">Save $3 with App new user only</p>
      <div className="download-links w-44 grid grid-cols-2 my-3">
        <div className="qr-code-link row-span-2 w-16">
          <img src={qrCodeLink} className="w-full" alt="qr code" />
        </div>
        <div className="play-store-link w-full">
          <img src={playStoreLink} className="w-full" alt="play store link" />
        </div>
        <div className="app-store-link w-full">
          <img src={appStoreLink} className="w-full" alt="app store link" />
        </div>
      </div>
      <ul className="flex items-center justify-between w-44">
        <li>
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={linkedIN} alt="linkedIN" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={instagram} alt="instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DownloadAppLinks;
