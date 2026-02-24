import { motion } from 'framer-motion';
import { Calendar, Layers, Scissors, Package, Truck } from 'lucide-react';
import './HowItWorksSection.css';

const steps = [
    {
        id: 1,
        icon: <Calendar size={28} />,
        title: 'Buyer PO Date',
        desc: 'The system locks the target delivery date immediately, creating a fixed timeline.'
    },
    {
        id: 2,
        icon: <Layers size={28} />,
        title: 'Trims & Accessories',
        desc: 'Auto-generated POs based on the BOM ensure materials arrive exactly when needed.'
    },
    {
        id: 3,
        icon: <Scissors size={28} />,
        title: 'Fabric Planning',
        desc: 'Cut dates are calculated backward from the sewing start date to prevent bottlenecks.'
    },
    {
        id: 4,
        icon: <Package size={28} />,
        title: 'Line Loading',
        desc: 'Production lines are optimized for maximum capacity utilization and efficiency.'
    },
    {
        id: 5,
        icon: <Truck size={28} />,
        title: 'Packing & Dispatch',
        desc: 'Final checks ensure on-time delivery, every single time.'
    }
];

const HowItWorksSection = () => {
    return (
        <section className="how-it-works">
            <div className="how-it-works__bg-grid" />

            <div className="how-it-works__container">
                {/* Header */}
                <div className="how-it-works__header">
                    <motion.span
                        className="how-it-works__eyebrow"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Our Process
                    </motion.span>
                    <motion.h2
                        className="how-it-works__headline"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        From Order to Dispatch.{' '}
                        <span className="how-it-works__headline-gradient">Seamlessly Connected.</span>
                    </motion.h2>
                    <motion.p
                        className="how-it-works__description"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        vNiryat transforms chaos into clarity. Every step is calculated, tracked, and optimized automatically.
                    </motion.p>
                </div>

                {/* Steps — each animates individually */}
                <div className="how-it-works__timeline">
                    <motion.div
                        className="how-it-works__line"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        style={{ transformOrigin: 'left' }}
                    />

                    {steps.map((step, i) => (
                        <motion.div
                            className="how-it-works__step"
                            key={step.id}
                            initial={{ opacity: 0, y: 70, scale: 0.85 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15 + i * 0.12,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            <div className="how-it-works__step-number">
                                <span>{String(step.id).padStart(2, '0')}</span>
                            </div>
                            <div className="how-it-works__step-card">
                                <div className="how-it-works__step-icon">
                                    {step.icon}
                                </div>
                                <h3 className="how-it-works__step-title">{step.title}</h3>
                                <p className="how-it-works__step-desc">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="how-it-works__bottom">
                    <motion.p
                        className="how-it-works__bottom-text"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7 }}
                    >
                        You receive daily alerts and real-time updates.
                    </motion.p>
                    <motion.p
                        className="how-it-works__bottom-highlight"
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        So you see delays early, not at the shipping stage.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
