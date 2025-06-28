import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Alert, Container } from 'react-bootstrap';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y75n30t', 'template_kxkekff', form.current, 'k7s_OWQsr9z_IjboP')
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        form.current.reset();
      }, () => {
        setStatus({ type: 'danger', message: 'Failed to send message. Try again later.' });
      });
  };

  return (
    <Container className="mt-4">
      <h2>Contact</h2>

      {status.message && (
        <Alert variant={status.type} className="mt-3">
          {status.message}
        </Alert>
      )}

      <Form ref={form} onSubmit={sendEmail} className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={4} placeholder="Type your message..." required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
