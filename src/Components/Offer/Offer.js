import "./Offer.css";
import listStyle from '../../Assets/list-style-modules.png'
import Slider from "react-slick";
import { offers } from "../../Data/Data";

const Offer = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
        },
      },
    ],
  };
  return (
    <div className="offers">
      <div className="offers-title">
        <h2>Ready to do this? I know you are!</h2>
        <h3>CANNOT WAIT FOR YOU TO JOIN US!</h3>
      </div>
      <div className="offer-slider">
        <Slider {...settings}>
          {
            offers.map((offer, idx) => {
              return <div className={`offer-${idx}`} key={idx}>
                <h2 className="offer-title">{offer.title}</h2>
                <div className="for-sale">
                    <h3>{offer.forSale}</h3>
                    {
                      offer.discount !== null ? (
                        <p>{offer.discount}</p>
                      ) : null
                    }
                </div>
                <div className="price">
                    <h2>${offer.price} </h2>
                    {
                      offer.financial === true ? (
                        <span> /Per Month</span>
                      ) : null
                    }
                </div>
                <ul className="offer-ul">
                    <li>
                        <img src={listStyle} alt="icon" />
                        <p>Valid date 25/05/2022</p>
                    </li>
                    <li>
                        <img src={listStyle} alt="icon" />
                        <p>Credit card, paypal</p>
                    </li>
                    <li>
                        <img src={listStyle} alt="icon" />
                        <p>Service and benefit 3.</p>
                    </li>
                </ul>
                <button className="offer-btn"> 
                    Enroll now
                </button>
              </div>
            })
          }          
        </Slider>
      </div>
    </div>
  );
};

export default Offer;
