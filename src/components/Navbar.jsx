import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/about';

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${isVisible ? 'navbar--visible' : ''} `}>
            <Link to="/" className="navbar__logo">
                <span className="navbar__logo-v">V</span>
                <span className="navbar__logo-text">NIRYAT</span>
                <span className="navbar__logo-tagline">ERP @ AI INTELLIGENT</span>
            </Link>

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
                <li>
                    <Link
                        to="/"
                        className={`navbar__link ${isHome ? 'navbar__link--active' : ''}`}
                    >
                        HOME
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={`navbar__link ${isAbout ? 'navbar__link--active' : ''}`}
                    >
                        ABOUT
                    </Link>
                </li>
                <li>
                    <a
                        href={isHome ? '#ai-erp' : '/#ai-erp'}
                        className="navbar__link"
                        onClick={(e) => {
                            if (isHome) {
                                e.preventDefault();
                                setMenuOpen(false);
                                document.getElementById('ai-erp')?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        PRODUCT
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
