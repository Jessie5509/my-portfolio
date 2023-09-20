import React from 'react';
import './index.scss';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer';
import { motion } from "framer-motion";

function App() {

  const cardVariants = {
    offscreen: {
      x: 1800
    },
    onscreen: {
      x: 25,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <><div className="main-container bg-[url('./assets/img/neon-light.jpg')] w-full h-[85rem] bg-cover relative">
      <div className="absolute left-[12.5%] w-3/4">
        <section className="my-4 text-white text-3xl">
          JN
        </section>
        <Home />
        <motion.div
          className="section-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div className="section" variants={cardVariants}>
            <About />
          </motion.div>
        </motion.div>
        <motion.div
          className="section-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div className="section" variants={cardVariants}>
            <Projects />
          </motion.div>
        </motion.div>
      </div>

    </div><div className='flex items-end'>
        <Footer />
      </div></>
  );

}

export default App;
