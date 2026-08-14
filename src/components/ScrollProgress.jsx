
import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[200] h-[2px] origin-left bg-gradient-to-r from-orange-400 via-white to-green-400"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;

