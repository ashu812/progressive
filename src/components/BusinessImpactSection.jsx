import { useEffect, useRef, useState } from 'react';
import './BusinessImpactSection.css';
import { PackageX, HandCoins, ShieldAlert, CalendarOff, Truck } from 'lucide-react';
import MovingDots from './MovingDots';

const impacts = [
    {
        icon: <PackageX size={40} />,
        text: "Reduce shipment delays"
    },
    {
        icon: <HandCoins size={40} />,
        text: "Lower inventory carrying costs"
    },
    {
        icon: <ShieldAlert size={40} />,
        text: "Cut down quality reworks and rejections"
    },
    {
        icon: <CalendarOff size={40} />,
        text: "Stop depending on individual planners"
    },
    {
        icon: <Truck size={40} />,
        text: "Improve on-time delivery and buyer confidence"
    }
];

function BusinessImpactSection() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1); // Start with 2nd item highlighted as per original design

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % impacts.length);
        }, 2000); // 2 second interval

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('impact-visible');
                } else {
                    entry.target.classList.remove('impact-visible');
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
        <section className="impact" ref={sectionRef}>
            <MovingDots />
            <div className="impact__container">
                <div className="impact__header">
                    <h2 className="impact__title">Business Impact</h2>
                    <h3 className="impact__subtitle">Control that shows upon your balance sheet</h3>
                    <p className="impact__description">
                        When you bring discipline into planning, the results are visible. With vNiryat, you can:
                    </p>
                </div>

                <div className="impact__grid">
                    {impacts.map((item, index) => (
                        <div
                            key={index}
                            className={`impact__card ${index === activeIndex ? 'impact__card--highlight' : ''}`}
                        >
                            <div className="impact__icon">
                                {item.icon}
                            </div>
                            <p className="impact__text">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="impact__footer">
                    <p>
                        Because implementation costs are far lower than traditional ERPs,
                        you don't wait years to see results. <br />
                        <strong>Most factories recover their investment within 6–12 months.</strong><br />
                        This isn't controlled on paper. It's a control you can measure.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default BusinessImpactSection;
