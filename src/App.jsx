import "./index.scss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  const cardVariants = {
    offscreen: {
      y: 120,
    },
    onscreen: {
      y: 30,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.9,
      },
    },
  };

  return (
    <>
      <div className="bg-[url('./assets/img/clouds.jpg')] w-full h-[250em] bg-cover bg-center relative">
        <div>
          <NavBar />
          <Home />
          <motion.div
            className="section-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div className="section" variants={cardVariants}>
              <About />
            </motion.div>
          </motion.div>
          <motion.div
            className="section-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div className="section" variants={cardVariants}>
              <Experience />
            </motion.div>
          </motion.div>
          <motion.div
            className="section-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div className="section" variants={cardVariants}>
              <Projects />
            </motion.div>
          </motion.div>
          <motion.div
            className="section-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div className="section" variants={cardVariants}>
              <Contact />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="flex items-end">
        <Footer />
      </div>
    </>
  );
}

export default App;
