<!-- src/components/User.vue -->
<template>
  <div>
    <div class="user-header">
      <img
        :src="user.avatar_url"
        alt="Profile Picture"
        class="profile-picture"
      />
    </div>
    <h1>{{ user.name }}</h1>
    <p>{{ user.bio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.user-header {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #333; */
  padding: 20px;
}

.profile-picture {
  width: 150px; /* Adjust the width as needed */
  height: auto;
  border-radius: 50%;
  margin-right: 15px;
  display: block; /* To remove extra space below the image */
}
</style>
