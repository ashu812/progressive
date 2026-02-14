import './DifferenceSection.css';
import { Factory, CalendarClock, MapPin, Layers, ShieldCheck, FileBarChart } from 'lucide-react';
import MovingDots from './MovingDots';
import { useEffect, useRef } from 'react';

const features = [
    {
        icon: <Factory size={32} />,
        text: "Designed specifically for export manufacturing"
    },
    {
        icon: <CalendarClock size={32} />,
        text: "Automated planning with date locking"
    },
    {
        icon: <MapPin size={32} />,
        text: "Real-time milestone tracking with accountability"
    },
    {
        icon: <Layers size={32} />,
        text: "Integrated inventory, production, finance, and shipping"
    },
    {
        icon: <ShieldCheck size={32} />,
        text: "Strict approval workflows to protect margins"
    },
    {
        icon: <FileBarChart size={32} />,
        text: "600+ real-time operational and MIS reports"
    }
];

function DifferenceSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('difference--visible');
                } else {
                    entry.target.classList.remove('difference--visible');
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="difference" ref={sectionRef}>
            <MovingDots />
            <h2 className="difference__title">
                What Makes <br />
                <span className="difference__highlight">vNiryat Different?</span>
            </h2>

            <div className="difference__grid">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="difference__card"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="difference__icon-wrapper">
                            {feature.icon}
                        </div>
                        <p className="difference__text">{feature.text}</p>
                    </div>
                ))}
            </div>

            <div className="difference__footer">
                <p>
                    And unlike traditional ERP systems,<br />
                    vNiryat is built to be simple to use, even for non-technical teams.
                </p>
            </div>
        </section>
    );
}

export default DifferenceSection;
