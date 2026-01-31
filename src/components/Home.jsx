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
          delay: 0.1,
          type: "spring",
        }}
        className="flex text-sm max-w-lg text-white font-general font-light"
      >
        Hi! I'm Jess
      </motion.p>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.1,
          type: "spring",
        }}
        className="title"
      >
        <span>Tech for</span>
        <div class="message">
          <div class="word1">education</div>
          <div class="word2">healthcare</div>
          <div class="word3">community</div>
          <div class="word4">inclusion</div>
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
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Jessie5509"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-[url('./assets/img/github_light.svg')] bg-no-repeat bg-center bg-contain
               focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
          >
            <span className="sr-only">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/jess-nu/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-[url('./assets/img/linkedin.svg')] bg-no-repeat bg-center bg-contain
               focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href="/assets/JessicaNunez.pdf"
            download
            className="px-3 py-1 text-sm font-medium bg-white/10 hover:bg-white/20 rounded-md
               focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
