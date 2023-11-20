// src/services/GitHubService.js
import axios from "axios";

const githubUsername = "mokammeltanvir";

const githubAPI = axios.create({
  baseURL: `https://api.github.com/users/${githubUsername}`,
});

export const getRepositories = async () => {
  try {
    const response = await githubAPI.get("/repos", {
      params: {
        per_page: 100, // Adjust the per_page parameter to the number of repositories you want to fetch per page
        page: 1, // You can increment this page number to get more repositories
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};

export const getUser = async () => {
  try {
    const response = await githubAPI.get("");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {};
  }
};
