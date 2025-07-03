import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
const projectData = [
  {
    title: 'GST Billing System',
    description: 'A complete billing solution with GST calculation for small businesses.',
    tech: 'Python, Tkinter',
    link: 'https://github.com/Siva-Balan-V/gst-billing-system'
  },
  {
    title: 'Yummy Finder',
    description: 'A smart restaurant and food discovery app with recommendation features.',
    tech: 'Python, Django, Bootstrap',
    link: 'https://github.com/Siva-Balan-V/yummy-finder'
  },
  {
    title: 'Air Quality Predictor',
    description: 'A data science project that predicts air quality index using ML models and visualizations.',
    tech: 'Python, Scikit-learn, Flask',
    link: 'https://github.com/Siva-Balan-V/NM_Sivabalan_AirPreQ'
  },
  {
    title: 'Customer Churn Prediction',
    description: 'A machine learning model to predict customer churn in e-commerce platforms.',
    tech: 'Python, Pandas, Streamlit',
    link: 'https://github.com/Siva-Balan-V/customer-churn'
  }
];

const Projects = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`px-4 py-5 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      {/* Background gradient */}
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
        <h2 className="mb-5 text-center display-4 fw-bold">Projects</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {projectData.map((project, index) => (
              <motion.div
                className="col"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden"
                  style={{
                    background: isDark
                      ? 'linear-gradient(145deg, #1e2a38, #2f3e4d)' // ✨ More contrast & visibility
                      : 'linear-gradient(135deg, #ffffff 0%, #dbeafe 100%)',
                    color: isDark ? '#f8f9fa' : '#212529',
                    border: isDark ? '1px solid #495057' : '1px solid #dee2e6'
                  }}
                >
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold mb-2">{project.title}</h5>
                    <p className="card-text mb-2">{project.description}</p>
                    <p className="small mb-3">
                      <strong>Tech Stack:</strong> {project.tech}
                    </p>
                    <a
                      href={project.link}
                      className={`btn ${isDark ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm rounded-pill px-4 shadow-sm`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};   
export default Projects;
