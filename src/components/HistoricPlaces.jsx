
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { historicPlaces } from "../data/places";

function HistoricPlaces() {
  return (
    <section
      id="places"
      className="bg-[#050505] px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-orange-400">
            Places that remember
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Where History
            <span className="text-white/40"> Happened</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {historicPlaces.map((place, index) => (
            <motion.article
              key={place.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <MapPin size={18} />
              </div>

              <h3 className="text-xl font-bold">
                {place.name}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-wider text-white/30">
                {place.location}
              </p>

              <p className="mt-5 text-sm leading-7 text-white/50">
                {place.description}
              </p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HistoricPlaces;

