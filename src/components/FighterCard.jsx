import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

function FighterCard({ fighter, index }) {
  const [open, setOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <>
      {/* ================= FIGHTER CARD ================= */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
      >
        {/* Orange Glow */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl transition duration-500 group-hover:bg-orange-500/20" />

        <div className="relative">

          {/* ================= PHOTO ================= */}
          <div
            className="group/photo relative mb-6 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/40"
            onClick={() => fighter.image && setImageOpen(true)}
          >
            <div className="flex min-h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500/10 via-white/[0.03] to-green-500/10">

              {fighter.image ? (
                <img
                  src={fighter.image}
                  alt={fighter.name}
                  loading="lazy"
                  className="max-h-[380px] w-full object-contain transition duration-700 group-hover/photo:scale-[1.03]"
                />
              ) : (
                <span className="text-xs uppercase tracking-[0.3em] text-white/20">
                  Historical Portrait
                </span>
              )}

            </div>

            {/* Image Overlay */}
            {fighter.image && (
              <>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md transition group-hover/photo:bg-black/70">
                  Click to view
                </div>
              </>
            )}
          </div>

          {/* ================= NUMBER + ARROW ================= */}
          <div className="mb-8 flex items-start justify-between">
            <span className="text-sm tracking-widest text-white/30">
              {String(index + 1).padStart(2, "0")}
            </span>

            <ArrowUpRight
              size={20}
              className="text-white/30 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
            />
          </div>

          {/* ================= YEARS ================= */}
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-orange-400">
            {fighter.years}
          </p>

          {/* ================= NAME ================= */}
          <h3 className="text-2xl font-bold">
            {fighter.name}
          </h3>

          {/* ================= ROLE ================= */}
          <p className="mt-2 text-sm text-white/40">
            {fighter.role}
          </p>

          {/* Divider */}
          <div className="my-6 h-px bg-white/10" />

          {/* ================= DESCRIPTION ================= */}
          <p className="text-sm leading-7 text-white/60">
            {fighter.description}
          </p>

          {/* ================= STORY BUTTON ================= */}
          <button
            onClick={() => setOpen(true)}
            className="mt-7 text-sm font-medium text-white/70 transition hover:text-white"
          >
            Explore story →
          </button>
        </div>
      </motion.article>

      {/* ===================================================== */}
      {/*                  FULL IMAGE MODAL                     */}
      {/* ===================================================== */}

      <AnimatePresence>
        {imageOpen && fighter.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setImageOpen(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            {/* Full Image */}
            <motion.img
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              src={fighter.image}
              alt={fighter.name}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
            />

            {/* Close Button */}
            <button
              onClick={() => setImageOpen(false)}
              className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/50 p-3 text-white/70 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
              aria-label="Close image"
            >
              <X size={22} />
            </button>

            {/* Image Name */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-5 py-2 text-sm text-white/70 backdrop-blur-md">
              {fighter.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================== */}
      {/*                    STORY MODAL                        */}
      {/* ===================================================== */}

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

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
                aria-label="Close story"
              >
                <X size={20} />
              </button>

              {/* Modal Photo */}
              {fighter.image && (
                <div className="mb-8 flex max-h-80 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <img
                    src={fighter.image}
                    alt={fighter.name}
                    className="max-h-80 w-full object-contain"
                  />
                </div>
              )}

              {/* Years */}
              <p className="text-xs uppercase tracking-[0.3em] text-orange-400">
                {fighter.years}
              </p>

              {/* Name */}
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                {fighter.name}
              </h2>

              {/* Role */}
              <p className="mt-3 text-white/40">
                {fighter.role}
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Contribution */}
              <h3 className="text-xl font-semibold">
                Their contribution
              </h3>

              <p className="mt-4 leading-8 text-white/60">
                {fighter.description}
              </p>

              {/* Closing note */}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-7 text-white/40">
                  Their contribution remains an important part of India's
                  journey towards independence and continues to be remembered
                  by generations.
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