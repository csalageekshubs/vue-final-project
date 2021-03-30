<template>
  <div class="app-header">
    <img @click="onLogoClicked" class="app-logo" src="../assets/logo.png" />
    <nav>
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/author">Author</router-link>
      <router-link class="nav-link" to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    onLogoClicked() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.app-header {
  padding: 15px;
  background-color: lightgreen;
  display: flex;
  justify-content: space-between;
}

.app-logo {
  height: 40px;
  width: 45px;
  padding: 10px;
  border: 1px solid gray;
  cursor: pointer;
}

.nav-link {
  font-weight: bold;
}

.nav-link + .nav-link {
  margin-left: 15px;
}
</style>
