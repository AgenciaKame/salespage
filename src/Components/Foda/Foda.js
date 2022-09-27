import "./Foda.css";
import check from "../../Assets/check.svg";
import error from "../../Assets/times.svg";
import fodaMobile from "../../Assets/foda-bg.png";
import fodaDesktop from "../../Assets/foda-bg-lg.png";

const FodaCard = ({ title, image, mobile }) => {
  const mobile2 = window.innerWidth < 1024 ? true : false
  return (
    <>
      {mobile === true ? <h2>{title}</h2> : null}
      <div className="card-info">
        {mobile === false ? <h2>{title}</h2> : null}
        <ul>
          <li>
            <div>
              <img src={image} alt="list-style" />
            </div>
            {mobile2 === true ? (
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            ) : (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                expedita iste aperiam quis!
              </p>
            )}
          </li>
          <li>
            <div>
              <img src={image} alt="list-style" />
            </div>
            {mobile2 === true ? (
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            ) : (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                expedita iste aperiam quis!
              </p>
            )}
          </li>
          <li>
            <div>
              <img src={image} alt="list-style" />
            </div>
            {mobile2 === true ? (
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            ) : (
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                expedita iste aperiam quis!
              </p>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

const Foda = () => {
  const mobile = window.innerWidth < 768 ? true : false;

  return (
    <div className="foda">
      {mobile === true ? (
        <img src={fodaMobile} alt="bg" />
      ) : (
        <img src={fodaDesktop} alt="bg" />
      )}
      <div className="foda-card">
        <FodaCard title="Esto es para ti si..." image={check} mobile={mobile} />
        <FodaCard
          title="Esto no es para ti si..."
          image={error}
          mobile={mobile}
        />
      </div>
    </div>
  );
};

export default Foda;
