<!-- src/components/Repositories.vue -->
<template>
  <div>
    <h2>{{ filteredRepositories.length }} Repositories</h2>
    
    <div class="search-container">
      <input 
        type="text" 
        v-model="searchTerm" 
        placeholder="Search repositories..." 
        class="search-input"
      />
    </div>
    
    <div v-if="filteredRepositories.length === 0">No repositories found.</div>
    <div v-else class="repo-container">
      <div v-for="repo in filteredRepositories" :key="repo.id" class="repo-card">
        <h3>{{ repo.name }}</h3>
        <p>{{ repo.description }}</p>
        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer"
          >View on GitHub</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repositories: Array,
  },
  data() {
    return {
      searchTerm: '',
    };
  },
  computed: {
    filteredRepositories() {
      if (!this.searchTerm.trim()) {
        return this.repositories;
      }
      
      const term = this.searchTerm.toLowerCase();
      return this.repositories.filter(repo => 
        repo.name.toLowerCase().includes(term) || 
        (repo.description && repo.description.toLowerCase().includes(term))
      );
    }
  },
  methods: {
    async getRepositories() {
      try {
        const response = await githubAPI.get('/repos?per_page=100&sort=updated');
        return response.data;
      } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
      }
    }
  }
};
</script>

<style scoped>
.repo-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.repo-card {
  background-color: #2c3e50;
  color: #42b983;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  width: calc(50% - 20px); /* 2 columns with spacing between them */
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}

@media screen and (max-width: 600px) {
  .repo-card {
    width: 100%; /* Full width for small screens */
  }
}

p {
  color: #ecf0f1;
}

.repo-card:hover {
  background-color: #34495e;
}

.repo-card h3 {
  margin-bottom: 8px;
}

.repo-card p {
  margin-bottom: 12px;
}

.repo-card a {
  color: #3498db;
  text-decoration: none;
}

.search-container {
  margin: 20px auto;
  max-width: 500px;
}

.search-input {
  width: 100%;
  padding: 10px 15px;
  border-radius: 20px;
  border: 1px solid #ddd;
  font-size: 16px;
  background-color: #2c3e50;
  color: #ecf0f1;
}

.search-input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.25);
}
</style>
