<template>
  <div id="app">
    <User :user="user" />
    <Repositories :repositories="repositories" />
    <Footer />
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
    };
  },
  async mounted() {
    this.user = await getUser();
    this.repositories = await getRepositories();
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
</style>
