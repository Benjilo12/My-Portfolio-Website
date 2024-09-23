import Commonsection from "../commonsection/commonsection";
import myWorksData from "../../Data/MyProjects";
import ProjectList from "../../assets/UI/ProjectList";
import Helmet from "../helmet/Helmet";

function MyProject() {
  return (
    <>
      <Helmet title="Projects">
        <Commonsection title="Projects" />

        <section className="mt-4">
          <>
            {myWorksData.length === 0 ? (
              <h1 className="text-center fs-4">No projects found!</h1>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "40px",
                  flexWrap: "wrap",
                  marginTop: "70px",
                  marginBottom: "100px",
                }}
              >
                <ProjectList data={myWorksData} />
              </div>
            )}
          </>
        </section>
      </Helmet>
    </>
  );
}

export default MyProject;
