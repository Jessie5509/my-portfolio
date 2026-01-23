import React from "react";
import "./index.scss";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  const cardVariants = {
    offscreen: {
      y: 1500,
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
      <div className="main-container bg-[url('./assets/img/neon-light.jpg')] w-full h-[150em] bg-cover relative">
        <div className="absolute left-[12.5%] w-3/4">
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
