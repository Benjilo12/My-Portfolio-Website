import benjilo from "../images/benjilo.jpg";
import Services_Data from "../../Data/Data";
import "./Home.css";
import myWorksData from "../../Data/MyProjects";
import { Link } from "react-router-dom";
import ContactUs from "../contact Us/ContactUs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

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
        <img className="img" src={benjilo} alt="Benjamin Dartey" />
        <h2>
          I am Benjamin Dartey, a Frontend Developer based in Ghana with 2 years
          of experience in Frontend development.
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
        </div>
      </div>
      <div className="about">
        <div className="about-title">
          <h1>About Me</h1>
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={benjilo} alt="Benjamin Dartey" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p style={{ fontSize: "18px" }}>
                I am a skilled and experienced Information Technology
                professional with expertise in using HTML, CSS, Bootstrap 5,
                JavaScript, and React.js to develop high-quality websites. I
                have a proven track record of delivering projects on time.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
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
                <p>WordPress</p>
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

      {/* Services */}
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
                <div className="services-readmore">
                  <Link style={{ textDecoration: "none" }} to="/cvpage">
                    <p>Read More &rarr;</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* My Projects */}
      <div id="myprojects" className="mywork">
        <div className="mywork-title">
          <h1>My Projects</h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {myWorksData.map((work, index) => (
            <SwiperSlide key={index}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/myproject/${work.id}`}
                className="work-link"
              >
                <div className="work-item">
                  <img className="image" src={work.w_img} alt={work.w_name} />
                  <h1>{work.w_name}</h1>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contact Us */}
      <ContactUs />
    </>
  );
}

export default Home;
