import myWorksData from "../../Data/MyProjects";
import { useParams } from "react-router-dom";
import Commonsection from "../../components/commonsection/Commonsection";
import "./projectdetails.css";

function ProjectDetails() {
  const { id } = useParams();
  const project = myWorksData.find((item) => item.id === parseInt(id)); // Find the project by ID

  if (!project) {
    return <p>Project not found</p>; // Handle case where project does not exist
  }

  const { w_name, w_img, w_link, description } = project; // Destructure from the found project
  return (
    <section>
      <Commonsection title={w_name} />
      <div className="case">
        <img src={w_img} alt={w_name} className="photo" />
        <div className="text">
          <p>{description}</p>
          <a
            href={w_link}
            target="_blank"
            rel="noopener noreferrer"
            className="links"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
