import logo from "../assets/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>
      <div>
        <button className="login">Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
