import "./Statistics.scss";
import icon1 from "../assets/icon-brand-recognition.svg";

function Statistics() {
  return (
    <section>
      <div className="content">
        <div className="header">
          <div className="tittle">Advanced Statistics</div>
          <div className="text">
            Track how your links are peforming across the web with our advanced
            Statistics dashboard
          </div>
        </div>
        <div className="boxes">
          <div>
            <div className="img">
              <img src={icon1} alt="icon" />
            </div>
            <div className="tittle">Brand Recogniton</div>
            <div className="text">
              {" "}
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </div>
          </div>
          <div>
            <div className="img">
              <img src={icon1} alt="icon" />
            </div>
            <div className="tittle">Brand Recogniton</div>
            <div className="text">
              {" "}
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </div>
          </div>
          <div>
            <div className="img">
              <img src={icon1} alt="icon" />
            </div>
            <div className="tittle">Brand Recogniton</div>
            <div className="text">
              {" "}
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
