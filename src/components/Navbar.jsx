import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Navbar() {
    const [scrollClass, setScrollClass] = useState('');
    const [showScrollBtn, setShowScrollBtn] = useState(false);

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            // sticky navbar on scroll
            if (window.scrollY > 20) {
                setScrollClass('sticky');
            } else {
                setScrollClass('');
            }

            // scroll-up button show/hide
            if (window.scrollY > 300) {
                setShowScrollBtn(true);
            } else {
                setShowScrollBtn(false);
            }
        };

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle scroll-up button click
    const handleScrollUp = () => {
        scroll.scrollToTop({ duration: 300 });
    };

    const handleMenuItemClick = () => {
        document.documentElement.style.scrollBehavior = 'smooth';

    };





    return (
        <>
            <div className={`scroll-up-btn ${showScrollBtn ? 'show' : ''}`} onClick={handleScrollUp}>
                <i className="fas fa-angle-up"></i>
            </div>
            <nav className={`navbar ${scrollClass}`}>
                <div className="max-width">
                    <div className="logo">
                        <ScrollLink to="home" smooth duration={300}>
                            Portfo<span>lio.</span>
                        </ScrollLink>
                    </div>
                    <ul className="menu">

                        <li>
                            <ScrollLink to="home" smooth duration={300} className="menu-btn" onClick={handleMenuItemClick}>
                                Home
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="about" smooth duration={300} className="menu-btn" onClick={handleMenuItemClick}>
                                About
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="services" smooth duration={300} className="menu-btn" onClick={handleMenuItemClick}>
                                Services
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="skills" smooth duration={300} className="menu-btn" onClick={handleMenuItemClick}>
                                Skills
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="projects" smooth duration={300} className="menu-btn" onClick={handleMenuItemClick}>
                                Projects
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="contact" smooth duration={300} className="menu-btn" onClick={handleMenuItemClick}>
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
