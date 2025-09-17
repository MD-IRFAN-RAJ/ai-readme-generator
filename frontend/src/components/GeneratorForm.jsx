import React, { useState } from "react";
import "./GeneratorForm.css";
import { useNavigate } from "react-router-dom";

const GenerateForm = () => {
  const [formData, setFormData] = useState({
    githubUrl: "",
    repoName: "",
    description: "",
    features: "",
    installation: "",
    usage: "",
  });

  const [readme, setReadme] = useState("");
  const [loading, setLoading] = useState(false);
  const [analytics, setAnalytics] = useState({
    views: "12,345",
    clones: "1,234",
    uniqueVisitors: "8,765",
    uniqueCloners: "987"
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const API_URL =
    import.meta.env.VITE_BACKEND_URL || "https://your-backend.onrender.com";

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/generate-readme`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      setReadme(data.readme);
      
      // In a real app, you'd fetch analytics from your backend
      // setAnalytics(data.analytics);
    } catch (err) {
      console.error("Fetch error:", err);
      setReadme(`Error: ${err.message}`);
    }
    setLoading(false);
  };

  const copyReadme = () => {
    navigator.clipboard.writeText(readme).then(() => {
      // Create a temporary notification
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.textContent = 'README copied to clipboard!';
      document.body.appendChild(notification);
      
      // Remove after animation completes
      setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
          notification.classList.remove('show');
          setTimeout(() => {
            document.body.removeChild(notification);
          }, 300);
        }, 2000);
      }, 10);
    });
  };

  const downloadReadme = () => {
    const blob = new Blob([readme], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

const navigate = useNavigate();

  // Navigation handlers
  const handleHomeClick = () => {
    navigate("/"); // Navigates to home page
    setMenuOpen(false);
  };

  const handleExamplesClick = () => {
    navigate("/examples");
    setMenuOpen(false);
  };

  const handlePricingClick = () => {
    navigate("/pricing");
    setMenuOpen(false);
  };

  return (
    <>
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
        <div className="bg-blob-3"></div>
      </div>
      
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">🤖</span>
          Readme<span className="logo-accent">AI</span>
        </div>
        
        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#" className="nav-link" onClick={handleHomeClick}>Home</a>
          <a href="#" className="nav-link" onClick={handleExamplesClick}>Examples</a>
          <a href="#" className="nav-link" onClick={handlePricingClick}>Pricing</a>
          <button className="generate-btn nav-btn">Generate README</button>
        </nav>
      </header>

      {/* MAIN SECTION */}
      <div className="generate-container">
        <h1 className="main-title">
          <span className="title-accent">AI README</span> Generator
        </h1>
        <p className="subtitle">Fill in the details below to generate a professional README for your project</p>
        
        <div className="main">
          {/* Left Form */}
          <div className="card form-card glass">
            <div className="form-section">
              <h3 className="section-title">
                <span className="section-icon">🔗</span>
                GitHub URL
              </h3>
              <input
                name="githubUrl"
                placeholder="https://github.com/user/repo"
                onChange={handleChange}
                className="glass-input"
              />
              <input
                name="repoName"
                placeholder="Repository Name (e.g. mj-awesome-project)"
                onChange={handleChange}
                className="glass-input"
              />
            </div>
            
            <div className="form-section">
              <h3 className="section-title">
                <span className="section-icon">📝</span>
                Description
              </h3>
              <textarea
                name="description"
                placeholder="A brief description of your project."
                onChange={handleChange}
                className="glass-input"
              />
            </div>
            
            <div className="form-section">
              <h3 className="section-title">
                <span className="section-icon">✨</span>
                Features
              </h3>
              <textarea
                name="features"
                placeholder="List the key features, one per line."
                onChange={handleChange}
                className="glass-input"
              />
            </div>
            
            <div className="form-section">
              <h3 className="section-title">
                <span className="section-icon">⚙️</span>
                Installation
              </h3>
              <textarea
                name="installation"
                placeholder="Provide installation instructions."
                onChange={handleChange}
                className="glass-input"
              />
            </div>
            
            <div className="form-section">
              <h3 className="section-title">
                <span className="section-icon">🚀</span>
                Usage
              </h3>
              <textarea
                name="usage"
                placeholder="Explain how to use your project with examples."
                onChange={handleChange}
                className="glass-input"
              />
            </div>
            
            <button
              className="generate-btn full-width glass-btn"
              onClick={handleGenerate}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Generating...
                </>
              ) : (
                <>
                  <span className="btn-icon">✨</span>
                  Generate README
                </>
              )}
            </button>
          </div>

          {/* Right README Preview */}
          <div className="card readme-card glass">
            <h2 className="preview-title">
              <span className="title-icon">📄</span>
              Generated README
            </h2>
            <div className="readme-content">
              <pre>{readme || "Your generated README will appear here."}</pre>
            </div>
            {readme && (
              <div className="actions">
                <button onClick={copyReadme} className="action-btn glass-btn">
                  <span className="btn-icon">📋</span>
                  Copy
                </button>
                <button onClick={downloadReadme} className="action-btn glass-btn">
                  <span className="btn-icon">⬇️</span>
                  Download
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Analytics Section */}
        <div className="analytics-section glass">
          <h2 className="analytics-title">
            <span className="title-icon">📊</span>
            Analytics
          </h2>
          <div className="analytics-grid">
            <div className="analytics-card glass-card">
              <div className="analytics-icon">👁️</div>
              <div className="analytics-label">Views</div>
              <div className="analytics-value">{analytics.views}</div>
            </div>
            <div className="analytics-card glass-card">
              <div className="analytics-icon">📦</div>
              <div className="analytics-label">Clones</div>
              <div className="analytics-value">{analytics.clones}</div>
            </div>
            <div className="analytics-card glass-card">
              <div className="analytics-icon">👤</div>
              <div className="analytics-label">Unique Visitors</div>
              <div className="analytics-value">{analytics.uniqueVisitors}</div>
            </div>
            <div className="analytics-card glass-card">
              <div className="analytics-icon">👥</div>
              <div className="analytics-label">Unique Cloners</div>
              <div className="analytics-value">{analytics.uniqueCloners}</div>
            </div>
          </div>
          <div className="api-credit">Powered by GitHub API . Built with ❤️ by Md Irfan Raj</div>
        </div>
      </div>
    </>
  );
};

export default GenerateForm;