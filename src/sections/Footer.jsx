import { socialImgs } from '../constants/index';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} href={socialImg.url} target="_blank" rel="noopener noreferrer" className="icon">
              <img src={socialImg.imgPath} alt={socialImg.name} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </a>
          ))}
        </div>

        <div className="flex flex-col ml-11 justify-center">
          <p className="">© {new Date().getFullYear()} Priyanshu Bhatt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
