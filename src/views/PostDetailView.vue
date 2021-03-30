<template>
  <div>
    <h1>POST DETAIL VIEW</h1>
    <img class="post-thumbnail" src="@/assets/logo.png" />

    <div class="content-wrapper">
      <p class="post-title">{{ post.title }}</p>
      <p class="post-body">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PostDetailView",
  computed: {
    ...mapGetters({
      postById: "posts/postById",
    }),
    post() {
      return this.postById(this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch('posts/fetchPostById')
  }
};
</script>

<style scoped>
.content-wrapper {
  width: 60%;
  margin: auto;
  text-align: left;
}

.post-thumbnail {
  border: 1px solid gray;
  padding: 15px;
}

.post-title {
  font-weight: bold;
  font-size: 24px;
}

.post-body {
  font-size: ;
}
</style>
