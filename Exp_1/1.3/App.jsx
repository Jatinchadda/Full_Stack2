import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const lightTheme = {
    background: "linear-gradient(135deg, #e3f2fd, #f5f5f5)",
    cardBg: "#ffffff",
    text: "#000000",
    border: "#90caf9",
    button: "#1976d2",
  };

  const darkTheme = {
    background: "#1e1e1e",
    cardBg: "#2d2d2d",
    text: "#ffffff",
    border: "#444",
    button: "#2196F3",
  };

  const current = theme === "light" ? lightTheme : darkTheme;

  return (
    <div
      style={{
        height: "100vh",
        background: current.background,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          backgroundColor: current.cardBg,
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "360px",
        }}
      >
        {/* INNER BORDER */}
        <div
          style={{
            border: `2px solid ${current.border}`,
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            color: current.text,
            transition: "0.3s",
          }}
        >
          <h2 style={{ marginBottom: "10px", color: "#1976d2" }}>
            Theme Toggle
          </h2>

          <p style={{ marginBottom: "20px", color: "#666", fontSize: "0.95rem" }}>
            Current Mode: <strong>{theme === "light" ? "Light" : "Dark"}</strong>
          </p>

          <button
            onClick={toggleTheme}
            style={{
              padding: "12px 30px",
              backgroundColor: current.button,
              color: "white",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeToggle />
  </StrictMode>
);
