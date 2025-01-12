"use client";

import { motion, useSpring, useScroll } from "motion/react";
import AboutContent from "../components/AboutContent";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        className="fixed bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-fuchsia-600 from-10% via-blue-500 via-30% to-orange-600 to-90%"
        style={{
          scaleX,
        }}
      />
      <AboutContent />
    </>
  );
};

export default About;
