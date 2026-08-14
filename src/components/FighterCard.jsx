
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

function FighterCard({ fighter, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
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

          <h3 className="text-2xl font-bold">
            {fighter.name}
          </h3>

          <p className="mt-2 text-sm text-white/40">
            {fighter.role}
          </p>

          <div className="my-6 h-px bg-white/10" />

          <p className="text-sm leading-7 text-white/60">
            {fighter.description}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-7 text-sm font-medium text-white/70 transition hover:text-white"
          >
            Explore story →
          </button>
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#101010] p-8 md:p-10"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-white/50 transition hover:text-white"
                aria-label="Close story"
              >
                <X size={20} />
              </button>

              <p className="text-xs uppercase tracking-[0.3em] text-orange-400">
                {fighter.years}
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                {fighter.name}
              </h2>

              <p className="mt-3 text-white/40">
                {fighter.role}
              </p>

              <div className="my-8 h-px bg-white/10" />

              <h3 className="text-xl font-semibold">
                Their contribution
              </h3>

              <p className="mt-4 leading-8 text-white/60">
                {fighter.description}
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-7 text-white/50">
                  This story section can be expanded with verified
                  historical information, important events and legacy
                  details as the project develops.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FighterCard;

