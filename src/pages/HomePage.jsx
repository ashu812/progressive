import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import PainPointSection from '../components/PainPointSection';
import DifferenceSection from '../components/DifferenceSection';
import EaseOfUseSection from '../components/EaseOfUseSection';
import BusinessImpactSection from '../components/BusinessImpactSection';
import IndustriesReachSection from '../components/IndustriesReachSection';
import FeatureIntroSection from '../components/FeatureIntroSection';
import PhilosophySection from '../components/PhilosophySection';
import HowItWorksSection from '../components/HowItWorksSection';
import KeyModulesSection from '../components/KeyModulesSection';
import ControlsSection from '../components/ControlsSection';
import ROISection from '../components/ROISection';
import CTASection from '../components/CTASection';
import BookDemoModal from '../components/BookDemoModal';

function HomePage() {
    const [isDemoOpen, setIsDemoOpen] = useState(false);

    const openDemo = () => setIsDemoOpen(true);
    const closeDemo = () => setIsDemoOpen(false);

    return (
        <>
            <HeroSection onBookDemo={openDemo} />
            <PainPointSection />
            <DifferenceSection />
            <EaseOfUseSection />
            <BusinessImpactSection />
            <IndustriesReachSection />
            <FeatureIntroSection />
            <PhilosophySection />
            <HowItWorksSection />
            <KeyModulesSection />
            <ControlsSection />
            <ROISection />
            <CTASection onBookDemo={openDemo} />

            <BookDemoModal isOpen={isDemoOpen} onClose={closeDemo} />
        </>
    );
}

export default HomePage;
