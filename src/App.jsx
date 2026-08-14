
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import FreedomFighters from "./components/FreedomFighters";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Timeline />

      <FreedomFighters />

      <section className="flex min-h-[40vh] items-center justify-center bg-[#080808] px-6">
        <h2 className="text-4xl font-bold md:text-6xl">
          More stories coming soon...
        </h2>
      </section>
    </main>
  );
}

export default App;

