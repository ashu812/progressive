import { motion } from 'framer-motion';
import {
    ClipboardList, Warehouse, Settings, Tag,
    ShoppingCart, Calculator, Ship, BarChart3
} from 'lucide-react';
import './KeyModulesSection.css';

const modules = [
    {
        id: 1, title: 'Buyer Order Planning',
        desc: 'Turn buyer commitments into clear factory plans. Timelines stay locked, and ownership stays clear.',
        icon: <ClipboardList size={26} />
    },
    {
        id: 2, title: 'Inventory & Reporting',
        desc: 'See raw materials, work-in-progress, and finished goods in real time.',
        icon: <Warehouse size={26} />
    },
    {
        id: 3, title: 'Production Management',
        desc: 'Track production accurately and link material usage, output, and costs.',
        icon: <Settings size={26} />
    },
    {
        id: 4, title: 'Merchandising & Costing',
        desc: 'Manage product data and costing in one place. Approval workflows protect your margins.',
        icon: <Tag size={26} />
    },
    {
        id: 5, title: 'Procurement',
        desc: 'Move from request to purchase to inventory without manual gaps.',
        icon: <ShoppingCart size={26} />
    },
    {
        id: 6, title: 'Finance & Accounting',
        desc: 'See production, purchase, and expense data in one system with live financial dashboards.',
        icon: <Calculator size={26} />
    },
    {
        id: 7, title: 'Documentation & Shipping',
        desc: 'Manage packing, shipping, and export documents with full traceability.',
        icon: <Ship size={26} />
    },
    {
        id: 8, title: 'MIS & Analytics',
        desc: 'Get access to 600+ real-time reports so you can make decisions with clarity.',
        icon: <BarChart3 size={26} />
    },
];

const KeyModulesSection = () => {
    return (
        <section className="key-modules">
            <div className="key-modules__bg-grid" />
            <div className="key-modules__orb key-modules__orb--1" />
            <div className="key-modules__orb key-modules__orb--2" />

            <div className="key-modules__container">
                {/* Header */}
                <div className="key-modules__header">
                    <motion.span
                        className="key-modules__eyebrow"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Platform Overview
                    </motion.span>
                    <motion.h2
                        className="key-modules__headline"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        Key <span className="key-modules__headline-gradient">Modules</span>
                    </motion.h2>
                    <motion.p
                        className="key-modules__description"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Eight interconnected modules that cover every aspect of garment export operations.
                    </motion.p>
                </div>

                {/* Grid — each card animates individually */}
                <div className="key-modules__grid">
                    {modules.map((m, i) => (
                        <motion.div
                            className="key-modules__card"
                            key={m.id}
                            initial={{ opacity: 0, y: 70, scale: 0.88 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: false, amount: 0.05 }}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.08,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        >
                            <div className="key-modules__card-top">
                                <div className="key-modules__card-icon">
                                    {m.icon}
                                </div>
                                <span className="key-modules__card-number">{m.id}</span>
                            </div>
                            <h3 className="key-modules__card-title">{m.title}</h3>
                            <p className="key-modules__card-desc">{m.desc}</p>
                            <div className="key-modules__card-glow" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyModulesSection;
