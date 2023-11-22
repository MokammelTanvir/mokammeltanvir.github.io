<!-- src/components/Repositories.vue -->
<template>
  <div>
    <h2>{{ repositories.length }} Repositories</h2>
    <div v-if="repositories.length === 0">No repositories found.</div>
    <div v-else class="repo-container">
      <div v-for="repo in repositories" :key="repo.id" class="repo-card">
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
</style>
