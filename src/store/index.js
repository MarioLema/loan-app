import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    showIntro: true
  },
  mutations: {
    toggleIntro(state) {
      state.showIntro = !state.showIntro;
    }
  }
});
