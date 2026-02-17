import { useEffect, useRef } from 'react';
import './ROISection.css';
import MovingDots from './MovingDots';

function ROISection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('roi-visible');
                } else {
                    entry.target.classList.remove('roi-visible');
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
        <section className="roi" ref={sectionRef}>
            {/* Moving dots for subtle background effect, checking if it conflicts with gradient */}
            {/* <MovingDots />  -- Keeping it for now, can remove if too busy */}

            <div className="roi__container">
                <div className="roi__header">
                    <h2 className="roi__title">
                        ROI & <span className="roi__title-highlight">Economic Advantage</span>
                    </h2>
                    <h3 className="roi__subtitle">Serious Control Without Crore-Level Costs</h3>
                    <p className="roi__description">
                        Traditional garment ERPs are expensive, slow to implement, and take years to show results.
                    </p>

                    <p className="roi__intro-text">With vNiryat, you get:</p>
                </div>

                <div className="roi__actions">
                    <div className="roi__btn">Faster Implementation</div>
                    <div className="roi__btn">Lower Upfront Investment</div>
                    <div className="roi__btn">ROI within 6–12 Months</div>
                </div>

                <div className="roi__footer">
                    <p>
                        This makes advanced planning and control practical for mid-to-large factories — without locking up capital.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ROISection;
