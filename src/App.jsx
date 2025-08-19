import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import CvPage from "./components/cv/CvPage";
import MyProject from "./components/myproject/MyProject";
import ProjectDetails from "./components/projectdetails/ProjectDetails";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="myproject" element={<MyProject />} />
          <Route path="myproject/:id" element={<ProjectDetails />} />
          <Route path="cvpage" element={<CvPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
