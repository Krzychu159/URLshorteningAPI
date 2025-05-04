import "./Footer.scss";
import { ReactComponent as Logo } from "../assets/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      <div className="menu">
        <div className=""></div>
      </div>
    </footer>
  );
}

export default Footer;
