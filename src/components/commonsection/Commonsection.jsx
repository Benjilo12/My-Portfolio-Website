import { Container } from "react-bootstrap";
import "./commonsection.css";
function Commonsection({ title }) {
  return (
    <section className="common_section">
      <Container className="text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
}

export default Commonsection;
