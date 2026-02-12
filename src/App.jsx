import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PainPointSection from './components/PainPointSection';
import DifferenceSection from './components/DifferenceSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <PainPointSection />
      <DifferenceSection />
    </div>
  );
}

export default App;
