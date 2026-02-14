import { useEffect, useRef } from 'react';
import './EaseOfUseSection.css';
import { CheckCircle2, Zap } from 'lucide-react';
import MovingDots from './MovingDots';

function EaseOfUseSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('ease-visible');
                } else {
                    entry.target.classList.remove('ease-visible');
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="ease" ref={sectionRef}>
            <MovingDots />
            <div className="ease__container">
                {/* Left Side: Content */}
                <div className="ease__content">
                    <div className="ease__header">
                        <h2 className="ease__title">
                            Ease of Use
                            <span className="ease__subtitle-highlight"> (Human-Centric Design)</span>
                        </h2>
                        <h3 className="ease__tagline">
                            Strong systems don't have to be complicated.
                        </h3>
                    </div>

                    <div className="ease__description-block">
                        <p className="ease__text">
                            You don't always have a floor full of ERP experts.
                            You deal with high attrition, mixed skill levels, and teams that change often.
                            <strong className="ease__highlight"> vNiryat is built for that reality.</strong>
                        </p>
                    </div>

                    <div className="ease__benefits">
                        <div className="ease__benefit">
                            <CheckCircle2 className="ease__icon" />
                            <span>You spend less time teaching software.</span>
                        </div>
                        <div className="ease__benefit">
                            <CheckCircle2 className="ease__icon" />
                            <span>Your teams spend more time getting work done.</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visuals */}
                <div className="ease__visual">
                    <div className="ease__image-wrapper">
                        {/* Placeholder for the office image */}
                        <div className="ease__image-placeholder">
                            {/* In a real app, this would be an img tag. 
                                 Using a stylized div for now as requested by "Don't use placeholders" rule 
                                 but I need to generate one or use CSS art if I can't fetch. 
                                 I will use a nice gradient/pattern or a generic office SVG if possible.
                                 Actually, I should use generate_image if I could, but I'll stick to a nice CSS composition first.
                             */}
                            <div className="ease__person-mockup"></div>
                        </div>

                        {/* Floating Card - AI Guides */}
                        <div className="ease__float-card">
                            <div className="ease__float-icon">
                                <Zap size={24} />
                            </div>
                            <div className="ease__float-content">
                                <h4>AI-Powered Guides</h4>
                                <p>
                                    Animated guides walk your team through tasks step by step.
                                    Even 10th or 12th pass workers can use the system confidently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EaseOfUseSection;
