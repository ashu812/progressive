import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Scissors, Package, Layers, Truck } from 'lucide-react';
import MovingDots from './MovingDots';
import './HowItWorksSection.css';


const HowItWorksSection = () => {
    const steps = [
        {
            id: 1,
            icon: <Calendar size={32} />,
            title: "Buyer PO Date",
            description: "The system locks the target delivery date immediately, creating a fixed timeline."
        },
        {
            id: 2,
            icon: <Layers size={32} />,
            title: "Trims & Accessories",
            description: "Auto-generated POs based on the BOM ensure materials arrive exactly when needed."
        },
        {
            id: 3,
            icon: <Scissors size={32} />,
            title: "Fabric Planning",
            description: "Cut dates are calculated backward from the sewing start date to prevent bottlenecks."
        },
        {
            id: 4,
            icon: <Package size={32} />,
            title: "Line Loading",
            description: "Production lines are optimized for maximum capacity utilization and efficiency."
        },
        {
            id: 5,
            icon: <Truck size={32} />,
            title: "Packing & Dispatch",
            description: "Final checks ensure on-time delivery, every single time."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="how-it-works">
            <MovingDots color="6, 182, 212" /> {/* Cyan to mix with Blue */}

            <div className="how-it-works__container">

                {/* Header Section */}
                <motion.div
                    className="how-it-works__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="how-it-works__label">Our Process</h2>
                    <h3 className="how-it-works__headline">
                        From Order to Dispatch.<br />
                        <span className="text-gradient-primary">Seamlessly Connected.</span>
                    </h3>
                    <p className="how-it-works__description">
                        vNiryat transforms chaos into clarity. Every step is calculated, tracked, and optimized automatically.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <motion.div
                    className="how-it-works__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="how-it-works__card"
                            variants={itemVariants}
                        >
                            <span className="how-it-works__step-number">0{index + 1}</span>
                            <div className="how-it-works__icon-box">
                                {step.icon}
                            </div>
                            <h4 className="how-it-works__card-title">{step.title}</h4>
                            <p className="how-it-works__card-desc">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Text */}
                <div className="how-it-works__bottom-text">
                    <p>
                        You receive daily alerts and real-time updates.<br />
                        <span className="text-gradient-primary font-bold">So you see delays early, not at the shipping stage.</span>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default HowItWorksSection;
