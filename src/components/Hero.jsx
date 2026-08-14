
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">
      
      {/* Tricolor ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/20 blur-[120px]" />

        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-white/10 blur-[120px]" />

        <div className="absolute right-1/3 bottom-1/4 h-72 w-72 rounded-full bg-green-500/20 blur-[120px]" />
      </div>

      {/* Animated particles */}
      {[...Array(18)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          style={{
            left: `${5 + ((index * 17) % 90)}%`,
            top: `${10 + ((index * 23) % 80)}%`,
          }}
          animate={{
            y: [-10, 20, -10],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + (index % 3),
            repeat: Infinity,
            delay: index * 0.15,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 text-5xl md:text-7xl"
        >
          🇮🇳
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-5 text-sm uppercase tracking-[0.45em] text-white/50"
        >
          1857 — 1947
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-6xl font-black tracking-tight text-transparent sm:text-7xl md:text-9xl"
        >
          AZADI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          India's journey to freedom — remembering the people,
          movements and moments that shaped a nation.
        </motion.p>

        <motion.a
          href="#journey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white transition hover:bg-white/10"
        >
          Explore the journey
          <ArrowDown size={16} />
        </motion.a>
      </div>

      <div className="absolute bottom-8 left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-white/40 to-transparent" />
    </section>
  );
}

export default Hero;

