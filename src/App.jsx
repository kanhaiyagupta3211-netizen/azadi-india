
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import FreedomFighters from "./components/FreedomFighters";
import Movements from "./components/Movements";
import HistoricPlaces from "./components/HistoricPlaces";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Timeline />
      <FreedomFighters />
      <Movements />
      <HistoricPlaces />

      <section className="flex min-h-[50vh] items-center justify-center bg-[#080808] px-6 text-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/30">
            More coming soon
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            Remember the sacrifice.
          </h2>
        </div>
      </section>
    </main>
  );
}

export default App;

