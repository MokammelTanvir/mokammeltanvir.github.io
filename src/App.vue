<template>
  <div id="app">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Loading profile data...</p>
    </div>
    <template v-else>
      <User :user="user" />
      <Repositories :repositories="repositories" />
      <Footer />
    </template>
  </div>
</template>

<script>
import { getUser, getRepositories } from "./services/GitHubService";
import User from "./components/User.vue";
import Repositories from "./components/Repositories.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
      user: {},
      repositories: [],
      loading: true,
    };
  },
  async mounted() {
    try {
      this.loading = true;
      this.user = await getUser();
      this.repositories = await getRepositories();
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      this.loading = false;
    }
  },
  components: {
    User,
    Repositories,
    Footer,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 2em;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #42b983;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
