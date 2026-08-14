
import { motion } from "framer-motion";

function Atmosphere() {
  const particles = Array.from({ length: 35 });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />

      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -40, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[15%] h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[45%] h-96 w-96 rounded-full bg-green-500/10 blur-[140px]"
      />

      {particles.map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-[2px] w-[2px] rounded-full bg-white/30"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 47) % 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.7, 0.1],
            y: [-10, 15, -10],
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            delay: index * 0.12,
          }}
        />
      ))}
    </div>
  );
}

export default Atmosphere;

