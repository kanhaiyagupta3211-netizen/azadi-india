
import { motion } from "framer-motion";
import { timelineEvents } from "../data/timeline";

function Timeline() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#050505] px-6 py-32"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-20 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-green-400">
            The journey
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            The Road to Freedom
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/50">
            A timeline of important moments that shaped India's
            struggle for independence.
          </p>
        </div>

        <div className="relative">
          
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-orange-400 via-white/20 to-green-400 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}
                  transition={{ duration: 0.7 }}
                  className={`relative flex ${
                    isLeft
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[9px] top-2 h-3 w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] md:left-1/2 md:-translate-x-1/2" />

                  <div className="ml-10 w-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:ml-0 md:w-[43%]">
                    <span className="text-3xl font-black text-white/20">
                      {event.year}
                    </span>

                    <h3 className="mt-3 text-xl font-bold">
                      {event.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Timeline;

