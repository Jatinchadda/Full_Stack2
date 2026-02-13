export default function Dashboard() {
    return (
        <div className="app-container">
        <div className="page-content">
            <h1>Dashboard Page</h1>
            <p>
            Welcome to your Dashboard. Here you can see an overview of your activities and statistics.
            </p>
            <div>
            <h2>Skills</h2>
            <div className="skills-container">
                <button className="skill-button">Machine Learning</button>
                <button className="skill-button">Data Analysis</button>
                <button className="skill-button">Python Programming</button>
                <button className="skill-button">SQL</button>
                <button className="skill-button">Data Science</button>
            </div>
            </div>
            <div>
            <h2>Projects</h2>
            <div className="projects-section">
                <h3>1. Stock Price Prediction System</h3>
                <ul>
                <li>Collected historical market data and external indicators for target stocks.</li>
                <li>Performed data cleaning and feature engineering (technical indicators, lag features).</li>
                <li>Designed and trained time-series models (LSTM and ensemble regressors) to forecast short-term prices.</li>
                <li>Evaluated model performance using RMSE and directional accuracy; tuned hyperparameters for stability.</li>
                <li>Exposed predictions via a lightweight API for integration with front-end dashboards.</li>
                </ul>
            </div>
            <div className="projects-section">
                <h3>2. Blogging Platform</h3>
                <ul>
                <li>Built a full-stack blogging platform supporting user authentication and profile management.</li>
                <li>Implemented CRUD operations for posts with a WYSIWYG editor and markdown support.</li>
                <li>Added search, tagging, and pagination to improve content discovery and navigation.</li>
                <li>Designed RESTful APIs and integrated a database for persistent storage of posts and comments.</li>
                <li>Deployed the app with basic CI/CD and implemented role-based access for authors and admins.</li>
                </ul>
            </div>
            </div>
            <div className="instruction">
            <strong>Instructions:</strong> To visit the Profile page, manually change the URL in the address bar to <code>/profile</code>
            </div>
        </div>
        </div>
    )
}