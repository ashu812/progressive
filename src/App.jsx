import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PainPointSection from './components/PainPointSection';
import DifferenceSection from './components/DifferenceSection';
import EaseOfUseSection from './components/EaseOfUseSection';
import BusinessImpactSection from './components/BusinessImpactSection';
import IndustriesReachSection from './components/IndustriesReachSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <PainPointSection />
      <DifferenceSection />
      <EaseOfUseSection />
      <BusinessImpactSection />
      <IndustriesReachSection />
    </div>
  );
}

export default App;
