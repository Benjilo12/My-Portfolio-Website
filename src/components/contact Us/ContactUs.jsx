import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./contact.css";

function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1f08eceb-4cf3-4574-8bfe-2ad7547e06f0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take new projects, so feel to send me a
            message
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />{" "}
              <p>benjamindarteyy@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />{" "}
              <p>Pokuase Amasaman</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon className="icon" icon={faPhone} />{" "}
              <p>+233506472535</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" id="" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="" id="" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            id=""
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
