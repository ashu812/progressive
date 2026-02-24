import { motion } from 'framer-motion';
import {
    Zap, ShieldCheck, BarChart3, Clock, Layers, Eye,
    ArrowRight
} from 'lucide-react';
import './FeatureIntroSection.css';

const FeatureIntroSection = () => {
    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 60, scale: 0.96 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const slideLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1, x: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const slideRight = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1, x: 0,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const features = [
        {
            icon: <ShieldCheck size={28} />,
            title: 'Locked Timelines',
            desc: 'Dates don\'t move without approval. Every change is tracked.'
        },
        {
            icon: <Eye size={28} />,
            title: 'Real-Time Visibility',
            desc: 'See every order, line, and shipment status — live, not from yesterday.'
        },
        {
            icon: <BarChart3 size={28} />,
            title: '600+ Reports',
            desc: 'From costing to dispatch — every metric at your fingertips, instantly.'
        },
        {
            icon: <Clock size={28} />,
            title: 'Early Risk Alerts',
            desc: 'Know about delays before they happen. Not after buyers complain.'
        },
        {
            icon: <Layers size={28} />,
            title: 'End-to-End ERP',
            desc: 'Planning, production, inventory, shipment, finance — all connected.'
        },
        {
            icon: <Zap size={28} />,
            title: 'AI-Powered',
            desc: 'Smart suggestions, auto-scheduling, and predictive insights built-in.'
        },
    ];

    return (
        <section className="feature-intro" id="ai-erp">
            <div className="feature-intro__bg-grid" />
            <div className="feature-intro__orb feature-intro__orb--1" />
            <div className="feature-intro__orb feature-intro__orb--2" />
            <div className="feature-intro__orb feature-intro__orb--3" />

            <div className="feature-intro__container">
                {/* Header */}
                <motion.div
                    className="feature-intro__header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={stagger}
                >
                    <motion.span className="feature-intro__eyebrow" variants={fadeUp}>
                        The ERP Built for Garment Exports
                    </motion.span>
                    <motion.h2 className="feature-intro__title" variants={fadeUp}>
                        <span className="feature-intro__title-gradient">vNiryat</span> AI-ERP
                    </motion.h2>
                    <motion.p className="feature-intro__subtitle" variants={fadeUp}>
                        Planning that doesn't break under pressure.
                        Your system should support you — not add more stress.
                    </motion.p>
                    <motion.div className="feature-intro__divider" variants={fadeUp} />
                </motion.div>

                {/* Feature Grid — each card animates individually */}
                <div className="feature-intro__grid">
                    {features.map((f, i) => (
                        <motion.div
                            className="feature-intro__card"
                            key={i}
                            initial={{ opacity: 0, y: 70, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <div className="feature-intro__card-icon">
                                {f.icon}
                            </div>
                            <div className="feature-intro__card-content">
                                <h3 className="feature-intro__card-title">{f.title}</h3>
                                <p className="feature-intro__card-desc">{f.desc}</p>
                            </div>
                            <div className="feature-intro__card-glow" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Statement */}
                <motion.div
                    className="feature-intro__bottom"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p className="feature-intro__statement">
                        <span className="feature-intro__statement-highlight">vNiryat is a planning-first ERP</span>{' '}
                        built for export manufacturing. It locks dates, shows risks early,
                        and helps you deliver on time — without last-minute panic.
                    </p>
                    <a
                        href="#controls"
                        className="feature-intro__cta"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('controls')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        See How It Works <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureIntroSection;
