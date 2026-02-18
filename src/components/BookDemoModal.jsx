import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
// EmailJS removed
import './BookDemoModal.css';

const BookDemoModal = ({ isOpen, onClose }) => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        companyWebsite: '',
        workEmail: '',
        phoneNumber: '',
        companySize: '',
        requirements: '',
        preferredLanguage: ''
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you! Your request has been sent successfully.');
                setFormData({
                    fullName: '',
                    companyName: '',
                    companyWebsite: '',
                    workEmail: '',
                    phoneNumber: '',
                    companySize: '',
                    requirements: '',
                    preferredLanguage: ''
                });
                onClose();
            } else {
                throw new Error('Failed to send request');
            }
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send request. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation variants
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const modalVariants = {
        hidden: { scale: 0.95, opacity: 0, y: 20 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            scale: 0.9,
            opacity: 0,
            y: 100, // Slide down more noticeably
            transition: { duration: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        }
    };

    const formItemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-container"
                        variants={modalVariants}
                        onClick={e => e.stopPropagation()}
                    >
                        <motion.button
                            className="modal-close"
                            onClick={onClose}
                            aria-label="Close modal"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={24} />
                        </motion.button>

                        <div className="modal-layout">
                            {/* Left Side - Content */}
                            <div className="modal-left">
                                <div className="modal-left__content">
                                    <motion.div className="modal-brand" variants={itemVariants}>
                                        <span className="modal-brand__logo">V</span>
                                        <span className="modal-brand__text">NIRYAT</span>
                                    </motion.div>

                                    <motion.h2 className="modal-left__title" variants={itemVariants}>
                                        An ERP,<br />
                                        unlike any other
                                    </motion.h2>

                                    <motion.p className="modal-left__description" variants={itemVariants}>
                                        See how Niryat ERP brings your business vision to life.
                                        Designed to evolve with your operations today and tomorrow.
                                    </motion.p>

                                    <div className="modal-left__features">
                                        <motion.h3 variants={itemVariants}>How we approach the demo</motion.h3>
                                        <ul>
                                            {/* We can animate individual list items if we want, but keeping it simple for now or using stagger from parent */}
                                            <motion.li variants={itemVariants}>Grounded in your <strong>business goals and workflows</strong></motion.li>
                                            <motion.li variants={itemVariants}>Adapted to your <strong>industry and stage of growth</strong></motion.li>
                                            <motion.li variants={itemVariants}>Focused on how everything <strong>works together, end to end</strong></motion.li>
                                            <motion.li variants={itemVariants}>Covers our premium plan <strong>offering comprehensively</strong></motion.li>
                                        </ul>
                                    </div>

                                    <motion.p className="modal-left__footer" variants={itemVariants}>
                                        Thoughtfully designed for <strong>real-world operations.</strong>
                                    </motion.p>
                                </div>
                                <div className="modal-left__bg-gradient"></div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="modal-right">
                                <div className="modal-header">
                                    <motion.h2 variants={formItemVariants} className="modal-title">Request a demo</motion.h2>
                                </div>

                                <form ref={form} className="demo-form" onSubmit={sendEmail}>
                                    <motion.div variants={formItemVariants} className="form-group form-group--full">
                                        <div className="input-with-icon">
                                            <input
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                className="form-input"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                                placeholder="Full name"
                                            />
                                            <div className="input-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={formItemVariants} className="form-group form-group--full">
                                        <div className="input-with-icon">
                                            <input
                                                type="text"
                                                id="companyName"
                                                name="companyName"
                                                className="form-input"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                required
                                                placeholder="Company Name"
                                            />
                                            <div className="input-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M17 21v-8.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21" /><path d="M9 21v-1" /></svg>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={formItemVariants} className="form-group form-group--full">
                                        <div className="input-with-icon">
                                            <input
                                                type="url"
                                                id="companyWebsite"
                                                name="companyWebsite"
                                                className="form-input"
                                                value={formData.companyWebsite}
                                                onChange={handleChange}
                                                placeholder="Company website (Optional)"
                                            />
                                            <div className="input-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={formItemVariants} className="form-group form-group--full">
                                        <div className="input-with-icon">
                                            <input
                                                type="email"
                                                id="workEmail"
                                                name="workEmail"
                                                className="form-input"
                                                value={formData.workEmail}
                                                onChange={handleChange}
                                                required
                                                placeholder="Work email"
                                            />
                                            <div className="input-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={formItemVariants} className="form-group form-group--full">
                                        <div className="input-with-icon">
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                className="form-input"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                                placeholder="Phone number"
                                            />
                                            <div className="input-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={formItemVariants} className="form-group form-group--full">
                                        <div className="select-wrapper">
                                            <select
                                                id="companySize"
                                                name="companySize"
                                                className="form-select"
                                                value={formData.companySize}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled>Company size</option>
                                                <option value="1-50">1-50 employees</option>
                                                <option value="51-200">51-200 employees</option>
                                                <option value="201-500">201-500 employees</option>
                                                <option value="500+">500+ employees</option>
                                            </select>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={formItemVariants} className="form-group form-group--full">
                                        <div className="input-with-icon">
                                            <textarea
                                                id="requirements"
                                                name="requirements"
                                                className="form-textarea"
                                                value={formData.requirements}
                                                onChange={handleChange}
                                                rows={3}
                                                placeholder="Describe your requirements"
                                            />
                                            <div className="input-icon input-icon--top">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={formItemVariants} className="form-group form-group--full">
                                        <div className="input-with-icon">
                                            <select
                                                id="preferredLanguage"
                                                name="preferredLanguage"
                                                className="form-select"
                                                value={formData.preferredLanguage}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Preferred demo language</option>
                                                <option value="english">English</option>
                                                <option value="hindi">Hindi</option>
                                            </select>
                                            <div className="input-icon">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        className="submit-btn"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        disabled={isSubmitting}
                                        style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                                    >
                                        <span>{isSubmitting ? 'Sending...' : 'Book Demo'}</span>
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BookDemoModal;
