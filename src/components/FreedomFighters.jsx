
import { motion } from "framer-motion";
import FighterCard from "./FighterCard";
import { freedomFighters } from "../data/fighters";

function FreedomFighters() {
  return (
    <section
      id="heroes"
      className="relative overflow-hidden bg-[#080808] px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

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

