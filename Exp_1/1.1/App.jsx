import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <div style={innerBox}>
          <h2 style={titleStyle}>Counter App</h2>
          <h1 style={{ fontSize: "3rem", margin: "20px 0" }}>{count}</h1>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button style={greenBtn} onClick={() => setCount(count + 1)}>
              Increment
            </button>
            <button style={redBtn} onClick={() => setCount(count - 1)}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const pageStyle = {
  height: "100vh",
  background: "linear-gradient(135deg, #e3f2fd, #f5f5f5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  width: "320px",
};

const innerBox = {
  border: "2px solid #90caf9",
  borderRadius: "10px",
  padding: "20px",
  textAlign: "center",
};

const titleStyle = { color: "#1976d2" };

const greenBtn = {
  padding: "10px 15px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
};

const redBtn = {
  ...greenBtn,
  backgroundColor: "#f44336",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Counter />
  </StrictMode>
);
