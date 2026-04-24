import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", course: "" });
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  const API_URL = "http://localhost:8080/api/students";

  const fetchStudents = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        id: Number(form.id),
        name: form.name,
        course: form.course,
      };

      const url = editingId ? `${API_URL}/${editingId}` : API_URL;
      const method = editingId ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setForm({ id: "", name: "", course: "" });
      setEditingId(null);
      fetchStudents();
    } catch (err) {
      console.error("Error saving student:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (editingId === id) {
        setEditingId(null);
        setForm({ id: "", name: "", course: "" });
      }
      fetchStudents();
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  const handleEdit = (student) => {
    setEditingId(student.id);
    setForm({ id: student.id, name: student.name, course: student.course });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm({ id: "", name: "", course: "" });
  };

  const filteredStudents = students.filter((student) => {
    const query = search.toLowerCase();
    return (
      student.name.toLowerCase().includes(query) ||
      student.course.toLowerCase().includes(query) ||
      String(student.id).includes(query)
    );
  });

  const distinctCourses = [...new Set(students.map((student) => student.course))].length;
  const latestStudent = students[students.length - 1];

  return (
    <div className="app-shell">
      <div className="hero-panel">
        <div>
          <span className="eyebrow">Student Portal</span>
          <h1>Campus Management Dashboard</h1>
          <p className="hero-copy">
            A polished student records experience for admissions, academics, and campus
            operations.
          </p>
        </div>
        <button className="button button--secondary" type="button" onClick={fetchStudents}>
          Refresh Data
        </button>
      </div>

      <div className="stats-grid">
        <article className="stat-card">
          <span className="stat-label">Total Students</span>
          <strong className="stat-value">{students.length}</strong>
        </article>
        <article className="stat-card">
          <span className="stat-label">Active Courses</span>
          <strong className="stat-value">{distinctCourses}</strong>
        </article>
        <article className="stat-card stat-card--accent">
          <span className="stat-label">Latest Enrollment</span>
          <strong className="stat-value">
            {latestStudent ? `${latestStudent.name}` : "No entries yet"}
          </strong>
        </article>
      </div>

      <main className="content-grid">
        <section className="card card--form">
          <div className="panel-header">
            <h2>Add New Student</h2>
            <p>Create new student records with a quick form.</p>
          </div>

          <form className="student-form" onSubmit={handleSubmit}>
            <div className="field-row">
              <label>
                Student ID
                <input
                  type="number"
                  value={form.id}
                  onChange={(e) => setForm({ ...form, id: e.target.value })}
                  placeholder="1001"
                  required
                />
              </label>
              <label>
                Course
                <input
                  type="text"
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  placeholder="Web Development"
                  required
                />
              </label>
            </div>

            <label>
              Full Name
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Aisha Khan"
                required
              />
            </label>

            <div className="form-button-row">
              <button type="submit" className="button button--primary">
                {editingId ? "Save Changes" : "Add Student"}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="button button--secondary button--muted"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="card card--table">
          <div className="panel-header panel-header--spread">
            <div>
              <h2>Student Records</h2>
              <p>Search and manage student entries in real time.</p>
            </div>
            <input
              className="search-input"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by ID, name or course"
            />
          </div>

          {filteredStudents.length ? (
            <div className="table-wrap">
              <table className="student-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.course}</td>
                      <td>
                        <div className="action-group">
                          <button
                            className="button button--edit"
                            type="button"
                            onClick={() => handleEdit(student)}
                          >
                            Edit
                          </button>
                          <button
                            className="button button--danger"
                            type="button"
                            onClick={() => handleDelete(student.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-state">
              No matching students found. Try a broader search or add a new student.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
