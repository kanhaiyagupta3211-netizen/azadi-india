
import { motion } from "framer-motion";
import { movements } from "../data/movements";

function Movements() {
  return (
    <section
      id="movements"
      className="bg-[#080808] px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-green-400">
            Collective resistance
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Movements That
            <span className="text-white/40"> Changed History</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {movements.map((movement, index) => (
            <motion.article
              key={movement.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.015 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <span className="text-5xl font-black text-white/10">
                {movement.year}
              </span>

              <h3 className="mt-5 text-2xl font-bold">
                {movement.title}
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                {movement.description}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Movements;

