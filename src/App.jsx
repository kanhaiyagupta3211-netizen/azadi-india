import ScrollProgress from "./components/ScrollProgress";
import Atmosphere from "./components/Atmosphere";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import FreedomFighters from "./components/FreedomFighters";
import Movements from "./components/Movements";
import HistoricPlaces from "./components/HistoricPlaces";
import Quiz from "./components/Quiz";
import FinalTribute from "./components/FinalTribute";

function App() {
  return (
    <main className="relative overflow-hidden">
      <Atmosphere />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Timeline />
        <FreedomFighters />
        <Movements />
        <HistoricPlaces />
        <Quiz />
        <FinalTribute />
        <ScrollProgress />
      </div>
    </main>
  );
}

export default App;





