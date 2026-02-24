import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    AlertTriangle, ClipboardList, Package, CalendarClock,
    SearchX, ShieldAlert, Factory, Truck, Receipt,
    Warehouse, Users as UsersIcon, Lock, BarChart3, Eye, Award
} from 'lucide-react';
import './AboutPage.css';

const VP = { once: false, amount: 0.1 };

const painPoints = [
    { icon: <ClipboardList size={20} />, text: 'Plans change without notice' },
    { icon: <Package size={20} />, text: 'Inventory piles up or runs out' },
    { icon: <CalendarClock size={20} />, text: 'Dates get adjusted to suit people, not production' },
    { icon: <SearchX size={20} />, text: 'Quality issues show up too late' },
    { icon: <ShieldAlert size={20} />, text: 'Buyers lose trust' },
];

const journeySteps = [
    { icon: <ClipboardList size={28} />, label: 'Planning', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop' },
    { icon: <Factory size={28} />, label: 'Production', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop' },
    { icon: <Warehouse size={28} />, label: 'Inventory', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop' },
    { icon: <Truck size={28} />, label: 'Shipment', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=400&auto=format&fit=crop' },
    { icon: <Receipt size={28} />, label: 'Finance', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop' },
];

const differentiators = [
    { icon: <Factory size={22} />, text: 'Made specially for garment manufacturing' },
    { icon: <UsersIcon size={22} />, text: 'Easy to use for planners, supervisors, and merchandisers' },
    { icon: <Lock size={22} />, text: 'Dates cannot be changed without approval' },
    { icon: <Eye size={22} />, text: 'Real-time tracking of every order milestone' },
    { icon: <Award size={22} />, text: 'Strong cost control and approval system' },
    { icon: <BarChart3 size={22} />, text: 'Over 600 live reports for management' },
];

const teamMembers = [
    {
        name: 'Swaraj Kumar Suman',
        role: 'Founder',
        desc: 'With 20+ years of experience in the apparel industry, Mr. Swaraj Kumar Suman founded Progressive Infosys with a strong focus on quality, innovation, and timely delivery. He believes in combining craftsmanship, technology, and sustainable practices to create value for customers and partners worldwide.',
    },
    {
        name: 'Rajiv Pande',
        role: 'Director',
        desc: 'Change Management Professional with expertise in driving adoption of organizational transformations through stakeholder engagement, communication, and structured change methodologies. With over 40+ years of experience leading businesses to outstanding scale in the manufacturing industry, he is currently working on the AI empowered ERP solution.',
    },
];

function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page">

            {/* ===== 1. Who We Are — Hero ===== */}
            <section className="about-hero">
                <div className="about-hero__bg-pattern" />
                <div className="about-hero__grid-overlay" />
                <div className="about-hero__orb about-hero__orb--1" />
                <div className="about-hero__orb about-hero__orb--2" />

                <div className="about-hero__content">
                    <motion.span
                        className="about-hero__eyebrow"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VP}
                        transition={{ duration: 0.7 }}
                    >
                        About Progressive Infosys
                    </motion.span>
                    <motion.h1
                        className="about-hero__title"
                        initial={{ opacity: 0, y: 60, scale: 0.92 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={VP}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        Who <span className="about-hero__title-highlight">We Are</span>
                    </motion.h1>
                    <motion.p
                        className="about-hero__subtitle"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VP}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        We are <strong>Progressive Infosys</strong> — a team that understands
                        factories, production lines, and delivery pressure instead of just software.
                    </motion.p>
                </div>
            </section>

            {/* ===== 2. Company Story ===== */}
            <section className="about-story">
                <div className="about-story__container">
                    <motion.div
                        className="about-story__image-wrapper"
                        initial={{ opacity: 0, x: -80, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={VP}
                        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Progressive Infosys Team"
                            className="about-story__image"
                        />
                    </motion.div>

                    <div className="about-story__text">
                        <motion.span
                            className="about-story__label"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.7 }}
                        >
                            Our Story
                        </motion.span>
                        <motion.h2
                            className="about-story__heading"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            The People Behind <span>Progressive Infosys</span>
                        </motion.h2>
                        <motion.hr
                            className="about-story__divider"
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ transformOrigin: 'left' }}
                        />
                        <motion.p
                            className="about-story__paragraph"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.7, delay: 0.25 }}
                        >
                            <strong>Progressive Infosys</strong> is a technology company built specially
                            for apparel exporters and garment manufacturers. We created{' '}
                            <strong>vNiryat</strong> — an AI-powered ERP that speaks the language of
                            the factory floor.
                        </motion.p>
                        <motion.p
                            className="about-story__paragraph"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.7, delay: 0.35 }}
                        >
                            Progressive Infosys was not built in a boardroom. It was built from{' '}
                            <strong>real factory experience</strong>, real production problems, and
                            real buyer expectations.
                        </motion.p>
                        <motion.p
                            className="about-story__paragraph"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.7, delay: 0.45 }}
                        >
                            Today, <strong>Progressive Infosys</strong> helps garment exporters bring{' '}
                            <strong>clarity, control, and confidence</strong> back into their
                            operations.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ===== 3. Why We Exist ===== */}
            <section className="about-why">
                <div className="about-why__container">
                    <div className="about-why__header">
                        <motion.h2
                            className="about-why__title"
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.8 }}
                        >
                            Why We <span className="about-why__title-highlight">Exist</span>
                        </motion.h2>
                        <motion.p
                            className="about-why__subtitle"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            Every day, across garment factories in India, Bangladesh, Vietnam, and beyond,
                            the same problems repeat:
                        </motion.p>
                    </div>

                    <div className="about-why__pain-grid">
                        <motion.div
                            className="about-why__alert-icon"
                            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.7 }}
                        >
                            <AlertTriangle size={40} />
                        </motion.div>
                        {painPoints.map((p, i) => (
                            <motion.div
                                className="about-why__pain-card"
                                key={i}
                                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={VP}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                <span className="about-why__pain-icon">{p.icon}</span>
                                <span>{p.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="about-why__bottom">
                        <motion.p
                            className="about-why__bottom-text"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.7 }}
                        >
                            Most ERPs are expensive, slow, and not made for garments.
                            They look good on paper but fail on the factory floor.
                        </motion.p>
                        <motion.p
                            className="about-why__bottom-highlight"
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.8, delay: 0.15 }}
                        >
                            And <strong>Progressive Infosys</strong> was built to fix exactly this.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* ===== 4. What We Do ===== */}
            <section className="about-what">
                <div className="about-what__container">
                    <div className="about-what__header">
                        <motion.h2
                            className="about-what__title"
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.8 }}
                        >
                            What We <span className="about-what__title-highlight">Do</span>
                        </motion.h2>
                        <motion.p
                            className="about-what__subtitle"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            Progressive Infosys builds garment-specific ERP solutions that manage the complete export journey:
                        </motion.p>
                        <motion.p
                            className="about-what__from"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            From buyer order
                        </motion.p>
                    </div>

                    <div className="about-what__journey">
                        {journeySteps.map((step, i) => (
                            <motion.div
                                className="about-what__step"
                                key={i}
                                initial={{ opacity: 0, y: 70, scale: 0.85 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={VP}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.12,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                <div className="about-what__step-image">
                                    <img src={step.image} alt={step.label} />
                                </div>
                                <div className="about-what__step-label">
                                    {step.icon}
                                    <span>To {step.label.toLowerCase()}</span>
                                </div>
                                {i < journeySteps.length - 1 && (
                                    <div className="about-what__step-arrow">→</div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="about-what__bottom"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VP}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <p className="about-what__tagline">
                            All is connected. All is visible.<br />
                            Nothing is hidden or manipulated.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ===== 5. What Makes Us Different ===== */}
            <section className="about-diff">
                <div className="about-diff__container">
                    <div className="about-diff__header">
                        <motion.h2
                            className="about-diff__title"
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.8 }}
                        >
                            What Makes Us <span className="about-diff__title-highlight">Different</span>
                        </motion.h2>
                        <motion.p
                            className="about-diff__subtitle"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            Progressive Infosys is not a generic software company.<br />
                            We build only for apparel exports.
                        </motion.p>
                        <motion.p
                            className="about-diff__sub2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Here's why factories choose Progressive Infosys:
                        </motion.p>
                    </div>

                    <div className="about-diff__grid">
                        {differentiators.map((d, i) => (
                            <motion.div
                                className="about-diff__card"
                                key={i}
                                initial={{ opacity: 0, y: 60, scale: 0.88 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={VP}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                <span className="about-diff__card-icon">{d.icon}</span>
                                <span className="about-diff__card-text">{d.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 6. Meet Our Team ===== */}
            <section className="about-team">
                <div className="about-team__container">
                    <div className="about-team__header">
                        <motion.h2
                            className="about-team__title"
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.8 }}
                        >
                            Meet Our <span className="about-team__title-highlight">Team</span>
                        </motion.h2>
                    </div>

                    <div className="about-team__grid">
                        {teamMembers.map((m, i) => (
                            <motion.div
                                className="about-team__card"
                                key={i}
                                initial={{ opacity: 0, y: 70, scale: 0.88 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={VP}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.15,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                            >
                                <h3 className="about-team__card-name">{m.name}</h3>
                                <span className="about-team__card-role">{m.role}</span>
                                <p className="about-team__card-desc">{m.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 7. CTA ===== */}
            <section className="about-cta">
                <div className="about-cta__container">
                    <motion.h2
                        className="about-cta__title"
                        initial={{ opacity: 0, y: 60, scale: 0.92 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={VP}
                        transition={{ duration: 0.8 }}
                    >
                        Ready to Transform Your Factory?
                    </motion.h2>
                    <motion.p
                        className="about-cta__subtitle"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VP}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        See how Progressive Infosys can bring clarity and control
                        to your garment manufacturing operations.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={VP}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <Link to="/" className="about-cta__button">
                            Explore vNiryat →
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
