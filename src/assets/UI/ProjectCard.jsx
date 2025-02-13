import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ item }) {
  return (
    <div className="project-card">
      <Link style={{ textDecoration: "none" }} to={`/myproject/${item.id}`}>
        <img src={item.w_img} alt="project-image" className="project-image" />
        <div className="project-meta">
          <h3 className="project-title">{item.w_name}</h3>
          <p className="project-description">{item.shortDesc}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
