import { motion } from "framer-motion";
import FighterCard from "./FighterCard";
import { freedomFighters } from "../data/fighters";

function FreedomFighters() {
  return (
    <section
      id="heroes"
      className="relative overflow-hidden bg-[#050505] px-6 py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

        <div className="absolute right-[-15%] top-[20%] h-96 w-96 rounded-full bg-orange-500/[0.06] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-orange-400">
            The people behind the story
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            The Heroes of
            <span className="text-white/40"> Freedom</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            Their paths were different, but their determination shaped
            India's journey towards independence.
          </p>
        </motion.div>

        {/* Fighter Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {freedomFighters.map((fighter, index) => (
            <FighterCard
              key={fighter.id}
              fighter={fighter}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FreedomFighters;