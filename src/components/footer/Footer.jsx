import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            {" "}
            I am a Frontend dev based in Ghana with 2years of experience in
            Frontend development
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-buttom">
        <p className="footer-bottom-left">
          @ 2023 Benjamin Dartey. All right reserved
        </p>
        <div className="footer-bottom">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
