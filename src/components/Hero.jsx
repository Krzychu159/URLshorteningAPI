import image from "../assets/illustration-working.svg";
import "./Hero.scss";

function Hero() {
  return (
    <main>
      <div className="left">
        <div className="tittle">More than just shorter links</div>
        <div className="text">
          {" "}
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </div>
        <button>Get started</button>
      </div>
      <div className="right">
        <img src={image} alt="working person" />
      </div>
    </main>
  );
}

export default Hero;
