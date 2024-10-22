import AboutMeBio from "../components/about/AboutMeBio";
import { motion } from "framer-motion";
import Skills from "../components/about/Skills";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto"
    >
      <AboutMeBio />
      <Skills />
    </motion.div>
  );
};

export default About;
