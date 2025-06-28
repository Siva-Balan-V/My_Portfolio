import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: 'GST Billing System',
    description: 'A billing application that generates GST-compliant invoices and manages customer transactions.',
    tech: 'Python, Tkinter, SQLite',
    link: 'https://github.com/yourusername/gst-billing-system'
  },
  {
    title: 'Yummy Finder',
    description: 'A food discovery app that suggests restaurants and dishes based on user preferences.',
    tech: 'Python, Flask, HTML/CSS, API',
    link: 'https://github.com/yourusername/yummy-finder'
  },
  {
    title: 'AirPreQ – Air Quality Predictor',
    description: 'Predicts air quality index (AQI) using ML models and visualizes pollution levels.',
    tech: 'Python, Sklearn, Matplotlib, Flask',
    link: 'https://github.com/Siva-Balan-V/NM_Sivabalan_AirPreQ'
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Machine learning project to predict if a customer will churn based on their usage patterns.',
    tech: 'Python, Pandas, Scikit-learn, Flask',
    link: 'https://github.com/yourusername/customer-churn'
  },
  {
    title: 'Movie Recommendation System',
    description: 'AI-powered app that recommends movies based on user ratings and preferences.',
    tech: 'Python, Streamlit, Cosine Similarity',
    link: 'https://github.com/yourusername/movie-recommendation'
  }
];

const Projects = () => (
  <div>
    <h2 className="mb-4">Projects</h2>
    <Row xs={1} md={2} className="g-4">
      {projects.map((project, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Card.Text><strong>Tech Stack:</strong> {project.tech}</Card.Text>
              <Button variant="primary" href={project.link} target="_blank">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Projects;