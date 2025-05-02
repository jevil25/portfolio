import React, { useRef, useState } from 'react';
import "../css/Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm('service_j3rx5lf', 'template_hhuwv8s', form.current, 'AYg12w0x7Ax9ElCjN')
      .then((result) => {
        setShowMessage(true);
        setSending(false);
        e.target.reset();
        setTimeout(() => {
          setShowMessage(false);
        }, 5000); // Hide message after 5 seconds
      }, (error) => {
        console.log(error.text);
        setSending(false);
      });
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="Contact">
      <form ref={form} onSubmit={sendEmail} className='Contact1'>
        <div className="form-row">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" name="fname" id="name" className="form-input" required />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input type="email" name="user_email" id="email" className="form-input" required />
        </div>
        <div className="form-row">
          <label htmlFor="message" className="message">Message</label>
          <textarea name="message" id="message" className="from-textarea" required></textarea>
        </div>
        <button type="submit" className="btn btn-block" disabled={sending}>
          {sending ? 'Sending...' : 'Submit'}
        </button>
        {showMessage && (
          <div className="success-message">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
      </form>
      <div className='contact2'>
        <article class="contact-info">
          <h2>Get in touch!</h2>
          <p><a href="https://www.instagram.com/aaron_naz25/"><i class="fa-brands fa-instagram"></i>aaron_naz25</a></p>
          <p><a href="https://www.linkedin.com/in/aaron-nazareth-6580311b6/"><i class="fa-brands fa-linkedin"></i>Aaron Nazareth</a></p>
          <p><a href="mailto:jevil257@gmail.com"><i class="fa-solid fa-envelope"></i>jevil257@gmail.com</a></p>
          <p><a href="https://github.com/jevil25"><i class="fa-brands fa-github"></i>jevil25</a></p>
        </article>
      </div>
    </div>
  );
}

export default Contact;
