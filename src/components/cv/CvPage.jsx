import "./cvpage.css";
import Commonsection from "../commonsection/Commonsection";
import { motion } from "framer-motion";
import Helmet from "../helmet/Helmet";

function CvPage() {
  return (
    <>
      <Helmet title="Cv">
        <Commonsection title="Download Cv" />
        <div className="cv">
          <h1>Download my CV to know more about me</h1>
          <motion.a
            href="/cv.pdf"
            download="My_CV.pdf"
            className="cvlink"
            whileTap={{ scale: 1.2 }}
          >
            Download My CV
          </motion.a>
        </div>
      </Helmet>
    </>
  );
}

export default CvPage;
