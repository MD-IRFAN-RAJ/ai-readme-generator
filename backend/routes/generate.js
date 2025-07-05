import express from "express";
import { getRepoData } from "../services/githubService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { githubUrl } = req.body;

  if (!githubUrl) return res.status(400).json({ error: "GitHub URL is required." });

  try {
    const repoInfo = await getRepoData(githubUrl);

    const readme = `
# ${repoInfo.name}

${repoInfo.description || "A GitHub repository."}

## 🛠 Tech Used
- ${repoInfo.language}
- Topics: ${repoInfo.topics.join(", ")}

## 📈 Stats
- ⭐ Stars: ${repoInfo.stars}
- 🍴 Forks: ${repoInfo.forks}

## 🚀 Installation

\`\`\`bash
git clone ${githubUrl}
cd ${repoInfo.name}
npm install
npm start
\`\`\`

## 📄 License
This project is licensed under the MIT License.
    `;

    res.json({ readme: readme.trim() });
  } catch (err) {
    console.error("Failed to generate README:", err.message);
    res.status(500).json({ error: "Failed to generate README." });
  }
});

export default router;
