import { motion } from 'framer-motion';
import MovingDots from './MovingDots';
import './PhilosophySection.css';
import PhilosophyImage from '../assets/Gemini_Generated_Image_4i6v5q4i6v5q4i6v.png'; // User provided image

const PhilosophySection = () => {
    return (
        <section className="philosophy">
            <MovingDots color="37, 99, 235" />

            <div className="philosophy__container">
                <motion.div
                    className="philosophy__header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="philosophy__label">Our Philosophy</h2>
                    <h3 className="philosophy__headline">
                        Stop Depending on People.<br />
                        <span className="text-gradient-primary">Start Depending on Systems.</span>
                    </h3>
                </motion.div>

                <div className="philosophy__grid">
                    <motion.div
                        className="philosophy__col-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <p className="philosophy__problem-text">
                            Right now, your factory probably depends on one or two planners to keep everything together.
                        </p>
                        <p className="philosophy__problem-text">
                            When planning depends on individuals, plans change quietly and problems show up late.
                        </p>
                    </motion.div>

                    <motion.div
                        className="philosophy__col-right"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        {/* Decorative Image Container */}
                        <motion.div
                            className="philosophy__image-container"
                            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                            whileInView={{ opacity: 0.8, scale: 1, rotate: 6 }}
                            transition={{ delay: 0.6, duration: 1 }}
                        >
                            <img
                                src={PhilosophyImage}
                                alt="Manual vs Automated Workflow"
                                className="philosophy__image"
                            />
                        </motion.div>

                        <div className="philosophy__highlight-box">
                            <h4 className="philosophy__highlight-title">vNiryat changes this.</h4>
                            <p className="philosophy__solution-text">
                                You move to automated, data-driven planning. Dates stay fixed.
                                Changes are visible. Delays don't hide.
                            </p>
                            <p className="philosophy__footer-text">
                                You don't chase updates. The system keeps you informed.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
