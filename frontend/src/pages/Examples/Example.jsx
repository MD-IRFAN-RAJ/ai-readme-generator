import React from "react";
import "./Example.css";

const Examples = () => {
  const examples = [
    {
      title: "AI Chat Application",
      description: "A modern chat application with AI integration",
      features: [
        "Real-time messaging",
        "AI-powered responses",
        "File sharing",
        "Group chats"
      ],
      tech: ["React", "Node.js", "Socket.io", "OpenAI API"],
      badge: "https://img.shields.io/badge/version-1.2.0-blue"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment processing",
        "Order tracking"
      ],
      tech: ["Vue.js", "Express", "MongoDB", "Stripe"],
      badge: "https://img.shields.io/badge/license-MIT-green"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather visualization application",
      features: [
        "5-day forecast",
        "Interactive maps",
        "Location search",
        "Weather alerts"
      ],
      tech: ["JavaScript", "Chart.js", "Weather API", "Geolocation"],
      badge: "https://img.shields.io/badge/build-passing-success"
    }
  ];

  return (
    <div className="examples-container">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
        <div className="bg-blob-3"></div>
      </div>

      <div className="examples-content">
        <h1 className="examples-title">
          <span className="title-accent">README</span> Examples
        </h1>
        <p className="examples-subtitle">
          Explore these beautifully crafted README examples for inspiration
        </p>

        <div className="examples-grid">
          {examples.map((example, index) => (
            <div key={index} className="example-card glass">
              <div className="example-header">
                <h3 className="example-title">{example.title}</h3>
                <img src={example.badge} alt="Badge" className="example-badge" />
              </div>
              <p className="example-description">{example.description}</p>
              
              <div className="example-features">
                <h4>Features</h4>
                <ul>
                  {example.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="example-tech">
                <h4>Tech Stack</h4>
                <div className="tech-tags">
                  {example.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <button className="view-example-btn">View Example</button>
            </div>
          ))}
        </div>

        <div className="editing-section glass">
          <h2 className="editing-title">
            <span className="title-icon">✏️</span>
            How to Edit Your Generated README
          </h2>
          
          <div className="editing-steps">
            <div className="editing-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Generate Your README</h3>
                <p>Use our AI generator to create a professional README tailored to your project.</p>
              </div>
            </div>
            
            <div className="editing-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Copy or Download</h3>
                <p>Copy the generated README to your clipboard or download it as a markdown file.</p>
              </div>
            </div>
            
            <div className="editing-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Customize to Your Needs</h3>
                <p>Edit the README to add your personal touch, specific details, or additional sections.</p>
              </div>
            </div>
            
            <div className="editing-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Add to Your Project</h3>
                <p>Place the README.md file in your project's root directory and push to GitHub.</p>
              </div>
            </div>
          </div>
          
          <div className="editing-tips">
            <h3>Pro Tips for Great READMEs</h3>
            <ul>
              <li>Use clear section headers and consistent formatting</li>
              <li>Include screenshots or GIFs to showcase your project</li>
              <li>Add badges for build status, version, and license</li>
              <li>Provide clear installation and usage instructions</li>
              <li>Include contribution guidelines for open source projects</li>
            </ul>
          </div>
        </div>
        
        <div className="cta-section">
          <h2>Ready to Create Your Own?</h2>
          <p>Generate a professional README for your project in minutes</p>
          <button className="cta-button">Generate README Now</button>
        </div>
      </div>
    </div>
  );
};

export default Examples;