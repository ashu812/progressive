import { useEffect, useState, useRef } from 'react';
import './HeroSection.css';
const heroBg = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop';

function HeroSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`hero ${isVisible ? 'hero--visible' : ''}`}
            id="home"
            ref={sectionRef}
        >
            <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }}></div>
            <div className="hero__overlay"></div>

            <div className="hero__content">
                <div className="hero__badge hero__anim hero__anim--1">
                    Deliver Like You Promised. Every Single Time!
                </div>
                <h1 className="hero__title hero__anim hero__anim--2">
                    The Future of <br />
                    <span className="hero__gradient-text">Manufacturing Control</span>
                </h1>
                <p className="hero__subtitle hero__anim hero__anim--3">
                    Stop fighting fires. Start orchestrating your factory.<br />
                    Clear plans. Steady execution. Zero surprises.
                </p>
                <div className="hero__actions hero__anim hero__anim--4">
                    <a href="#demo" className="hero__cta">
                        Book A Demo
                    </a>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span className="scroll-text">Scroll to explore</span>
            </div>
        </section>
    );
}

export default HeroSection;
