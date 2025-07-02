import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';
const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id',
        'your_template_id',
        formRef.current,
        'your_public_key'
      )
      .then(
        () => {
          setSubmitted(true);
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div
      className={`px-4 py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* Background Gradient */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: isDark
            ? 'radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)'
            : 'radial-gradient(circle at top left, #dfe9f3, #ffffff)',
          opacity: 0.2,
          zIndex: 0
        }}
      ></div>

      <div className="position-relative z-1">
        <h2 className="text-center mb-5 display-4 fw-bold">Contact Me</h2>
        <div className="container">
          <form ref={formRef} onSubmit={sendEmail} className="row g-4">
            <div className="col-md-6">
              <input
                type="text"
                name="user_name"
                className="form-control rounded-3"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="user_email"
                className="form-control rounded-3"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                rows="5"
                className="form-control rounded-3"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button
                type="submit"
                className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-dark'} rounded-pill px-4 shadow-sm`}
              >
                Send Message
              </button>
            </div>
            {submitted && (
              <div className="col-12 text-center text-success mt-3 fw-semibold">
                ✅ Your message has been sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
