import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([
        ...tasks,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #e3f2fd, #f5f5f5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "420px",
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
            To-Do List
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "15px",
              fontSize: "0.9rem",
            }}
          >
            Total: {tasks.length} | Completed: {completedCount}
          </p>

          {/* INPUT ROW */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              placeholder="Enter a task..."
              style={{
                flex: 1,
                padding: "10px 14px",
                fontSize: "0.95rem",
                border: "1px solid #90caf9",
                borderRadius: "20px",
                outline: "none",
              }}
            />
            <button
              onClick={addTask}
              style={{
                padding: "10px 18px",
                backgroundColor: "#1976d2",
                color: "white",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}
            >
              Add
            </button>
          </div>

          {/* TASK LIST */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {tasks.map((task) => (
              <li
                key={task.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  marginBottom: "8px",
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                <span
                  onClick={() => toggleComplete(task.id)}
                  style={{
                    cursor: "pointer",
                    textDecoration: task.completed ? "line-through" : "none",
                    color: task.completed ? "#888" : "#333",
                    flex: 1,
                    fontSize: "0.95rem",
                  }}
                >
                  {task.text}
                </span>

                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    marginLeft: "10px",
                    padding: "6px 12px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "15px",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          {tasks.length === 0 && (
            <p
              style={{
                textAlign: "center",
                color: "#999",
                marginTop: "15px",
                fontSize: "0.9rem",
              }}
            >
              No tasks yet. Add one above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoList />
  </StrictMode>
);
