
import { motion } from "framer-motion";
import { ArrowDown, ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030303] px-6">

      {/* =========================
          TRICOLOR LIGHT FIELD
      ========================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Saffron */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[150px]"
        />

        {/* White */}
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[150px]"
        />

        {/* Green */}
        <motion.div
          animate={{
            x: [0, -100, 40, 0],
            y: [0, 50, -60, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-green-500/20 blur-[150px]"
        />

        {/* Horizontal tricolor atmosphere */}
        <div className="absolute inset-x-0 top-[42%] h-[20%] bg-gradient-to-b from-orange-500/[0.03] via-white/[0.06] to-green-500/[0.03] blur-3xl" />

        {/* Grain */}
        <div className="absolute inset-0 opacity-[0.035] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.7%22/%3E%3C/svg%3E')]" />

      </div>

      {/* =========================
          PARTICLES
      ========================== */}

      <div className="pointer-events-none absolute inset-0">
        {[...Array(28)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/50"
            style={{
              left: `${(index * 31) % 100}%`,
              top: `${(index * 43) % 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: 4 + (index % 4),
              repeat: Infinity,
              delay: index * 0.12,
            }}
          />
        ))}
      </div>

      {/* =========================
          ASHOKA CHAKRA
      ========================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute left-1/2 top-[22%] -translate-x-1/2"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/25"
        >
          <div className="absolute inset-3 rounded-full border border-blue-400/15" />

          <div className="absolute h-3 w-3 rounded-full bg-blue-400/70 shadow-[0_0_25px_rgba(96,165,250,0.7)]" />

          {[...Array(12)].map((_, index) => (
            <span
              key={index}
              className="absolute h-[1px] w-10 bg-blue-400/20"
              style={{
                transform: `rotate(${index * 30}deg)`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* =========================
          HERO CONTENT
      ========================== */}
        

        <div className="relative z-10 mx-auto max-w-6xl translate-y-10 text-center md:translate-y-14">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-5 text-xs uppercase tracking-[0.55em] text-white/45 md:text-sm"
        >
          1857 — 1947
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-7xl font-black tracking-[-0.05em] text-transparent sm:text-8xl md:text-[10rem]"
        >
          AZADI
        </motion.h1>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "180px", opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mx-auto mt-5 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-xl"
        >
          India's journey to freedom — remembering the people,
          movements and moments that shaped a nation.
        </motion.p>

        <motion.a
          href="#journey"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm text-white/80 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
        >
          Begin the journey
          <ArrowDown size={16} />
        </motion.a>
      </div>

      {/* Scroll indicator */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25"
      >
        <ChevronDown size={22} />
      </motion.div>

    </section>
  );
}

export default Hero;

