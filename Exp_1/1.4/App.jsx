import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function FormApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd, #f5f5f5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "380px",
        }}
      >
        {/* INNER BORDER */}
        <div
          style={{
            border: "2px solid #90caf9",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "8px",
              color: "#1976d2",
            }}
          >
            Contact Form
          </h2>
          <p
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#666",
              fontSize: "0.9rem",
            }}
          >
            Please fill in your details below
          </p>

          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              style={inputStyle}
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              style={inputStyle}
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              style={inputStyle}
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="3"
              style={{ ...inputStyle, borderRadius: "12px", resize: "none" }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "10px",
                backgroundColor: "#1976d2",
                color: "white",
                border: "none",
                borderRadius: "20px",
                fontSize: "0.95rem",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>

          {submittedData && (
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: "#e3f2fd",
                borderRadius: "8px",
                border: "1px solid #90caf9",
                fontSize: "0.9rem",
                color: "#333",
              }}
            >
              <strong>Submitted Details</strong>
              <p>Name: {submittedData.name}</p>
              <p>Email: {submittedData.email}</p>
              <p>Phone: {submittedData.phone}</p>
              <p>Message: {submittedData.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  marginBottom: "12px",
  borderRadius: "20px",
  border: "1px solid #90caf9",
  fontSize: "0.9rem",
  outline: "none",
  boxSizing: "border-box",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormApp />
  </StrictMode>
);
