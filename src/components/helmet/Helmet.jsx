import PropTypes from "prop-types";
import { useEffect } from "react";

function Helmet({ title, children }) {
  useEffect(() => {
    // Update the document title
    document.title = `Portfolio - | ${title}`;
  }, [title]); // Run the effect whenever the title changes

  return <div className="w-100">{children}</div>;
}

Helmet.propTypes = {
  title: PropTypes.string.isRequired, // Ensures title is a string and required
  children: PropTypes.node, // Ensures children can be any renderable node
};

export default Helmet;
