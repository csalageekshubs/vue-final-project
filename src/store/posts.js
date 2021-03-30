import postService from '@/services/PostService';

export default {
  namespaced: true,
  state: {
    isFetchingPosts: false,
    posts: []
  },
  getters: {
    isFetchingPosts: (state) => state.isFetchingPosts,
    posts: (state) => state.posts,
    postById: (state) => (id) => state.posts.find(p => p.id == id)
  },
  mutations: {
    SET_IS_FETCHING: (state, value) => state.isFetchingPosts = value,
    SET_POSTS: (state, posts) => state.posts = posts
  },
  actions: {
    async fetchPosts({commit}) {
      commit('SET_IS_FETCHING', true);

      const posts = await postService.fetch();
      commit('SET_POSTS', posts);

      commit('SET_IS_FETCHING', false);
    }
  }
};