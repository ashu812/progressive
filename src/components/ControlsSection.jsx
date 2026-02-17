import React, { useEffect, useRef } from 'react';
import './ControlsSection.css';
import { Check, Settings, Lock } from 'lucide-react';

const ControlsSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="controls-section" ref={sectionRef}>
            <div className="controls-container">
                <div className="controls-content">
                    <h2 className="controls-headline">Controls That Matter</h2>
                    <h3 className="controls-subheadline">Built-In Discipline for Daily Operations</h3>
                    <p className="controls-intro">With vNiryat, control is not optional but built in.</p>

                    <ul className="controls-list">
                        <li className="controls-item">
                            <div className="check-icon"><Check size={20} strokeWidth={3} /></div>
                            <span>Lock dates so schedules can’t be changed quietly</span>
                        </li>
                        <li className="controls-item">
                            <div className="check-icon"><Check size={20} strokeWidth={3} /></div>
                            <span>Use approval gates to protect costing and purchases</span>
                        </li>
                        <li className="controls-item">
                            <div className="check-icon"><Check size={20} strokeWidth={3} /></div>
                            <span>Receive voice alerts when delays occur</span>
                        </li>
                        <li className="controls-item">
                            <div className="check-icon"><Check size={20} strokeWidth={3} /></div>
                            <span>Create visibility across roles and teams</span>
                        </li>
                    </ul>

                    <div className="controls-quote">
                        <div className="quote-bar"></div>
                        <p>
                            These controls don't slow your factory down.<br />
                            They <strong>stop damage before it starts.</strong>
                        </p>
                    </div>
                </div>

                <div className="controls-visual">
                    <div className="gear-lock-composition">
                        <Settings className="gear-icon" strokeWidth={1.5} />
                        <div className="lock-wrapper">
                            <Lock className="lock-icon" strokeWidth={2} />
                        </div>
                        {/* Decorative background pulses */}
                        <div className="visual-pulse pulse-1"></div>
                        <div className="visual-pulse pulse-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ControlsSection;
