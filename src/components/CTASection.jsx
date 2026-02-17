import { useRef, useEffect } from 'react';
import './CTASection.css';

const CTASection = ({ onBookDemo }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('cta-visible');
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="cta-section" ref={sectionRef}>
            <div className="cta-overlay"></div>
            <div className="cta-content">
                <h2 className="cta-headline">
                    Get Planning Right.<br />
                    <span>Everything Else Becomes Easier.</span>
                </h2>
                <p className="cta-subtext">
                    When planning is disciplined, operations become predictable.
                </p>

                <button className="cta-button" onClick={onBookDemo}>
                    Request a Demo
                </button>

                <p className="cta-footer-text">
                    See how vNiryat helps you move from daily chaos to execution.
                </p>
            </div>
        </section>
    );
};

export default CTASection;
