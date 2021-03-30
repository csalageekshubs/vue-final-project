<template>
  <div>
    <h1>HOME VIEW</h1>

    <div class="loading-wrapper" v-if="isFetchingPosts">LOADING...</div>
    <div v-else>
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import PostItem from "@/components/PostItem";

export default {
  name: "HomeView",

  components: {
    PostItem,
  },

  computed: {
    ...mapGetters({
      isFetchingPosts: 'posts/isFetchingPosts',
      posts: "posts/posts",
    }),
  },

  methods: {
    ...mapActions({
      fetchPosts: "posts/fetchPosts",
    }),
  },

  async mounted() {
    await this.fetchPosts();
  },
};
</script>

<style scoped>
.loading-wrapper {
  padding: 15px;
}
</style>
