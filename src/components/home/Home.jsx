import benjilo from "../images/benjilo.jpg";
import Services_Data from "../../Data/Data";
import "./Home.css";
import myWorksData from "../../Data/MyProjects";
import { Link } from "react-router-dom";
import ContactUs from "../contact Us/ContactUs";

function Home() {
  const styles = {
    container: {
      background: "linear-gradient(270deg, #df8908 10%, #b415ff 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };

  return (
    <>
      <div className="hero">
        <img className="img" src={benjilo} alt="" />
        <h2>
          Am Benjamin Dartey a Frontend dev based in Ghana with 2 years of
          experience in Frontend development
        </h2>
        <div className="hero-action">
          <div className="hero-connect">
            <a
              style={{ textDecoration: "none", color: "white" }}
              className="anchor-link"
              href=""
            >
              Connect with me
            </a>
          </div>
          {/* <Link className="hero-resume" to="/my-resume" target="_blank">
          My Resume
        </Link> */}
        </div>
      </div>
      <div className="about">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={benjilo} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p style={{ fontSize: "18px" }}>
                {" "}
                A skilled and experienced Information Technology professional
                with expertise in using HTML, CSS, Bootstrap 5, JavaScript and
                React js to develop high-quality websites.{" "}
              </p>
              <p style={{ fontSize: "18px" }}>
                Proficient in frontend development technologies, with a proven
                track record of delivering high-quality projects on time
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML&CSS</p>
                <hr style={{ width: "90%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>React Js</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Wordpress</p>
                <hr style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>2+</h1>
            <p>CLIENTS</p>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="services">
        <div className="services-title">
          <h1>My Services</h1>
        </div>
        <div className="services-container">
          {Services_Data.map((service, index) => {
            return (
              <div key={index} className="services-format">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services readmore">
                  <Link style={{ textDecoration: "none" }} to="/cvpage">
                    <p>Read More &rarr;</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Myprojects */}
      <div id="myprojects" className="mywork">
        <div className="mywork-title">
          <h1>My Projects</h1>
        </div>
        <div className="mywork-container">
          {myWorksData.map((work, index) => (
            <Link
              to={`/myproject/${work.id}`}
              key={index}
              className="work-link" // Add custom styles to make the entire block clickable
            >
              <div className="work-item">
                <img className="image" src={work.w_img} alt={work.w_name} />
                <h1 style={{ textDecoration: "none" }}>{work.w_name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Us */}
      <ContactUs />
    </>
  );
}

export default Home;
