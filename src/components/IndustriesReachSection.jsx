import { useEffect, useRef } from 'react';
import './IndustriesReachSection.css';
import MovingDots from './MovingDots';

const countries = [
    {
        name: "INDIA",
        image: "https://images.unsplash.com/photo-1565514020176-db793617a7dc?auto=format&fit=crop&q=80&w=600",
        flagCode: "in"
    },
    {
        name: "BANGLADESH",
        image: "https://images.unsplash.com/photo-1605218427368-35b8612808c4?auto=format&fit=crop&q=80&w=600",
        flagCode: "bd"
    },
    {
        name: "VIETNAM",
        image: "https://images.unsplash.com/photo-1595844884214-72b9474704b2?auto=format&fit=crop&q=80&w=600",
        flagCode: "vn"
    },
    {
        name: "CHINA",
        image: "", // Removed image as requested
        flagCode: "cn"
    }
];

function IndustriesReachSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reach-visible');
                } else {
                    entry.target.classList.remove('reach-visible');
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Duplicate list for infinite scroll
    const marqueeList = [...countries, ...countries, ...countries];

    return (
        <section className="reach" ref={sectionRef}>
            <MovingDots />
            <div className="reach__container">
                <div className="reach__header">
                    <h2 className="reach__title">
                        Industries <span className="reach__title-highlight">& Reach</span>
                    </h2>
                    <h3 className="reach__subtitle">Built for Garments. Ready for Wider Manufacturing.</h3>
                    <p className="reach__description">
                        We built vNiryat for garment exporters like you, working under constant deadline pressure and
                        buyer expectations. Today, the same planning engine is expanding into other manufacturing
                        sectors wherever small planning errors create large financial losses. You'll find vNiryat
                        supporting factories across: India – Bangladesh – Vietnam – China
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="reach__marquee-wrapper">
                    <div className="reach__marquee">
                        {marqueeList.map((country, index) => (
                            <div className="reach__card" key={index}>
                                <div
                                    className="reach__card-bg"
                                    style={{ backgroundImage: `url(${country.image})` }}
                                ></div>
                                <div className="reach__card-overlay"></div>
                                <div
                                    className="reach__card-flag"
                                    style={{ backgroundImage: `url(https://flagcdn.com/w640/${country.flagCode}.png)` }}
                                ></div>
                                <h4 className="reach__card-title">{country.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IndustriesReachSection;
