import Vue from 'vue';
import Vuex from 'vuex';

import posts from './posts';
import contact from './contact';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
      posts,
      contact
  }
})

export default store;