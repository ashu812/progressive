import React, { useEffect, useRef } from 'react';
import './KeyModulesSection.css';
import {
    ClipboardList,
    Warehouse,
    Settings,
    Tag,
    ShoppingCart,
    Calculator,
    Ship,
    BarChart3
} from 'lucide-react';

const modules = [
    {
        id: 1,
        title: "Buyer Order Planning",
        description: "Turn buyer commitments into clear factory plans. Timelines stay locked, and ownership stays clear.",
        icon: <ClipboardList size={32} />
    },
    {
        id: 2,
        title: "Inventory & Reporting",
        description: "See raw materials, work-in-progress, and finished goods in real time.",
        icon: <Warehouse size={32} />
    },
    {
        id: 3,
        title: "Production Management",
        description: "Track production accurately and link material usage, output, and costs.",
        icon: <Settings size={32} />
    },
    {
        id: 4,
        title: "Merchandising & Costing",
        description: "Manage product data and costing in one place. Approval workflows protect your margins.",
        icon: <Tag size={32} />
    },
    {
        id: 5,
        title: "Procurement",
        description: "Move from request to purchase to inventory without manual gaps.",
        icon: <ShoppingCart size={32} />
    },
    {
        id: 6,
        title: "Finance & Accounting",
        description: "See production, purchase, and expense data in one system with live financial dashboards.",
        icon: <Calculator size={32} />
    },
    {
        id: 7,
        title: "Documentation & Shipping",
        description: "Manage packing, shipping, and export documents with full traceability.",
        icon: <Ship size={32} />
    },
    {
        id: 8,
        title: "MIS & Analytics",
        description: "Get access to 600+ real-time reports so you can make decisions with clarity.",
        icon: <BarChart3 size={32} />
    }
];

const KeyModulesSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="key-modules" ref={sectionRef}>
            <div className="key-modules__container">
                <div className="key-modules__header">
                    <h2 className="key-modules__headline"><span className="text-gradient-primary">Key Modules</span></h2>
                </div>

                <div className="key-modules__grid">
                    {modules.map((module) => (
                        <div key={module.id} className={`key-modules__card-wrapper module-${module.id}`}>
                            <div className="key-modules__card">
                                {/* Highlight Background Layer */}
                                <div className="key-modules__highlight"></div>

                                <div className="key-modules__card-header">
                                    <div className="key-modules__icon">
                                        {module.icon}
                                    </div>
                                    <div className="key-modules__number">
                                        {module.id}
                                    </div>
                                </div>
                                <div className="key-modules__card-body">
                                    <h3 className="key-modules__title">{module.title}</h3>
                                    <p className="key-modules__description">{module.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyModulesSection;
