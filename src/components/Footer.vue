<!-- src/components/Footer.vue -->
<template>
  <footer>
    <p>
      ❤️ Thanks from
      <a :href="webLink" target="_blank" rel="noopener noreferrer"
        >MokammelTanvir</a
      >
      |
      <a :href="githubLink" target="_blank" rel="noopener noreferrer">GitHub</a>
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      webLink: "https://mokammeltanvir.com",
      githubLink: "https://github.com/mokammeltanvir",
    };
  },
};
</script>

<style scoped>
footer {
  padding: 10px;
  text-align: center;
}

footer a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
</style>
