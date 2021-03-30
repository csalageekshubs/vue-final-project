export default {
  namespaced: true,
  state: {
    name: '',
    email: '',
    message: ''
  },
  getters: {
    name: (state) => state.name,
    email: (state) => state.email,
    message: (state) => state.message,
    isFormFilled: (state) => state.name && state.email && state.message
  },
  mutations: {
    SET_FORM_FIELD: (state, {key, value}) => state[key] = value
  },
  actions: {}
};