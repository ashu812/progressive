import { motion } from 'framer-motion';
import { Clock, Users, RefreshCw } from 'lucide-react';
import MovingDots from './MovingDots';
import './FeatureIntroSection.css';

const FeatureIntroSection = () => {
    // ... animate variants ...
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const challenges = [
        {
            icon: <Clock size={48} />, // Increased size
            title: "Deadlines",
        },
        {
            icon: <Users size={48} />,
            title: "Buyers",
        },
        {
            icon: <RefreshCw size={48} />,
            title: "Daily Changes",
        }
    ];

    return (
        <section className="feature-intro" id="ai-erp">
            <MovingDots color="37, 99, 235" /> {/* Brighter Blue Dots */}

            <motion.div
                className="feature-intro__container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                {/* Left Column: Solution Story */}
                <div className="feature-intro__left">
                    <motion.div className="feature-intro__header" variants={itemVariants}>
                        <h2 className="feature-intro__brand">
                            <span className="text-gradient-primary">vNiryat</span> AI-ERP
                        </h2>
                        <h3 className="feature-intro__tagline">
                            Planning that doesn't break<br />
                            under pressure
                        </h3>
                    </motion.div>

                    <motion.div className="feature-intro__footer" variants={itemVariants}>
                        <p className="feature-intro__statement">
                            Your planning system should<br />
                            support you not add more stress.
                        </p>

                        <div className="feature-intro__divider"></div>

                        <p className="feature-intro__description">
                            <span className="text-blue-bold">vNiryat is a planning-first ERP</span> built for export manufacturing.<br />
                            It locks dates, shows risks early, and helps you deliver on time without last-minute panic.
                        </p>
                    </motion.div>
                </div>

                {/* Right Column: Cards */}
                <div className="feature-intro__right">
                    <motion.div className="feature-intro__challenges-wrapper" variants={cardVariants}>
                        <p className="feature-intro__label">You deal with</p>

                        <div className="feature-intro__grid">
                            {challenges.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-intro__card"
                                    whileHover={{ y: -12 }} // Match CSS hover
                                >
                                    <div className="feature-intro__icon-circle">
                                        {item.icon}
                                    </div>
                                    <span className="feature-intro__card-title">{item.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default FeatureIntroSection;
