
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function FighterCard({ fighter, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition duration-500 group-hover:bg-orange-500/20" />

      <div className="relative">
        <div className="mb-8 flex items-start justify-between">
          <span className="text-sm tracking-widest text-white/30">
            {String(index + 1).padStart(2, "0")}
          </span>

          <ArrowUpRight
            size={20}
            className="text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
          />
        </div>

        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-orange-400">
          {fighter.years}
        </p>

        <h3 className="text-2xl font-bold tracking-tight">
          {fighter.name}
        </h3>

        <p className="mt-2 text-sm text-white/40">
          {fighter.role}
        </p>

        <div className="my-6 h-px bg-white/10" />

        <p className="text-sm leading-7 text-white/60">
          {fighter.description}
        </p>

        <button className="mt-7 text-sm font-medium text-white/70 transition hover:text-white">
          Explore story →
        </button>
      </div>
    </motion.article>
  );
}

export default FighterCard;

