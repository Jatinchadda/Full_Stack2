import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function ValidationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in|[a-z]{2,})$/i;
    if (!emailPattern.test(email)) {
      return "Enter a valid email with @ and .com, .in, or a country code.";
    }

    return "";
  };

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required.";
    }

    if (password.length < 5) {
      return "Password must have at least 5 characters.";
    }

    if (!/^[A-Z]/.test(password)) {
      return "Password must start with a capital letter.";
    }

    if (!/\d/.test(password)) {
      return "Password must include at least one number.";
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
      return "Password must include at least one special character.";
    }

    return "";
  };

  const validateForm = (data) => {
    const nextErrors = {
      email: validateEmail(data.email),
      password: validatePassword(data.password),
    };

    setErrors(nextErrors);
    return !nextErrors.email && !nextErrors.password;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextData = { ...formData, [name]: value };
    setFormData(nextData);

    if (submitted) {
      validateForm(nextData);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (validateForm(formData)) {
      alert("Form submitted successfully.");
      setFormData({ email: "", password: "" });
      setErrors({ email: "", password: "" });
      setSubmitted(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Experiment 6.2 - Form Validation</h1>
      </header>
      <div className="page">
        <div className="form-card">
          <h2>Client-Side Form Validation</h2>
          <p>Validate inputs before submission using React state.</p>

        <form onSubmit={handleSubmit} className="form" noValidate>
          <label>
            Email ID
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
  );
}

createRoot(document.getElementById("root")).render(<ValidationForm />);
