"use client";
import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <section className="e-contact">
      {/* LEFT SIDE */}
      <div className="e-left">
        <h3 className="e-c-heading">We Are Happy to Help You</h3>

        <p className="e-c-para">
          Have questions about mobile app development.
        </p>

        <div className="e-c-contactor">
          <img src="/aswin.png" alt="aswin" className="contact-img" />

          <div className="contact-info">
            <h4>Aswin V</h4>
            <p className="role">Customer Success Manager</p>

            <div className="contact-details">
              <span>aswin@evoqins.com</span>
              <span>+91 7411 629 279</span>
            </div>
          </div>
        </div>

        <div className="review-container">
          <img src="/iso.png" alt="" />
          <img src="/clutch.png" alt="" />
          <img src="/google.png" alt="" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="e-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First name*</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Phone number*</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="IND +91"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group full">
            <label>Tell us more*</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}