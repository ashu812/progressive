import { motion } from 'framer-motion';
import { Zap, DollarSign, TrendingUp } from 'lucide-react';
import './ROISection.css';

const advantages = [
    {
        icon: <Zap size={28} />,
        title: 'Faster Implementation',
        desc: 'Get up and running in weeks, not months or years.'
    },
    {
        icon: <DollarSign size={28} />,
        title: 'Lower Upfront Investment',
        desc: 'No crore-level costs. Pay for what you use.'
    },
    {
        icon: <TrendingUp size={28} />,
        title: 'ROI within 6–12 Months',
        desc: 'See measurable returns in the first year itself.'
    },
];

function ROISection() {
    return (
        <section className="roi">
            <div className="roi__bg-grid" />
            <div className="roi__orb roi__orb--1" />
            <div className="roi__orb roi__orb--2" />

            <div className="roi__container">
                {/* Header */}
                <div className="roi__header">
                    <motion.span
                        className="roi__eyebrow"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Economic Advantage
                    </motion.span>
                    <motion.h2
                        className="roi__title"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        ROI &{' '}
                        <span className="roi__title-gradient">Economic Advantage</span>
                    </motion.h2>
                    <motion.p
                        className="roi__subtitle"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Serious Control Without Crore-Level Costs
                    </motion.p>
                    <motion.p
                        className="roi__description"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Traditional garment ERPs are expensive, slow to implement,
                        and take years to show results.
                    </motion.p>
                </div>

                {/* Cards — each animates individually */}
                <div className="roi__cards">
                    {advantages.map((a, i) => (
                        <motion.div
                            className="roi__card"
                            key={i}
                            initial={{ opacity: 0, y: 70, scale: 0.88 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.15,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        >
                            <div className="roi__card-icon">{a.icon}</div>
                            <h3 className="roi__card-title">{a.title}</h3>
                            <p className="roi__card-desc">{a.desc}</p>
                            <div className="roi__card-glow" />
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    className="roi__footer"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="roi__footer-text">
                        This makes advanced planning and control practical
                        for mid-to-large factories — <strong>without locking up capital.</strong>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default ROISection;
