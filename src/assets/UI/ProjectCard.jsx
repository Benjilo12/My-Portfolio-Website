import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProjectCard.css";

function ProjectCard({ item, index }) {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS when component updates
  }, []);

  return (
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-delay={index * 100} // Stagger animation based on index
      data-aos-duration="800"
    >
      <Link style={{ textDecoration: "none" }} to={`/myproject/${item.id}`}>
        <img
          src={item.w_img}
          alt="project-image"
          className="project-image"
          data-aos="zoom-in"
          data-aos-delay={index * 100 + 200}
          data-aos-duration="600"
        />
        <div className="project-meta">
          <h3
            className="project-title"
            data-aos="fade-right"
            data-aos-delay={index * 100 + 300}
          >
            {item.w_name}
          </h3>
          <p
            className="project-description"
            data-aos="fade-right"
            data-aos-delay={index * 100 + 400}
          >
            {item.shortDesc}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
