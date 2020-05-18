import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const { SocialStore } = require('@/resources/Social');

export default new Vuex.Store({
  modules: {
    social: SocialStore,
  }
});
