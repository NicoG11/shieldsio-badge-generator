import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState<number | null>(null);

    const handleScroll = () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout); // Vorheriges Timeout löschen
        }

        const timeout = window.setTimeout(() => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }, 100); // 100ms Verzögerung
        setScrollTimeout(timeout);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, [scrollTimeout]);

    const badgeUrl: string = `https://img.shields.io/badge/shields.io-Badge%20Generator-blue?style=flat`;

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <h1>
                <span>Shields.io</span> Badge Generator
            </h1>
            <img src={badgeUrl} alt='Shields.io Badge' />
        </header>
    );
};

export default Header;
