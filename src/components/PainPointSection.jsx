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
                <p className="painpoint__text painpoint__anim painpoint__anim--1">
                    If you have a factory, then you know how it feels, right?
                </p>

                <p className="painpoint__text painpoint__anim painpoint__anim--2">
                    The plan looked fine yesterday. Today, dates have moved.<br />
                    Someone adjusted something.
                </p>

                <p className="painpoint__text painpoint__anim painpoint__anim--3">
                    And now you're losing your mind!
                </p>

                <p className="painpoint__highlight painpoint__anim painpoint__anim--4">
                    But with vNiryat by your side, you don't have to worry.<br />
                    <span className="painpoint__highlight-sub">
                        We are here to stop this never-ending cycle.
                    </span>
                </p>

                <div className="painpoint__details painpoint__anim painpoint__anim--5">
                    <p>We lock plans in place. We surface risks early.</p>
                    <p>
                        And we give you a steady view of what's really happening.<br />
                        Factories across India, Bangladesh, Vietnam, and China trust<br />
                        us to turn chaos into rhythm!
                    </p>
                </div>

                <a href="#demo" className="painpoint__cta painpoint__anim painpoint__anim--6">
                    See how vNiryat creates control.
                </a>
            </div>
        </section>
    );
}

export default PainPointSection;
