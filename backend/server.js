import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();

// Log every incoming request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// CORS configuration
app.use(cors({
  origin: "https://aireadmegenerator.vercel.app",
  methods: ["POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

// Handle preflight requests
app.options('*', cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("AI README Generator Backend is running!");
});

// README generation route
app.post("/generate-readme", async (req, res) => {
  const { githubUrl, repoName, description, features, installation, usage } = req.body;

  // Input validation
  if (!githubUrl || !repoName || !description) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  // Basic input sanitization
  if (repoName.includes('/:') || githubUrl.includes('/:')) {
    return res.status(400).json({ error: "Invalid input format." });
  }

  try {
    const prompt = `
Generate a professional and beautiful README.md for a GitHub project.
GitHub Repository URL: ${githubUrl}
Project Name: ${repoName}
Description: ${description}
Key Features: ${features}
Installation Instructions: ${installation}
Usage Guide: ${usage}

Use proper markdown formatting, emojis, and sections like Introduction, Features, Installation, Usage, Contributing, License, etc.
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const generatedReadme = response.data.choices[0].message.content;
    res.status(200).json({ readme: generatedReadme });

  } catch (error) {
    console.error("OpenRouter Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate README" });
  }
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
