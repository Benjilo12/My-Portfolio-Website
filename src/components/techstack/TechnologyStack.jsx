import "./TechnologyStack.css";
import StackIcon from "tech-stack-icons";

const TechnologyStack = () => {
  const technologies = [
    { icon: <StackIcon name="html5" />, name: "HTML5" },
    { icon: <StackIcon name="css3" />, name: "CSS3" },
    { icon: <StackIcon name="js" />, name: "JavaScript" },
    { icon: <StackIcon name="react" />, name: "React" },
    { icon: <StackIcon name="redux" />, name: "redux" },
    { icon: <StackIcon name="materialui" />, name: "Material UI" },
    { icon: <StackIcon name="nextjs" />, name: "Next.js" },
    { icon: <StackIcon name="tailwindcss" />, name: "Tailwind CSS" },
    { icon: <StackIcon name="typescript" />, name: "Typescript" },
    { icon: <StackIcon name="supabase" />, name: "supabase" },
    { icon: <StackIcon name="vercel" />, name: "vercel" },
    { icon: <StackIcon name="firebase" />, name: "firebase" },
    { icon: <StackIcon name="nodejs" />, name: "Node.js" },
    { icon: <StackIcon name="expressjs" />, name: "Expressjs" },
    { icon: <StackIcon name="mongodb" />, name: "MongoDB" },
    { icon: <StackIcon name="git" />, name: "Git" },
    { icon: <StackIcon name="github" />, name: "Github" },
    { icon: <StackIcon name="docker" />, name: "Docker" },
    { icon: <StackIcon name="gsap" />, name: "Gsap" },
    { icon: <StackIcon name="shadcnui" />, name: "Shadcnui" },
  ];

  return (
    <section className="tech-stack">
      <div className="container">
        <div className="tech-header">
          <h2 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
            Technology Stack
          </h2>
          <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Marquee container */}
        <div className="marquee-container">
          <div className="marquee">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <div style={{ width: 30, height: 30 }} className="tech-icon">
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}

            {/* Duplicate for seamless loop */}
            {technologies.map((tech, index) => (
              <div key={`dup-${index}`} className="tech-item">
                <div style={{ width: 30, height: 30 }} className="tech-icon">
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid layout for mobile */}
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <div style={{ width: 20, height: 20 }} className="tech-icon">
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
