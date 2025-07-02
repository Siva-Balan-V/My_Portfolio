import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`py-5 px-3 position-relative overflow-hidden ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-gradient bg-opacity-25"
        style={{
          background: isDark
            ? 'radial-gradient(circle at bottom left, #0f2027, #203a43, #2c5364)'
            : 'radial-gradient(circle at bottom left, #fdfbfb, #ebedee)'
        }}
      ></div>

      <div className="position-relative z-1 container">
        <motion.h2
          className="display-4 fw-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center lead mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Feel free to reach out using the form below.
        </motion.p>

        <form className="row g-3 justify-content-center">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary px-5 rounded-pill shadow-sm">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
