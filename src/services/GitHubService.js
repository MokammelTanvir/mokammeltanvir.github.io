// src/services/GitHubService.js
import axios from "axios";

const githubUsername = import.meta.env.VITE_GITHUB_USERNAME || "mokammeltanvir";

const githubAPI = axios.create({
  baseURL: `https://api.github.com/users/${githubUsername}`,
});

export async function getUser() {
  try {
    const response = await githubAPI.get("");
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return {};
  }
}

export async function getRepositories() {
  try {
    let allRepos = [];
    let page = 1;
    let hasMorePages = true;
    
    while (hasMorePages) {
      // Changed sort to 'created' and direction to 'desc' for newest first
      // type=public to only show public repositories
      const response = await githubAPI.get(`/repos?per_page=100&page=${page}&sort=created&direction=desc&type=public`);
      const repos = response.data;
      
      // Filter to include only public repos (additional safety)
      const publicRepos = repos.filter(repo => !repo.private);
      
      allRepos = [...allRepos, ...publicRepos];
      
      // Check if we have more pages
      if (repos.length < 100) {
        hasMorePages = false;
      } else {
        page++;
      }
    }
    
    return allRepos;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
}
