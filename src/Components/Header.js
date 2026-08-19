import React from 'react';
import '../css/Header.css';
import { useState, useEffect } from 'react';

const RESUME_URL = "https://drive.google.com/file/d/1xxeBBevoK6g_9ZYbC3UwbteRBFW9unWU/view";

function ThemeToggle() {
    const [theme, setTheme] = useState(
        () => document.documentElement.getAttribute('data-theme') || 'light'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggle = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} aria-hidden="true"></i>
        </button>
    );
}

const NAV = [
    { href: '#Experience', label: 'experience' },
    { href: '#Projects', label: 'projects' },
    { href: '#Education', label: 'education' },
    { href: '#Skills', label: 'skills' },
    { href: '#Contact', label: 'contact' },
];

function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return (
    <header className="header">
        <div className="nav-inner">
            <a href="#top" className="wordmark">
                <span className="wordmark-tag">[AN]</span>
                <span className="wordmark-name">aaron nazareth</span>
            </a>

            <nav className="nav-links" aria-label="Primary">
                {NAV.map((item, i) => (
                    <a key={item.href} href={item.href}>
                        <span className="nav-index">{String(i + 1).padStart(2, '0')}</span>
                        {item.label}
                    </a>
                ))}
            </nav>

            <div className="nav-actions">
                <ThemeToggle />
                <a href={RESUME_URL} className="resume-btn" target="_blank" rel="noopener noreferrer">résumé →</a>
            </div>

            <button
                className="mobile-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
            >
                {isOpen ? '✕' : '☰'}
            </button>
        </div>

        {isOpen && (
            <nav className="mobile-nav" aria-label="Mobile">
                {NAV.map((item, i) => (
                    <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                        <span className="nav-index">{String(i + 1).padStart(2, '0')}</span>
                        {item.label}
                    </a>
                ))}
                <a href={RESUME_URL} onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">
                    <span className="nav-index">↗</span>résumé
                </a>
            </nav>
        )}
    </header>
  )
}

export default Header;
