import { useEffect, useRef } from 'react';
import MovingDots from './MovingDots';
import './PainPointSection.css';

function PainPointSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('painpoint--visible');
                    } else {
                        entry.target.classList.remove('painpoint--visible');
                    }
                });
            },
            { threshold: 0.05 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="painpoint" ref={sectionRef}>
            <MovingDots />

            <div className="painpoint__content">
                <div className="painpoint__card-wrapper painpoint__card-wrapper--1 painpoint__anim">
                    <div className="painpoint__card">
                        <div className="painpoint__icon">🏭</div>
                        <h3>The Reality</h3>
                        <p>
                            "If you have a factory, you know the feeling.<br />
                            The plan looked fine yesterday. Today, dates have moved.<br />
                            <strong>Someone adjusted something.</strong>"
                        </p>
                    </div>
                </div>

                {/* Card 2: The Breaking Point (Right) */}
                <div className="painpoint__card-wrapper painpoint__card-wrapper--2 painpoint__anim">
                    <div className="painpoint__card">
                        <div className="painpoint__icon">🤯</div>
                        <h3>The Chaos</h3>
                        <p>
                            "Materials are delayed. Shipments are at risk.<br />
                            And now you're losing your mind trying to fix it!"
                        </p>
                    </div>
                </div>

                {/* Card 3: The Solution (Center) */}
                <div className="painpoint__card-wrapper painpoint__card-wrapper--3 painpoint__anim">
                    <div className="painpoint__card">
                        <div className="painpoint__icon">✨</div>
                        <h3>The vNiryat Way</h3>
                        <p className="painpoint__highlight">
                            We stop this never-ending cycle.
                        </p>
                        <div className="painpoint__details">
                            <p>
                                We lock plans in place. We surface risks early.<br />
                                And we give you a steady view of what's really happening.
                            </p>
                        </div>
                        <a
                            href="#ai-erp"
                            className="painpoint__cta"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('ai-erp')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            See how vNiryat creates control
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PainPointSection;
