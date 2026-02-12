import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${isVisible ? 'navbar--visible' : ''} `}>
            <div className="navbar__logo">
                <span className="navbar__logo-v">V</span>
                <span className="navbar__logo-text">NIRYAT</span>
                <span className="navbar__logo-tagline">ERP @ AI INTELLIGENT</span>
            </div>

            <button
                className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''} `}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''} `}>
                <li><a href="#home" className="navbar__link navbar__link--active">HOME</a></li>
                <li><a href="#about" className="navbar__link">ABOUT</a></li>
                <li><a href="#work" className="navbar__link">WORK</a></li>
                <li><a href="#account" className="navbar__link">ACCOUNT</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
