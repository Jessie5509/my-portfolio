import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section className="flex justify-center h-[80vh] flex-col items-center">
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.2,
          type: "spring",
        }}
        className="flex justify-center text-6xl max-w-lg text-white font-general font-light"
      >
        Hi! I'm Jess a Full Stack Developer
      </motion.p>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.2,
          type: "spring",
        }}
        className="title"
      >
        <span>Tech for</span>
        <div class="message">
          <div class="word1">education</div>
          <div class="word2">medicine</div>
          <div class="word3">community</div>
          <div class="word4">world</div>
        </div>
      </motion.h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.2,
          type: "spring",
        }}
        className="flex flex-row items-center"
      >
        <a href="#" className="bg-[url('./assets/img/github_icon.svg')] bg-cover w-12 h-12"></a>
        <a href="#" className="bg-[url('./assets/img/linkedin.svg')] bg-cover w-8 h-8"></a>
      </motion.div>
    </section>
  );
};

export default Home;
