import axios from "axios";

export async function getRepoData(githubUrl) {
  const parts = githubUrl.split("/");
  const owner = parts[3];
  const repo = parts[4].replace(".git", "");

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;
  const response = await axios.get(apiUrl);

  return {
    name: response.data.name,
    description: response.data.description || "No description provided.",
    language: response.data.language || "N/A",
    topics: response.data.topics || [],
    stars: response.data.stargazers_count,
    forks: response.data.forks_count,
  };
}
