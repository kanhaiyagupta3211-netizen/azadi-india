
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section
        id="journey"
        className="flex min-h-[50vh] items-center justify-center bg-[#080808] px-6"
      >
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">
            Coming next
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            The Road to Freedom
          </h2>
        </div>
      </section>
    </main>
  );
}

export default App;

