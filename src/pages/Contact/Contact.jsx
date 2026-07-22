import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <SectionTitle
          title="Contact"
          subtitle="Have a question or want to work together? Send me a message."
        />

        <div className="contact-grid">
          <div>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-10) 0' }}>
                <h3>Message sent successfully.</h3>
                <p style={{ marginTop: 'var(--space-3)' }}>
                  I will get back to you as soon as possible.
                </p>
                <Button onClick={() => setSubmitted(false)} style={{ marginTop: 'var(--space-6)' }}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" variant="primary" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div className="contact-info-item">
              <span className="label">Email</span>
              <a href="mailto:mugishasting@gmail.com" className="value">
                mugishasting@gmail.com
              </a>
            </div>

            <div className="contact-divider"></div>

            <div className="contact-info-item">
              <span className="label">Phone</span>
              <span className="value">(250) 7930 45 460</span>
            </div>

            <div className="contact-divider"></div>

            <div className="contact-info-item">
              <span className="label">Location</span>
              <span className="value">Kigali, Rwanda</span>
            </div>

            <div className="contact-divider"></div>

            <div className="contact-info-item">
              <span className="label">GitHub</span>
              <a
                href="https://github.com/redx-boop"
                target="_blank"
                rel="noopener noreferrer"
                className="value"
              >
                github.com/redx-boop
              </a>
            </div>

            <div className="contact-divider"></div>

            <div className="contact-info-item">
              <span className="label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/mugisha-chrispin-16b913423/"
                target="_blank"
                rel="noopener noreferrer"
                className="value"
              >
                linkedin.com/in/mugisha-chrispin-16b913423
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
