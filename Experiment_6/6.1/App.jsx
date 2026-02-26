import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function ControlledForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "Full Stack Development",
    termsAccepted: false,
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <header>
        <h1>Experiment 6.1 - Controlled Form</h1>
      </header>
      <div className="page">
        <div className="form-card">
          <h2>Controlled Form</h2>
          <p>All input values are managed using React state.</p>

        <form onSubmit={handleSubmit} className="form">
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>

          <label>
            Course
            <select name="course" value={formData.course} onChange={handleChange}>
              <option>Full Stack Development</option>
              <option>Data Science</option>
              <option>Cloud Computing</option>
              <option>Cyber Security</option>
            </select>
          </label>

          <label className="checkbox">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            I agree to the terms and conditions
          </label>

          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div className="result">
            <h3>Submitted Data</h3>
            <p><strong>Name:</strong> {submittedData.fullName}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Course:</strong> {submittedData.course}</p>
            <p>
              <strong>Terms Accepted:</strong>{" "}
              {submittedData.termsAccepted ? "Yes" : "No"}
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
  );
}

createRoot(document.getElementById("root")).render(<ControlledForm />);
