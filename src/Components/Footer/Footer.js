import "./Footer.css";
import instagram from '../../Assets/footer-instagram.png'
import facebook from '../../Assets/footer-facebook.png'
import linkedin from '../../Assets/footer-linkedin.png'
import gridMain from '../../Assets/image-net-main.png'
import gridOne from '../../Assets/image-net-one.png'
import gridTwo from '../../Assets/image-net-two.png'
import gridThree from '../../Assets/image-net-three.png'
import gridFour from '../../Assets/image-net-four.png'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h2>Logotipo</h2>
        <ul>
          <li>
            <Link
              activeClass='active'
              to='brand'
              span='true'
              smooth={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='services'
              span='true'
              smooth={true}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              span='true'
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Follow me</h3>
        <div className="networks">
          <ul>
            <li>
              <img src={facebook} alt="icon" />
            </li>
            <li>
              <img src={instagram} alt="icon" />
            </li>
            <li>
              <img src={linkedin} alt="icon" />
            </li>
          </ul>
          <div className="networks-grid">
            <div className="main-image">
              <img src={gridMain} alt="grid" />
            </div>
            <div className="image">
              <img src={gridOne} alt="grid" />
            </div>
            <div className="image">
              <img src={gridTwo} alt="grid" />
            </div>
            <div className="image">
              <img src={gridThree} alt="grid" />
            </div>
            <div className="image">
              <img src={gridFour} alt="grid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
