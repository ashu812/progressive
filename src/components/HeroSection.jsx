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
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="hero__overlay"></div>
            <div className="hero__content">
                <p className="hero__subtitle hero__anim hero__anim--1">
                    This is exactly what modern-day<br />
                    manufacturing looks like.
                </p>
                <p className="hero__subtitle hero__anim hero__anim--2">
                    Clear plans, Steady execution. No surprises....
                </p>
                <p className="hero__tagline hero__anim hero__anim--3">
                    Deliver Like You Promised. Every Single Time.
                </p>
                <h1 className="hero__title hero__anim hero__anim--4">
                    See the Future of<br />
                    Planning for Yourself!
                </h1>
                <a href="#demo" className="hero__cta hero__anim hero__anim--5">
                    Book A Demo Now!
                </a>
            </div>
        </section>
    );
}

export default HeroSection;
