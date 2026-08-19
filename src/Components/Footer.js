import React from 'react';
import "../css/Footer.css"

const LINKS = [
  { href: 'mailto:jevil257@gmail.com', icon: 'fa-solid fa-envelope', label: 'jevil257@gmail.com' },
  { href: 'https://github.com/jevil25', icon: 'fa-brands fa-github', label: 'github' },
  { href: 'https://www.linkedin.com/in/aaron-nazareth-6580311b6/', icon: 'fa-brands fa-linkedin', label: 'linkedin' },
  { href: 'https://www.instagram.com/aaron_naz25/', icon: 'fa-brands fa-instagram', label: 'instagram' },
];

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-inner">
        <div className="footer-top">
          <span className="footer-mark">[AN]</span>
          <nav className="footer-links" aria-label="Contact">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <i className={l.icon} aria-hidden="true"></i>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <span className="footer-text">designed &amp; built in react · bengaluru</span>
          <span className="footer-year">© {new Date().getFullYear()} aaron nazareth</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
