import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    AlertTriangle, ClipboardList, Package, CalendarClock,
    SearchX, ShieldAlert, Factory, Truck, Receipt,
    Warehouse, Users as UsersIcon, Lock, BarChart3, Eye, Award
} from 'lucide-react';
import './AboutPage.css';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
    })
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

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

                <motion.div
                    className="about-hero__content"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.span className="about-hero__eyebrow" variants={fadeUp} custom={0}>
                        About Progressive Infosys
                    </motion.span>
                    <motion.h1 className="about-hero__title" variants={fadeUp} custom={1}>
                        Who <span className="about-hero__title-highlight">We Are</span>
                    </motion.h1>
                    <motion.p className="about-hero__subtitle" variants={fadeUp} custom={2}>
                        We are <strong>Progressive Infosys</strong> — a team that understands
                        factories, production lines, and delivery pressure instead of just software.
                    </motion.p>
                </motion.div>
            </section>

            {/* ===== 2. Company Story ===== */}
            <section className="about-story">
                <div className="about-story__container">
                    <motion.div
                        className="about-story__image-wrapper"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Progressive Infosys Team"
                            className="about-story__image"
                        />
                    </motion.div>

                    <motion.div
                        className="about-story__text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={staggerContainer}
                    >
                        <motion.span className="about-story__label" variants={fadeUp}>
                            Our Story
                        </motion.span>
                        <motion.h2 className="about-story__heading" variants={fadeUp}>
                            The People Behind <span>Progressive Infosys</span>
                        </motion.h2>
                        <motion.hr className="about-story__divider" variants={fadeUp} />
                        <motion.p className="about-story__paragraph" variants={fadeUp}>
                            <strong>Progressive Infosys</strong> is a technology company built specially
                            for apparel exporters and garment manufacturers. We created{' '}
                            <strong>vNiryat</strong> — an AI-powered ERP that speaks the language of
                            the factory floor.
                        </motion.p>
                        <motion.p className="about-story__paragraph" variants={fadeUp}>
                            Progressive Infosys was not built in a boardroom. It was built from{' '}
                            <strong>real factory experience</strong>, real production problems, and
                            real buyer expectations.
                        </motion.p>
                        <motion.p className="about-story__paragraph" variants={fadeUp}>
                            Today, <strong>Progressive Infosys</strong> helps garment exporters bring{' '}
                            <strong>clarity, control, and confidence</strong> back into their
                            operations.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ===== 3. Why We Exist ===== */}
            <section className="about-why">
                <div className="about-why__container">
                    <motion.div
                        className="about-why__header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="about-why__title" variants={fadeUp}>
                            Why We <span className="about-why__title-highlight">Exist</span>
                        </motion.h2>
                        <motion.p className="about-why__subtitle" variants={fadeUp}>
                            Every day, across garment factories in India, Bangladesh, Vietnam, and beyond,
                            the same problems repeat:
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="about-why__pain-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div className="about-why__alert-icon" variants={fadeUp}>
                            <AlertTriangle size={40} />
                        </motion.div>
                        {painPoints.map((p, i) => (
                            <motion.div className="about-why__pain-card" key={i} variants={fadeUp}>
                                <span className="about-why__pain-icon">{p.icon}</span>
                                <span>{p.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="about-why__bottom"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.p className="about-why__bottom-text" variants={fadeUp}>
                            Most ERPs are expensive, slow, and not made for garments.
                            They look good on paper but fail on the factory floor.
                        </motion.p>
                        <motion.p className="about-why__bottom-highlight" variants={fadeUp}>
                            And <strong>Progressive Infosys</strong> was built to fix exactly this.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ===== 4. What We Do ===== */}
            <section className="about-what">
                <div className="about-what__container">
                    <motion.div
                        className="about-what__header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="about-what__title" variants={fadeUp}>
                            What We <span className="about-what__title-highlight">Do</span>
                        </motion.h2>
                        <motion.p className="about-what__subtitle" variants={fadeUp}>
                            Progressive Infosys builds garment-specific ERP solutions that manage the complete export journey:
                        </motion.p>
                        <motion.p className="about-what__from" variants={fadeUp}>
                            From buyer order
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="about-what__journey"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {journeySteps.map((step, i) => (
                            <motion.div className="about-what__step" key={i} variants={fadeUp}>
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
                    </motion.div>

                    <motion.div
                        className="about-what__bottom"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.p className="about-what__tagline" variants={fadeUp}>
                            All is connected. All is visible.<br />
                            Nothing is hidden or manipulated.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ===== 5. What Makes Us Different ===== */}
            <section className="about-diff">
                <div className="about-diff__container">
                    <motion.div
                        className="about-diff__header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="about-diff__title" variants={fadeUp}>
                            What Makes Us <span className="about-diff__title-highlight">Different</span>
                        </motion.h2>
                        <motion.p className="about-diff__subtitle" variants={fadeUp}>
                            Progressive Infosys is not a generic software company.<br />
                            We build only for apparel exports.
                        </motion.p>
                        <motion.p className="about-diff__sub2" variants={fadeUp}>
                            Here's why factories choose Progressive Infosys:
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="about-diff__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {differentiators.map((d, i) => (
                            <motion.div className="about-diff__card" key={i} variants={fadeUp}>
                                <span className="about-diff__card-icon">{d.icon}</span>
                                <span className="about-diff__card-text">{d.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== 6. Meet Our Team ===== */}
            <section className="about-team">
                <div className="about-team__container">
                    <motion.div
                        className="about-team__header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2 className="about-team__title" variants={fadeUp}>
                            Meet Our <span className="about-team__title-highlight">Team</span>
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="about-team__grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {teamMembers.map((m, i) => (
                            <motion.div className="about-team__card" key={i} variants={fadeUp}>
                                <h3 className="about-team__card-name">{m.name}</h3>
                                <span className="about-team__card-role">{m.role}</span>
                                <p className="about-team__card-desc">{m.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== 7. CTA ===== */}
            <section className="about-cta">
                <motion.div
                    className="about-cta__container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2 className="about-cta__title" variants={fadeUp}>
                        Ready to Transform Your Factory?
                    </motion.h2>
                    <motion.p className="about-cta__subtitle" variants={fadeUp}>
                        See how Progressive Infosys can bring clarity and control
                        to your garment manufacturing operations.
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <Link to="/" className="about-cta__button">
                            Explore vNiryat →
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}

export default AboutPage;
