
import { motion } from "framer-motion";

function FinalTribute() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 py-32 text-center">

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[140px]" />
        <div className="absolute left-1/2 top-[60%] h-80 w-80 -translate-x-1/2 rounded-full bg-green-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl">

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-6xl"
        >
          🇮🇳
        </motion.div>

        <p className="text-xs uppercase tracking-[0.5em] text-white/30">
          15 August 1947
        </p>

        <h2 className="mt-6 text-5xl font-black tracking-tight md:text-8xl">
          FREEDOM
          <br />
          WAS NEVER FREE.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/50">
          Remember the courage, honour the sacrifices, and carry
          the spirit of freedom into the future.
        </p>

        <div className="mx-auto mt-12 h-px max-w-md bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <p className="mt-8 text-sm uppercase tracking-[0.35em] text-white/40">
          Remember • Respect • Build
        </p>

      </div>
    </section>
  );
}

export default FinalTribute;

