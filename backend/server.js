import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-readme", async (req, res) => {
  const { githubUrl, repoName, description, features, installation, usage } = req.body;

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
        model: "mistralai/mistral-7b-instruct", // or "mistralai/mixtral-8x7b-instruct"
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
    console.error("OpenRouter error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate README" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
