import { motion } from 'framer-motion';
import {
    Cpu, Eye, CalendarCheck, Bell
} from 'lucide-react';
import './PhilosophySection.css';

const benefits = [
    { icon: <CalendarCheck size={22} />, text: 'Dates stay fixed — no silent changes' },
    { icon: <Eye size={22} />, text: 'Every change is visible and tracked' },
    { icon: <Cpu size={22} />, text: 'Automated, data-driven planning' },
    { icon: <Bell size={22} />, text: 'You don\'t chase updates — the system informs you' },
];

const PhilosophySection = () => {
    return (
        <section className="philosophy">
            <div className="philosophy__bg-grid" />
            <div className="philosophy__orb philosophy__orb--1" />
            <div className="philosophy__orb philosophy__orb--2" />

            <div className="philosophy__container">
                {/* Left: Problem */}
                <div className="philosophy__left">
                    <motion.span
                        className="philosophy__eyebrow"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Our Philosophy
                    </motion.span>
                    <motion.h2
                        className="philosophy__headline"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Stop Depending on People.<br />
                        <span className="philosophy__headline-gradient">Start Depending on Systems.</span>
                    </motion.h2>
                    <motion.div
                        className="philosophy__divider"
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ transformOrigin: 'left' }}
                    />
                    <motion.p
                        className="philosophy__problem"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Right now, your factory probably depends on one or two planners
                        to keep everything together. When planning depends on individuals,
                        plans change quietly and problems show up late.
                    </motion.p>
                </div>

                {/* Right: Solution Card */}
                <motion.div
                    className="philosophy__right"
                    initial={{ opacity: 0, x: 80, scale: 0.92 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="philosophy__solution-card">
                        <div className="philosophy__solution-glow" />
                        <h3 className="philosophy__solution-title">
                            vNiryat changes this.
                        </h3>
                        <ul className="philosophy__benefits">
                            {benefits.map((b, i) => (
                                <motion.li
                                    key={i}
                                    className="philosophy__benefit-item"
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                                >
                                    <span className="philosophy__benefit-icon">{b.icon}</span>
                                    <span>{b.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            className="philosophy__solution-footer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.7, delay: 0.9 }}
                        >
                            <p>These aren't promises — they're <strong>built into the system.</strong></p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PhilosophySection;
