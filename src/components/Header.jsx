import logo from "../assets/logo.svg";
import "./Header.scss";

function Header() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
  };

  return (
    <header>
      <div className="left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>

        <div className="menu">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
      </div>

      <div className="buttons">
        <button className="login">Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
