import "./Footer.scss";
import logo from "../assets/logo.svg";
import fb from "../assets/icon-facebook.svg";
import tw from "../assets/icon-twitter.svg";
import pin from "../assets/icon-pinterest.svg";
import insta from "../assets/icon-instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <div>
            <div className="tittle">Feature</div>
            <div>
              {" "}
              <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>{" "}
            </div>
          </div>
          <div>
            <div className="tittle">Feature</div>
            <div>
              {" "}
              <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>{" "}
            </div>
          </div>
          <div>
            <div className="tittle">Feature</div>
            <div>
              {" "}
              <ul>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
              </ul>{" "}
            </div>
          </div>
        </div>
        <div className="social-media">
          <img src={fb} alt="" />
          <img src={tw} alt="" />
          <img src={pin} alt="" />
          <img src={insta} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
