<template>
  <div class="app-footer">
    <div class="social-networks">Facebook, Instagram, Twitter</div>
    <div class="copyright">Vue 2 demo</div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.app-footer {
  padding: 15px;
  height: 100px;
  background-color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-networks {
  margin-right: 15px;
}

.copyright {
  font-weight: bold;
  font-size: 20px;
}
</style>
