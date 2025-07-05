// App.jsx or GenerateReadme.jsx
import React, { useState } from "react";
import "../App.css";
import "./GeneratorForm"

const App = () => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/generate-readme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setReadme(data.readme || "Error generating README");
    } catch (err) {
      setReadme("Error connecting to backend.");
    }
    setLoading(false);
  };

  const copyReadme = () => {
    navigator.clipboard.writeText(readme).then(() => {
      alert("README copied to clipboard!");
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

  return (
    <div className="container">
      <h1>🧠 AI README Generator</h1>
      <div className="form">
        <input name="repoName" placeholder="Project Name" onChange={handleChange} />
        <input name="githubUrl" placeholder="GitHub Repo Link" onChange={handleChange} />
        <textarea name="description" placeholder="Short Description" onChange={handleChange} />
        <textarea name="features" placeholder="Key Features" onChange={handleChange} />
        <textarea name="installation" placeholder="Installation Steps" onChange={handleChange} />
        <textarea name="usage" placeholder="Usage Instructions" onChange={handleChange} />

        <button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate README"}
        </button>
      </div>

      {readme && (
  <div
    id="readme-container"
    style={{
      color: "white",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "20px",
      fontFamily: "monospace",
      backgroundColor: "#000033",
    }}
  >
    <pre
      id="readme-content"
      style={{
        whiteSpace: "pre-wrap", // ✅ Override default pre behavior
        wordBreak: "break-word",
        overflowWrap: "break-word",
      }}
    >
      {readme}
    </pre>
    <div style={{ marginTop: "10px" }}>
      <button onClick={copyReadme} style={{ marginRight: "10px" }}>📋 Copy</button>
      <button onClick={downloadReadme}>⬇️ Download</button>
    </div>
  </div>
)}

    </div>
  );
};

export default App;
