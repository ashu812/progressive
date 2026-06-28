import { useEffect, useRef } from 'react';
import './IndustriesReachSection.css';
import MovingDots from './MovingDots';

const cities = [
    {
        name: "DELHI",
        image: "/cities/delhi.jpg",
        label: "Capital Hub"
    },
    {
        name: "NOIDA",
        image: "/cities/noida.jpg",
        label: "Manufacturing Zone"
    },
    {
        name: "GURGAON",
        image: "/cities/gurgaon.jpg",
        label: "Business District"
    },
    {
        name: "SURAT",
        image: "/cities/surat.jpg",
        label: "Textile Capital"
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
    const marqueeList = [...cities, ...cities, ...cities];

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
                        sectors wherever small planning errors create large financial losses.
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="reach__marquee-wrapper">
                    <div className="reach__marquee">
                        {marqueeList.map((city, index) => (
                            <div className="reach__card" key={index}>
                                <div
                                    className="reach__card-bg"
                                    style={{ backgroundImage: `url(${city.image})` }}
                                ></div>
                                <div className="reach__card-overlay"></div>
                                <div className="reach__card-pin">
                                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                    </svg>
                                </div>
                                <div className="reach__card-content">
                                    <h4 className="reach__card-title">{city.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IndustriesReachSection;
