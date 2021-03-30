<template>
  <div @click="onItemClicked" class="post-item">
    <img class="post-thumbnail" src="@/assets/logo.png" />
    <div>
      <p class="post-title">{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onItemClicked() {
      this.$router.push(`/posts/${this.post.id}`);
    }
  }
};
</script>

<style scoped>
.post-item {
  background-color: #eeeeee;
  text-align: left;
  padding: 15px;
  display: flex;
  cursor: pointer;
}

.post-item + .post-item {
  margin-top: 10px;
}

.post-thumbnail {
  border: 1px solid gray;
  height: 75px;
  width: 75px;
  padding: 15px;
  margin-right: 25px;
}

.post-title {
  font-weight: bold;
  font-size: 20px;
}
</style>
