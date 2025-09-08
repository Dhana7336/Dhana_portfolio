import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import './Contact.scss';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/mjkeoyae", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">CONTACT WITH ME</h2>
      
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h3 className="form-title">Send a Message</h3>
          <p className="form-description">
          If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests. 
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error">Name is required</span>}
            </div>
            
            <div className="input-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error">Email is required</span>}
            </div>
            
            <div className="input-group">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                placeholder="Type your message here..."
                rows="5"
              ></textarea>
              {errors.message && <span className="error">Message is required</span>}
            </div>
            
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> SEND MESSAGE 😊
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h3 className="info-title">Get in Touch</h3>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div className="contact-text">
                <a href="mailto:dhanaparupudi1@gmail.com">dhanaparupudi1@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaPhone /></div>
              <div className="contact-text">
                <a href="tel:+5519987777">+5519987777</a>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://linkedin.com" className="social-link"><FaLinkedin /></a>
            <a href="https://github.com" className="social-link"><FaGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
}