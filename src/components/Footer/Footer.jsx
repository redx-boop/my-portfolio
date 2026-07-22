import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'GH', href: 'https://github.com/redx-boop' },
  { label: 'LI', href: 'https://www.linkedin.com/in/mugisha-chrispin-16b913423/' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Mugisha Chrispin</h3>
            <p>
              Software developer focused on building reliable, user-friendly applications
              with clean code and thoughtful design.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              {QUICK_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Mugisha Chrispin. All rights reserved.</p>
          <p className="closing">Built with care, one component at a time.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
