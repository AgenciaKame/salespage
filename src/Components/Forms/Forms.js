import "./Forms.css";
import modalStyleOne from '../../Assets/modal-li-one.png'
import modalStyleTwo from '../../Assets/modal-li-two.png'
import modalStyleThree from '../../Assets/modal-li-three.png'

const Forms = () => {
  return (
    <div className="form-component" id="contact">
      <div className="questions-title">
        <h2>Do you have any questions?</h2>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="name">Full name*</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="number" />
        </div>
        <div className="form-message">
          <label htmlFor="message">Message</label>
          <input type="textarea" />
        </div>
        <div className="divButton">
          <button>Send message</button>
        </div>
        <ul className="data-list">
          <li>
            <div>
              <img src={modalStyleOne} alt="icon" />
            </div>
            <p>sample@kameagencia.com</p>
          </li>
          <li>
            <div>
              <img src={modalStyleTwo} alt="icon" />
            </div>
            <p>Gurruchaga 88, Bs As.</p>
          </li>
          <li>
            <div>
              <img src={modalStyleThree} alt="icon" />
            </div>
            <p>+54 (11) 21589933</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Forms;
