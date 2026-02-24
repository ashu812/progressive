import { motion } from 'framer-motion';
import {
    Lock, ShieldCheck, Bell, Eye
} from 'lucide-react';
import './ControlsSection.css';

const controls = [
    { icon: <Lock size={22} />, text: 'Lock dates so schedules can\'t be changed quietly' },
    { icon: <ShieldCheck size={22} />, text: 'Use approval gates to protect costing and purchases' },
    { icon: <Bell size={22} />, text: 'Receive voice alerts when delays occur' },
    { icon: <Eye size={22} />, text: 'Create visibility across roles and teams' },
];

const ControlsSection = () => {
    return (
        <section className="controls-section" id="controls">
            <div className="controls-section__bg-grid" />
            <div className="controls-section__orb controls-section__orb--1" />
            <div className="controls-section__orb controls-section__orb--2" />

            <div className="controls-section__container">
                {/* Left — Content */}
                <div className="controls-section__left">
                    <motion.span
                        className="controls-section__eyebrow"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Built-In Discipline
                    </motion.span>
                    <motion.h2
                        className="controls-section__headline"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Controls That{' '}
                        <span className="controls-section__headline-gradient">Matter</span>
                    </motion.h2>
                    <motion.p
                        className="controls-section__intro"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        With vNiryat, control is not optional — it's built in.
                    </motion.p>

                    <div className="controls-section__list">
                        {controls.map((c, i) => (
                            <motion.div
                                className="controls-section__item"
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.3 + i * 0.12,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                <span className="controls-section__item-icon">{c.icon}</span>
                                <span className="controls-section__item-text">{c.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="controls-section__quote"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                    >
                        <div className="controls-section__quote-bar" />
                        <p>
                            These controls don't slow your factory down.<br />
                            They <strong>stop damage before it starts.</strong>
                        </p>
                    </motion.div>
                </div>

                {/* Right — Visual */}
                <motion.div
                    className="controls-section__right"
                    initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="controls-section__visual">
                        <div className="controls-section__visual-ring controls-section__visual-ring--1" />
                        <div className="controls-section__visual-ring controls-section__visual-ring--2" />
                        <div className="controls-section__visual-ring controls-section__visual-ring--3" />
                        <div className="controls-section__visual-lock">
                            <Lock size={48} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ControlsSection;
