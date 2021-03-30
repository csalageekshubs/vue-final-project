<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton"
};
</script>

<style scoped>
button {
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
}
</style>
